import type { Word } from "@/types";

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
          <p className="correct-answer-title">こたえ</p>
          <p className="correct-answer">{ currentWord.answer[0] }</p>
          <p className="supplement-message">{ currentWord.supplement }</p>
        </>
        ) }
    </div>
  )
}