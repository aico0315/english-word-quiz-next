import type { Word } from "@/types";
import SetQuestion from "./SetQuestion";
import Button from "./Button";

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
  const currentIndexDisplay = currentIndex + 1;
  const wordsCount = currentWordArray.length;

  return (
    <>
      <p className="selected-category">カテゴリー：{ selectedCategory }</p>
      <div id="question-view" className={`question-area ${ className }`}>
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount }/>
        <div className="counter-and-img-area">
          <img className={`questionArea-img-left ${currentIndex % 2 === 0 ? "": "hidden"}`} src={ worryBoyBlue } alt="悩んでいる少年" />
          <span></span>
          <img className={`questionArea-img-right ${currentIndex % 2 !== 0 ? "": "hidden"}`} src={ worryGirlWaterBlue } alt="悩んでいる少女" />
        </div>
        <SetQuestion pareClassName="set-quesArea" className="set-question" currentWord={ currentWordArray[currentIndex] } isDisplayingAnswer={ false } />
        <form id="answer-form" onSubmit={(e) => e.preventDefault()}>
          <input className="input-answer" name="user-input" type="text" placeholder="回答を入力" value={value} onChange={(e) => {
            setUserInput(e.target.value);
          }} />
        </form>
        <Button className="judgement-answer-btn" variant="primary" label="答え" onPhaseChange={ onDisplay }/>
        <Button className="return-menu-btn" variant="subtle" label="メニューに戻る" onPhaseChange={ onReturn } />
      </div>
    </>
  )
}