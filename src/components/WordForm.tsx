import { Dispatch } from "react";
import type { WordFormData } from "@/types";
import Button from "./Button";
import styles from "@/components/WordForm.module.css";


interface WordFormProps {
  setNewWord: Dispatch<React.SetStateAction<WordFormData>>;
  newWord: WordFormData;
  wordReset: ()=> void;
  handleClickRegistration: ()=> void;
  selectedWordId: string;
  showSuccessMessage: boolean;
}

export default function WordForm ({ setNewWord, newWord, wordReset, handleClickRegistration, selectedWordId, showSuccessMessage }: WordFormProps){
  return(
    <>
      <div className={ styles.addCategoryArea }>
        <p className={ styles.wordCategory }>カテゴリーを登録してね</p>
        <input className={ styles.inputCategory } type="text" list="category-list" placeholder="「英単語」や「IT用語」など" value={ newWord.category } onChange={ (e) => setNewWord({...newWord, category: e.target.value}) }/>
        <datalist id={ styles.categoryList }></datalist>
      </div>
      <div className={ styles.addEnglishArea }>
        <p className={ styles.wordEnglish }>覚えたい英単語を入力してね</p>
        <input className={ styles.inputEnglishWord } type="text" name="input-add-question" value={ newWord.question } onChange={ (e) => setNewWord({...newWord, question: e.target.value}) }/>
      </div>
      <div className={ styles.addJapaneseArea }>
        <p className={ styles.wordJapanese }>英単語の日本語を入力してね</p>
        <input className={ styles.inputJapaneseWord } type="text" name="input-add-question" value={ newWord.answer } onChange={ (e) => setNewWord({...newWord, answer: e.target.value}) }/>
      </div>
      <div className={ styles.addSupplementArea }>
        <p className={ styles.supplementaryInformation }>補足情報を入力してね（読み方など）</p>
        <textarea className={ styles.inputSupplementaryInformation } name="input-add-supplementary" value={ newWord.supplement } onChange={ (e) => setNewWord({...newWord, supplement: e.target.value}) }></textarea>
      </div>
      <p className={`${ styles.successMessage } ${ showSuccessMessage ? `${ styles.open }` : ""}`}>
        <span>登録しました</span>
      </p>
      <div className={ styles.addBtnArea }>
        <Button className={ styles.cancelBtn } variant="primary" label="キャンセル" onPhaseChange={ wordReset }/>
        <Button className={ styles.addBtn } variant="primary" label={ selectedWordId ? "更新" : "登録" } onPhaseChange={ handleClickRegistration }/>
      </div>
    </>
  )
}