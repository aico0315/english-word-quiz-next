'use client'

import Button from "@/components/Button";
import styles from "@/components/CategorySelect.module.css";
import getSortedCategories from "@/utils/getSortedCategories";
import { motion } from "motion/react";
import type { Word } from "@/types";

interface CategorySelectProps {
  className: string;
  wordArray: Word[];
  onCategorySelect: (category: string | React.ReactElement)=> void;
  onModalClose: ()=> void;
  onMoveToQuiz: (category: string | React.ReactElement)=> void;
}

export default function CategorySelect ({ className, wordArray, onCategorySelect, onModalClose, onMoveToQuiz }: CategorySelectProps){
  const categories = getSortedCategories(wordArray);

  return(
    <motion.div className={`${ styles.modalOverlay } ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3 }}>
      <motion.div className={`${ styles.modeSelectArea } ${ styles.menuList }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.3 }}>
        <div className={ styles.categoryListScrollArea }>
          {categories.map(elem=>
            <Button className={ styles.categoryBtns } variant="text" label={elem} key={elem} onUpdate={ onCategorySelect } onPhaseChange={ onMoveToQuiz }/>
          )}
          {/* <Button className="weak-words-btn category-btns" variant="text" label="苦手な単語"/> */}
        </div>
        {/* <Button className="question-continue-btn category-btns" variant="text" label="つづきから"/> */}
        <Button className={ styles.closeBtn } variant="subtle" label="× 閉じる" onPhaseChange={ onModalClose }/>
      </motion.div>
    </motion.div>
  )
}