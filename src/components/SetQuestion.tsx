import type { Word } from "@/types";
import styles from "@/components/SetQuestion.module.css";

interface SetQuestionProps {
  currentWord: Word;
  isDisplayingAnswer: boolean;
  pareClassName: string;
  className: string;
}

export default function SetQuestion({ currentWord, isDisplayingAnswer, pareClassName, className }: SetQuestionProps){
  return (
    <div className={ pareClassName }>
      <p className={ className }>{ currentWord.question }</p>
      { isDisplayingAnswer && (
        <>
          <p className={styles.correctAnswerTitle}>こたえ</p>
          <p className={styles.correctAnswer}>{ currentWord.answer[0] }</p>
          <p className={styles.supplementMessage}>{ currentWord.supplement }</p>
        </>
        ) }
    </div>
  )
}