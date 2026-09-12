'use client';

import { useSearchParams } from "next/navigation"
import QuestionScreen from "@/components/QuestionScreen";

export default function QuizPage (){
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  return (
    <>
      <h1>クイズ画面</h1>
      <QuestionScreen className="" onReturn={} onDisplay={} currentIndex={} currentWordArray={} value="" setUserInput={} selectedCategory={ selectedCategory } />
    </>
  )
}