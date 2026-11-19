'use client';

import { useState } from "react";
import CategorySelectContainer from "./CategorySelectContainer";
import Button from "./Button";
import type { Word } from "@/types";
import styles from "@/components/Dashboard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import talkingChildren from "@/assets/talkingChildren.png";


interface DashboardProps {
  wordArray: Word[];
  className: string;
}

export default function Dashboard ({ wordArray, className }: DashboardProps){

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const router = useRouter();
  const handleMoveToWordManager = () => router.push('/words');

  return (
    <>
      <div className={`${ styles.menuArea } ${ className }`}>
        <Button className={`question-newStart-btn  ${styles.menuItem}`} label="はじめる" onPhaseChange={ handleModalOpen }/>
        <Button className={`add-newQuestion-btn ${styles.menuItem}`} label="単語を追加する" onPhaseChange={ handleMoveToWordManager }/>
        <Image className={ styles.menuAreaImgArea } src={ talkingChildren } alt="話ている子どもたち" />
      </div>
      <CategorySelectContainer wordArray={ wordArray } onModalClose={ handleModalClose } isModalOpen={ isModalOpen } />
    </>
  )

}

