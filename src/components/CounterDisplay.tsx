interface CounterDisplayProps {
  currentNum: number;
  totalLength: number;
}

export default function CounterDisplay ({currentNum, totalLength}: CounterDisplayProps){
  return (
    <div className="counter-area">{`${currentNum} / ${totalLength}`}</div>
  )
}