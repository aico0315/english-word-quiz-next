'use client'

import Button from "@/components/Button";
// import "/src/components/Button.css";
// import "./Dashboard.css";
// import "./CategorySelect.css";
import getSortedCategories from "@/utils/getSortedCategories";
import { motion } from "motion/react";
import type { Word } from "@/types";

interface CategorySelectProps {
  className: string;
  wordArray: Word[];
  onUpdate: (label: string | React.ReactElement)=> void;
  onClose: ()=> void;
  onScreenLifecycle: ()=> void;
}

export default function CategorySelect ({ className, wordArray, onUpdate, onClose, onScreenLifecycle }: CategorySelectProps){
  const categories = getSortedCategories(wordArray);

  return(
    <motion.div className={`modal-overlay ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3 }}>
      <motion.div className="mode-select-area menu-list active"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.3 }}>
        <div className="category-list-scroll-area">
          {categories.map(elem=>
            <Button className="category-btns-container category-btns" variant="text" label={elem} key={elem} onUpdate={onUpdate} onPhaseChange={onScreenLifecycle}/>
          )}
          <Button className="weak-words-btn category-btns" variant="text" label="苦手な単語"/>
        </div>
        {/* <Button className="question-continue-btn category-btns" variant="text" label="つづきから"/> */}
        <Button className="close-btn" variant="subtle" label="× 閉じる" onUpdate={ onUpdate } onPhaseChange={ onClose }/>
      </motion.div>
    </motion.div>
  )
}