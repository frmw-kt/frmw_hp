export type ReportType = "月次レポート" | "週次レポート" | "分析レポート" | "その他";
export type TaskStatus = "todo" | "in_progress" | "done";

export type Report = {
  title: string;
  date: string;
  type: ReportType;
  url: string;
  description?: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: string;
  category?: string;
};

export type SheetConfig = {
  spreadsheetId: string;
  sheetName?: string;
  label?: string;
};

export type Client = {
  name: string;
  since: string;
  services: string[];
  reports: Report[];
  tasks: Task[];
  sheets?: SheetConfig[];
};

export const clients: Record<string, Client> = {
  c518e27bb2fb663d9afffdbcde20d433: {
    name: "株式会社LBC",
    since: "2026年5月",
    services: ["マーケティング支援"],
    reports: [],
    tasks: [],
    sheets: [
      {
        spreadsheetId: "スプレッドシートIDをここに入力",
        sheetName: "シート1",
        label: "Google広告レポート",
      },
    ],
  },
  sample: {
    name: "サンプル株式会社",
    since: "2024年4月",
    services: ["マーケティングコンサルティング", "運用代行"],
    reports: [
      {
        title: "2025年4月 月次レポート",
        date: "2025-05-01",
        type: "月次レポート",
        url: "https://example.com/report-april",
        description: "4月の広告パフォーマンス・KPI達成状況をまとめたレポートです。",
      },
      {
        title: "2025年3月 月次レポート",
        date: "2025-04-01",
        type: "月次レポート",
        url: "https://example.com/report-march",
      },
      {
        title: "競合分析レポート",
        date: "2025-04-15",
        type: "分析レポート",
        url: "https://example.com/analysis",
        description: "主要競合3社のマーケティング施策分析",
      },
    ],
    tasks: [
      {
        id: "1",
        title: "LP改修の方向性確認",
        description: "ヒートマップ分析をもとにABテスト案を3パターン提案します。",
        status: "in_progress",
        dueDate: "2025-05-15",
        category: "制作",
      },
      {
        id: "2",
        title: "Google広告 入稿素材の提出",
        status: "todo",
        dueDate: "2025-05-10",
        category: "運用代行",
      },
      {
        id: "3",
        title: "5月キャンペーン設計",
        status: "done",
        category: "コンサルティング",
      },
      {
        id: "4",
        title: "SNSコンテンツカレンダー作成",
        status: "done",
        dueDate: "2025-04-30",
        category: "運用代行",
      },
    ],
  },
};
