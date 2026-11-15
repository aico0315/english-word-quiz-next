import { getWords } from "@/lib/words"
import WordManager from "@/components/WordManager"

export default async function WordsPage (){
  const wordArray = await getWords();

  return (
    <>
      <h1>単語管理画面</h1>
      { <WordManager className="" wordArray={ wordArray } /> }
    </>
  )
}