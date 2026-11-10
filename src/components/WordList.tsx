import { Word } from "@/types";
import type { RefObject } from "react";
import CategoryAccordion from "@/components/CategoryAccordion";
import styles from "@/components/WordList.module.css"

interface WordListProps {
  currentWordArray: Word[];
  handleClickSetId: (wordId: string)=> void;
  handleClickDelete: (wordId: string)=> void;
  wordRefs: RefObject<{ [key: string]: HTMLDetailsElement | null }>;
}

export default function WordList ({ currentWordArray, handleClickSetId, handleClickDelete, wordRefs }: WordListProps){
  return(
    <div className={ styles.editQuestionArea }>
      <h3 className={ styles.editQuestionAreaTitle }>登録した単語は<br/>以下から編集できます</h3>
        <div id={ styles.editAreaWordList } className={ styles.editAreaWordList }>
          <CategoryAccordion allWords={ currentWordArray } handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete } wordRefs={ wordRefs }/>
        </div>
    </div>
  )
}