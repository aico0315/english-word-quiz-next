import type { Word } from "@/types"

//カテゴリーを取得・並び替えして返す
export default function getSortedCategories (wordsArray: Word[]): string[]{
  //結果、["IT用語", "日常英会話", "", "", ....]という親のリストができる
  const uniqueCategories = [...new Set(wordsArray.map(word => word.category || "未設定"))];

  // 2. 「未設定」を一番下にするための並び替えルール
  uniqueCategories.sort((a, b) => {
     if (a === "未設定") return 1;  // aが未設定なら、bより後ろ(1)にする
     if (b === "未設定") return -1; // bが未設定なら、aを前(-1)にする
     return a.localeCompare(b, 'ja'); // それ以外は日本語の辞書順で並べる
  });

  return uniqueCategories;
}