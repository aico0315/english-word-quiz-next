'use client';

import { useState } from "react";
import CategorySelectContainer from "./CategorySelectContainer";
import Button from "./Button";
import type { Word } from "@/types";

interface DashboardProps {
  wordArray: Word[];
  className: string;
}

export default function Dashboard ({ wordArray, className }: DashboardProps){

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={`menu-area ${ className }`}>
        <Button className="question-newStart-btn menu-item" label="はじめる" onPhaseChange={ handleModalOpen }/>
        {/* <Button className="add-newQuestion-btn menu-item" label="単語を追加する" onPhaseChange={onDisplay}/> */}
        {/* <img className='menuArea-img-area' src={ talkingChildren } alt="話ている子どもたち" /> */}
      </div>
      <CategorySelectContainer wordArray={ wordArray } onModalClose={ handleModalClose } isModalOpen={ isModalOpen } />
    </>
  )

}

