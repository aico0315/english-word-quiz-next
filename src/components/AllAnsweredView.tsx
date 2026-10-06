import happyBoysAndGirls from "@/assets/happyBoysAndGirls.svg";
import Button from "./Button";
import Image from "next/image";
import styles from "@/components/AllAnsweredView.module.css";

interface AllAnsweredViewProps {
  className: string;
  onReturn: ()=> void;
}

export default function AllAnsweredView({ className, onReturn }: AllAnsweredViewProps){
  return(
    <div id="clear-view" className={`${ styles.clearArea} ${ className }`}>
      <p className={ styles.clearMessage }>全問回答</p>
      <p className={ styles.clearText }>全問回答しました<br/>もう一度挑戦しますか？</p>
      <Button className={ styles.retryBtn } label="挑戦する" variant="primary" />
      <Button className={ styles.wrongWordBtn } variant="subtle" label="よく間違える単語に挑戦"/>
      <Button className="return-menu-btn" variant="subtle" label="メニューへ戻る" onPhaseChange={ onReturn }/>
      <Image className={ styles.clearImgArea } src={ happyBoysAndGirls } alt="両手でバンザイをして喜ぶ5人の少年少女" />
    </div>
  )
}