import { getWords } from "@/lib/words";
import QuestionScreenContainer from "@/components/QuestionScreenContainer";

export default async function QuizPage (){
  const wordArray = await getWords();

  return (
    <>
      <QuestionScreenContainer wordArray={ wordArray } className="" />
    </>
  )
}