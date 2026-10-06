import { getWords } from "@/lib/words";
import QuestionScreenContainer from "@/components/QuestionScreenContainer";
import { Suspense } from "react";

export default async function QuizPage (){
  const wordArray = await getWords();

  return (
    <>
      <Suspense fallback={<p>読み込み中...</p>}>
        <QuestionScreenContainer wordArray={ wordArray } className="" />
      </Suspense>
    </>
  )
}