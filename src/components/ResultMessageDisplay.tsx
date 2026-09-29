import Image from "next/image";
import correctGirl from "@/assets/correctGirl.svg";
import correctBoy from "@/assets/correctBoy.svg";
import notCorrectBoyGreen from "@/assets/notCorrectBoyGreen.svg";
import notCorrectGirl from "@/assets/notCorrectGirl.svg";
import styles from "@/components/ResultMessageDisplay.module.css"

interface ResultMessageDisplayProps{
  result: boolean;
}

export default function ResultMessageDisplay({ result }: ResultMessageDisplayProps){

  return(
    <>
      {result ? (
        <div className="result-message-area">
          <Image className="result-message-icon-left" src={ correctGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message message-true">正解</p>
          <Image className="result-message-icon-left" src={ correctBoy } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
        ) : (
        <div className="result-message-area">
          <Image className="result-message-icon-left" src={ notCorrectGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message message-false">残念</p>
          <Image className="result-message-icon-left" src={ notCorrectBoyGreen } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
      )}
    </>
  );
}
