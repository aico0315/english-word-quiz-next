'use client';

import { useRouter, useSearchParams } from "next/navigation"
import QuestionScreen from "@/components/QuestionScreen";
import { useState, useEffect } from "react";
import getWordsByCategory from "@/utils/getWordsByCategory";
import type { Word } from "@/types";

type ScreenName = "questionScreen" | "answerScreen" | "allAnsweredView";

interface QuestionScreenContainerProps {
  wordArray: Word[];
  className: string;
}

export default function QuestionScreenContainer ({ wordArray, className }: QuestionScreenContainerProps){
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const sortedArray = getWordsByCategory(wordArray, selectedCategory)

  const [ currentWordArray, setCurrentWordArray ] = useState<Word[]>(sortedArray)
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const [ userInput, setUserInput ] = useState<string>("");
  const [ currentScreen, setCurrentScreen ] = useState< ScreenName >("questionScreen");

  const router = useRouter();
  useEffect(()=> {
      if(selectedCategory === null){
        router.push('/');
      }
  }, [selectedCategory, router]);
  
  if(selectedCategory === null){
    return null;
  }

  const handleReturn = ()=> router.push('/');

  const handleAnswerScreenDisplay = () => {
    setCurrentScreen("answerScreen");
  }


  return (
    <>
      <h1>クイズ画面</h1>
      <QuestionScreen className={ className } onReturn={ handleReturn } onDisplay={ handleAnswerScreenDisplay } currentIndex={ currentIndex } currentWordArray={ currentWordArray } value="" setUserInput={ setUserInput } selectedCategory={ selectedCategory } />
    </>
  )
}