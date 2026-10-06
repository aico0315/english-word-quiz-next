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
        <div className={styles.resultMessageArea}>
          <Image className={styles.resultMessageIconLeft} src={ correctGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className={`${styles.resultMessage} ${styles.messageTrue}`}>正解</p>
          <Image className={styles.resultMessageIconLeft} src={ correctBoy } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
        ) : (
        <div className={styles.resultMessageArea}>
          <Image className={styles.resultMessageIconLeft} src={ notCorrectGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className={`${styles.resultMessage} ${styles.messageFalse}`}>残念</p>
          <Image className={styles.resultMessageIconLeft} src={ notCorrectBoyGreen } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
      )}
    </>
  );
}
