import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SERVICE_LABELS: Record<string, string> = {
  consulting: "マーケティングコンサルティング",
  operations: "運用代行",
  production: "制作",
  school: "スクール",
  other: "その他・未定",
};

export async function POST(req: NextRequest) {
  const { company, name, email, service, message } = await req.json();

  const serviceLabel = SERVICE_LABELS[service] || "未選択";

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0a0a0a">
      <h2 style="font-size:20px;margin-bottom:24px;border-bottom:1px solid #e5e5e5;padding-bottom:12px">
        新しいお問い合わせが届きました
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <td style="padding:10px 0;color:#737373;width:140px;vertical-align:top">会社名</td>
          <td style="padding:10px 0">${company || "未記入"}</td>
        </tr>
        <tr style="border-top:1px solid #f0f0f0">
          <td style="padding:10px 0;color:#737373;vertical-align:top">お名前</td>
          <td style="padding:10px 0">${name}</td>
        </tr>
        <tr style="border-top:1px solid #f0f0f0">
          <td style="padding:10px 0;color:#737373;vertical-align:top">メールアドレス</td>
          <td style="padding:10px 0"><a href="mailto:${email}" style="color:#0a0a0a">${email}</a></td>
        </tr>
        <tr style="border-top:1px solid #f0f0f0">
          <td style="padding:10px 0;color:#737373;vertical-align:top">ご興味のあるサービス</td>
          <td style="padding:10px 0">${serviceLabel}</td>
        </tr>
        <tr style="border-top:1px solid #f0f0f0">
          <td style="padding:10px 0;color:#737373;vertical-align:top">お問い合わせ内容</td>
          <td style="padding:10px 0;white-space:pre-wrap">${message}</td>
        </tr>
      </table>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Framework <onboarding@resend.dev>",
      to: "frmw.main@gmail.com",
      replyTo: email,
      subject: `【お問い合わせ】${name}様（${serviceLabel}）`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: "送信に失敗しました" }, { status: 500 });
  }
}
