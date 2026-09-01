import { redirect } from "next/navigation";

// adopsは外部提供サービスとしての掲載を終了（自社内製ツールとして利用継続）。
// 過去のリンク・ブックマーク・検索インデックス経由のアクセスはトップへ誘導する。
export default function AdopsServicePage() {
  redirect("/");
}
