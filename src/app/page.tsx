import Link from "next/link";

export default function Home (){
  return (
    <>
      <h1>トップ画面</h1>
      <Link href="/quiz">クイズへ</Link>
      <Link href="/words">単語管理画面へ</Link>
    </>
  )
}