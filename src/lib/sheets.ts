import { google } from "googleapis";

export type SheetData = {
  headers: string[];
  rows: string[][];
};

export async function getSheetData(
  spreadsheetId: string,
  sheetName?: string
): Promise<SheetData | null> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) return null;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const range = sheetName ? `${sheetName}!A:Z` : "A:Z";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values ?? [];
    if (values.length === 0) return { headers: [], rows: [] };

    const [headerRow, ...dataRows] = values;
    const headers = headerRow.map(String);
    const rows = dataRows.map((row) =>
      headers.map((_, i) => (row[i] != null ? String(row[i]) : ""))
    );

    return { headers, rows };
  } catch {
    return null;
  }
}
