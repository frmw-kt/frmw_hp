"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { clients } from "../../data";

const GOLD = "#C9A84C";

async function login(slug: string, from: string, formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  const envKey = `CLIENT_${slug.toUpperCase().replace(/-/g, "_")}_PASSWORD`;
  const expected = process.env[envKey];

  if (expected && password === expected) {
    const cookieStore = await cookies();
    const current = cookieStore.get("client_auth")?.value;
    let authMap: Record<string, boolean> = {};
    try { authMap = JSON.parse(current || "{}"); } catch { /* ignore */ }
    authMap[slug] = true;
    cookieStore.set("client_auth", JSON.stringify(authMap), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect(from || `/clients/${slug}`);
  }

  redirect(`/clients/${slug}/login?error=1&from=${encodeURIComponent(from)}`);
}

export default async function ClientLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { slug } = await params;
  const { from = `/clients/${slug}`, error } = await searchParams;

  const client = clients[slug];
  const loginAction = login.bind(null, slug, from);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="text-xl font-bold tracking-tight" style={{ color: GOLD }}>
            Framework
          </span>
          <p className="mt-3 text-sm text-white/30">
            {client ? `${client.name} 専用ダッシュボード` : "クライアントダッシュボード"}
          </p>
          <p className="mt-1 text-xs text-white/20">
            このページは閲覧制限されています
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8">
          <h1 className="text-base font-semibold text-white mb-6">
            パスワードを入力してください
          </h1>

          {error && (
            <p className="mb-4 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              パスワードが正しくありません
            </p>
          )}

          <form action={loginAction} className="space-y-4">
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              required
              autoFocus
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/30 transition-colors duration-200"
            />
            <button
              type="submit"
              className="w-full text-sm font-semibold text-black py-3 rounded-xl transition-opacity duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)",
              }}
            >
              ログイン
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-white/15">
          パスワードはご担当者よりお伝えしています
        </p>
      </div>
    </div>
  );
}
