import Button from "@/components/Button";
import editBtnImg from "@/assets/editBtnImg.svg";
import deleteBtnImg from "@/assets/deleteBtnImg.svg";
import type { Word } from "@/types";
import Image from "next/image";
import styles from "@/components/WordDetail.module.css";

interface WordDetailProps {
  word: Word;
  handleClickSetId: (wordId: string)=> void;
  handleClickDelete: (wordId: string)=> void;
}

export default function WordDetail({ word, handleClickSetId, handleClickDelete }: WordDetailProps){
  const editBtn = <Image src={editBtnImg} alt="鉛筆の画像" />
  const deleteBtn = <Image src={deleteBtnImg} alt="ゴミ箱の画像" />

  return(
    <div className={styles.wordFooter}>
      <p>{word.supplement}</p>
      <Button className={styles.editBtn} variant={styles.editBtnImg} label={ editBtn } onPhaseChange={() => handleClickSetId(word.id)}/>
      <Button className={styles.deleteBtn} variant={styles.deleteBtnImg} label={ deleteBtn } onPhaseChange={ () => handleClickDelete(word.id) }/>
    </div>
  )
}