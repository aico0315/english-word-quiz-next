'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import CategorySelect from "./CategorySelect"
import type { Word } from "@/types"
import { AnimatePresence } from "motion/react"
import { label } from "motion/react-client"

interface CategorySelectContainerProps {
  wordArray: Word[];
  onModalClose: ()=> void;
  isModalOpen: boolean;
}

export default function CategorySelectContainer ({ wordArray, onModalClose, isModalOpen }: CategorySelectContainerProps){
  const [ selectedCategory, setSelectedCategory ] = useState< string | null >(null);
  const router = useRouter();

  const handleCategorySelect = (category: string | React.ReactElement) => {
    if(typeof category === "string"){
      setSelectedCategory(category);
    }
  }

  const handleMoveToQuiz = (category: string | React.ReactElement)=> {
    console.log(category);
    router.push(`/quiz?category=${category}`);
    onModalClose();
  }

return (
  <AnimatePresence>
    {isModalOpen && <CategorySelect key="category-select" className="" wordArray={ wordArray } onCategorySelect={ handleCategorySelect } onModalClose={ onModalClose } onMoveToQuiz={ handleMoveToQuiz }/>}
  </AnimatePresence>
)

}
