/** 公開予約URL。環境変数で差し替え可能。空文字を設定すると導線を非表示にする。 */
export function bookingUrl(): string | null {
  const value = (process.env.GOOGLE_CALENDAR_BOOKING_URL ?? "https://calendar.app.google/ZWFmxXrvWCY4SFvu8").trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password &&
      ["calendar.google.com", "calendar.app.google"].includes(url.hostname)
      ? url.href : null;
  } catch { return null; }
}
