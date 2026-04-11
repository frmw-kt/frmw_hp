import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /proposal/[slug]/login はスキップ
  if (pathname.match(/^\/proposal\/[^/]+\/login$/)) {
    return NextResponse.next();
  }

  // /proposal/demo はスキップ（ポートフォリオ公開用）
  if (pathname === "/proposal/demo") {
    return NextResponse.next();
  }

  // /proposal/[slug] を保護
  if (pathname.match(/^\/proposal\/[^/]+/)) {
    const token = request.cookies.get("proposal_token")?.value;
    const expected = process.env.PROPOSAL_TOKEN;

    if (!token || token !== expected) {
      const slug = pathname.split("/")[2];
      const loginUrl = new URL(`/proposal/${slug}/login`, request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/proposal/:path*"],
};
