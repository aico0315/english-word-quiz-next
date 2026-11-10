'use client';

import styles from "@/components/WordManager.module.css";
import type { Word, WordFormData } from "@/types";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
// import WordForm from "@/components/WordForm";
import WordList from "@/components/WordList";
import Button from "@/components/Button";

interface WordManagerProps {
  className: string;
  wordArray: Word[];
}

export default function WordManager({ className, wordArray }: WordManagerProps){

  const [ currentWordArray, setCurrentWordArray ] = useState<Word[]>(wordArray);

  const [ newWord, setNewWord ] = useState<WordFormData>({
    id: "",
    category: "",
    question: "",
    answer: "",
    supplement:"",
  });

  const [ selectedWordId, setSelectedWordId ] = useState<string>("");

  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<{ [key: string]: HTMLDetailsElement | null }>({});

  const handleNewWordReset = () => {
    if(selectedWordId){
      wordRefs.current[selectedWordId]?.scrollIntoView({behavior: "smooth"})
    }
    setNewWord(
    {
    id: "",
    category: "",
    question: "",
    answer: "",
    supplement:"",
    }
    )
    setSelectedWordId("");
  }

  const handleClickRegistration = () => {
    if(selectedWordId){
      const update = currentWordArray.map(word => word.id === selectedWordId ? { ...newWord, answer: newWord.answer.split(/[、,]/) } : word);
      setCurrentWordArray(update);
    }else{
      const newId = crypto.randomUUID();
      setCurrentWordArray(prev => {
        const newArray = [...prev, {...newWord, answer : newWord.answer.split(/[、,]/), id: newId}]
        return newArray;
      });
      setShowSuccessMessage(true);
      setTimeout(()=> setShowSuccessMessage(false), 2000);
    }
    handleNewWordReset();
  }

  const handleClickSetId = (wordId: string) => {
    setSelectedWordId(wordId);
    const getSelectedWord = currentWordArray.find(word => word.id === wordId);
    if(getSelectedWord){
      setNewWord({...getSelectedWord, answer: getSelectedWord.answer.join("、")});
      formRef.current?.scrollIntoView({ behavior: "smooth"});
    }
  }

  const handleClickDelete = (wordId: string) => {
    const targetWord = currentWordArray.find(word => word.id === wordId);
    if(!targetWord) return;

    if(window.confirm(`本当に${targetWord.question}を削除しますか？`)){
      const deletedWordArray = currentWordArray.filter(word => word.id !== wordId);
      setCurrentWordArray(deletedWordArray);
    }
  }

  const router = useRouter();
  const handleReturn = ()=> router.push('/');

  return(
    <div id="add-question-view" ref={ formRef } className={`${styles.addQuestionArea} ${className}`}>
      {/* <WordForm className="" formRef={ formRef } newWord={ newWord } showSuccessMessage={ showSuccessMessage } setNewWord={ setNewWord } wordReset={ handleNewWordReset } registration={ handleClickRegistration } selectedWordId={ selectedWordId }/> */}
      <WordList currentWordArray={ currentWordArray } handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete } wordRefs={ wordRefs } />
      <Button className={`return-menu-btn ${styles.inPageFlow}`} label="メニューへ戻る" onPhaseChange={ handleReturn } />
    </div>
  )
}