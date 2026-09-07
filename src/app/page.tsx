import { getWords } from "@/lib/words";
import Dashboard from "@/components/Dashboard";

export default async function Home (){
  const wordArray = await getWords();

  return (
    <>
      <Dashboard wordArray={ wordArray } className="" />
    </>
  )
}