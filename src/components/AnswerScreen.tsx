import type { Word } from "@/types"
import CounterDisplay from "./CounterDisplay";
import ResultMessageDisplay from "./ResultMessageDisplay";
import SetQuestion from "./SetQuestion";
import Button from "./Button";
import styles from "@/components/AnswerScreen.module.css";

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
      <div id="answer-view" className={`${ styles.answerArea } ${ className }`}>
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount } />
        <ResultMessageDisplay result={ isCorrect } />
        <SetQuestion pareClassName={ styles.correctAnswerArea } className={ styles.correctAnswerAreaQuestion } currentWord={ currentWordArray[currentIndex] } isDisplayingAnswer={ true } />
        <div className={ styles.userAnswerArea }>
          <p className={ styles.userAnswerTitle }>あなたのこたえ</p>
          <p className={ styles.userAnswer }>{ userInput }</p>
        </div>
        <Button className={ styles.nextQuestionBtn } label="次の問題" variant="primary" onPhaseChange={ onNextQuestion }/>
        <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle" onPhaseChange={onReturn} />
      </div>
    </>
  )
}