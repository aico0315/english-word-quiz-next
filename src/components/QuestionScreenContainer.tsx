'use client';

import { useRouter, useSearchParams } from "next/navigation"
import QuestionScreen from "@/components/QuestionScreen";
import { useState, useEffect } from "react";
import getWordsByCategory from "@/utils/getWordsByCategory";
import type { Word } from "@/types";
import AnswerScreen from "@/components/AnswerScreen";
import AllAnsweredView from "@/components/AllAnsweredView";

type ScreenName = "questionScreen" | "answerScreen" | "allAnsweredView";

interface QuestionScreenContainerProps {
  wordArray: Word[];
  className: string;
}

export default function QuestionScreenContainer ({ wordArray, className }: QuestionScreenContainerProps){
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const currentWordArray = getWordsByCategory(wordArray, selectedCategory);

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const [ userInput, setUserInput ] = useState<string>("");
  const [ currentScreen, setCurrentScreen ] = useState< ScreenName >("questionScreen");

  const [ isCorrect, setIsCorrect ] = useState<boolean | null>(null);

  //正規化関数
  function normalizeInput (inputValue: string): string{
    const result = inputValue.trim();
    return result;
  }

  //正誤判定関数
  function correctnessCheck (userInput: string, currentAnswer: string[]): boolean{
    const normalizedUserInput = normalizeInput(userInput);
    const normalizedCurrentAnswer = currentAnswer.map(ans => normalizeInput(ans));

    return normalizedCurrentAnswer.includes(normalizedUserInput);
  }

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
    if(!currentWordArray) return;

    setCurrentScreen("answerScreen");
    setIsCorrect(correctnessCheck(userInput, currentWordArray[currentIndex].answer));
  }

  const handleNextQuestion = () => {
    if(!currentWordArray) return;

    if(currentIndex + 1 >= currentWordArray.length){
      setCurrentScreen("allAnsweredView");
    } else {
    setCurrentScreen("questionScreen");
    setCurrentIndex(currentIndex + 1);
    setUserInput("");
    }
  }

  return (
    <>
      {selectedCategory !== null && currentWordArray && currentScreen === "questionScreen" && <QuestionScreen className={ className } onReturn={ handleReturn } onDisplay={ handleAnswerScreenDisplay } currentIndex={ currentIndex } currentWordArray={ currentWordArray } value={ userInput } setUserInput={ setUserInput } selectedCategory={ selectedCategory } />}
      { isCorrect !== null && currentWordArray && currentScreen === "answerScreen" && <AnswerScreen currentWordArray={ currentWordArray } className="" currentIndex={ currentIndex } onNextQuestion={ handleNextQuestion } userInput={ userInput } isCorrect={ isCorrect } onReturn={ handleReturn } selectedCategory={ selectedCategory } /> }
      { currentScreen === "allAnsweredView" && <AllAnsweredView className="" onReturn={ handleReturn }/>}
    </>
  )
}