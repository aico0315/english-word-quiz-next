import styles from "@/components/CounterDisplay.module.css";

interface CounterDisplayProps {
  currentNum: number;
  totalLength: number;
}

export default function CounterDisplay ({currentNum, totalLength}: CounterDisplayProps){
  return (
    <div className={styles.counterArea}>{`${currentNum} / ${totalLength}`}</div>
  )
}