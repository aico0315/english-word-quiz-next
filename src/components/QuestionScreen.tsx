import type { Word } from "@/types";
import SetQuestion from "./SetQuestion";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";
import Image from "next/image";
import worryBoyBlue from "@/assets/worryBoyBlue.svg"
import worryGirlWaterBlue from "@/assets/worryGirlWaterBlue.svg"
import styles from "@/components/QuestionScreen.module.css";

interface QuestionScreenProps {
  className: string;
  onReturn: ()=> void;
  onDisplay: ()=> void;
  currentWordArray: Word[];
  currentIndex: number;
  value: string;
  setUserInput: React.Dispatch<React.SetStateAction< string >>;
  selectedCategory: string | null;
}

export default function QuestionScreen ({ className, onReturn, onDisplay, currentWordArray, currentIndex, value, setUserInput, selectedCategory }: QuestionScreenProps){
  const currentIndexDisplay = currentIndex +1;
  const wordsCount = currentWordArray.length;

  return (
    <>
      <p className="selected-category">カテゴリー：{ selectedCategory }</p>
      <div id="question-view" className={`${styles.questionArea} ${ className }`}>
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount }/>
        <div className={styles.counterAndImgArea}>
          <Image className={`${styles.questionAreaImgLeft} ${currentIndex % 2 === 0 ? "": styles.hidden}`} src={ worryBoyBlue } alt="悩んでいる少年" />
          <span></span>
          <Image className={`${styles.questionAreaImgRight} ${currentIndex % 2 !== 0 ? "": styles.hidden}`} src={ worryGirlWaterBlue } alt="悩んでいる少女" />
        </div>
        <SetQuestion pareClassName={ styles.setQuesArea } className={ styles.setQuestion } currentWord={ currentWordArray[currentIndex] } isDisplayingAnswer={ false } />
        <form id={ styles.answerForm } onSubmit={(e) => e.preventDefault()}>
          <input className={ styles.inputAnswer } name="user-input" type="text" placeholder="回答を入力" value={value} onChange={(e) => {
            setUserInput(e.target.value);
          }} />
        </form>
        <Button className={ styles.judgementAnswerBtn } variant="primary" label="答え" onPhaseChange={ onDisplay }/>
        <Button className="return-menu-btn" variant="subtle" label="メニューに戻る" onPhaseChange={ onReturn } />
      </div>
    </>
  )
}