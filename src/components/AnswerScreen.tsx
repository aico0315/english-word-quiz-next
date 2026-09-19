import type { Word } from "@/types"
import CounterDisplay from "./CounterDisplay";
import ResultMessageDisplay from "./ResultMessageDisplay";
import SetQuestion from "./SetQuestion";
import Button from "./Button";

interface AnswerScreenProps {
  currentWordArray: Word[];
  className: string;
  currentIndex: number;
  onNextQuestion: ()=> void;
  userInput: string;
  isCorrect: boolean;
  onReturn: ()=> void;
  selectedCategory: string;
}

export default function AnswerScreen ({ currentWordArray, className, currentIndex, onNextQuestion, userInput, isCorrect, onReturn, selectedCategory }: AnswerScreenProps){
  const wordsCount = currentWordArray.length;
  const currentIndexDisplay = currentIndex + 1;

  return(
    <>
      <p className="selected-category">カテゴリー：{ selectedCategory }</p>
      <div id="answer-view" className={`answer-area ${ className }`}>
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount } />
        <ResultMessageDisplay result={ isCorrect } />
        <SetQuestion pareClassName="correct-answer-area" className="correct-answerArea-question" currentWord={ currentWordArray[currentIndex] } isDisplayingAnswer={ true } />
        <div className="user-answer-area">
          <p className="user-answer-title">あなたのこたえ</p>
          <p className="user-answer">{ userInput }</p>
        </div>
        <Button className="next-question-btn" label="次の問題" variant="primary" onPhaseChange={ onNextQuestion }/>
        <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle" onPhaseChange={onReturn} />
      </div>
    </>
  )
}