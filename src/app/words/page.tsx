import { getWords } from "@/lib/words"

export default async function WordsPage (){
  const words = await getWords()
  const wordsList = words.map(word =>
    <li key={word.id}>{word.question}</li>
  )

  return (
    <>
    <h1>単語管理画面</h1>
    <ul>
      { wordsList }
    </ul>
    </>
  )
}