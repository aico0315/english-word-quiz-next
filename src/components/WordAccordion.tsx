import { RefObject } from "react";
import WordDetail from "@/components/WordDetail"
import type { Word } from "@/types";
import styles from "@/components/WordAccordion.module.css"

interface WordAccordionProps {
  uniqueCategoryWord: Word[];
  handleClickSetId: (wordId: string)=> void;
  handleClickDelete: (wordId: string)=> void;
  wordRefs: RefObject<{ [key: string]: HTMLDetailsElement | null }>;
}

export default function WordAccordion({ uniqueCategoryWord, handleClickSetId, handleClickDelete, wordRefs }: WordAccordionProps){
  return(
    uniqueCategoryWord.map((word, index) =>
      <details key={word.id} ref={(el) => { wordRefs.current[word.id] = el }}>
        <summary className={ styles.wordSummary }>
          <span>{index + 1}.{word.question}</span>
          <span>/ {word.answer[0]}</span>
          <span>︙</span>
        </summary>
        <WordDetail word={ word } handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete }/>
      </details>
    )
  )
}