'use client';

// import "/src/components/Button.css";

interface ButtonProps {
  label: string | React.ReactElement;
  className: string;
  variant?: string;
  onUpdate?: (label: string | React.ReactElement)=> void;
  onPhaseChange?: ()=> void;
}

export default function Button({label, className, variant, onUpdate, onPhaseChange }: ButtonProps){
  return(
      <button
        className={`${className} ${variant}`}
        onClick={
          onUpdate && onPhaseChange ? () => { onUpdate(label); onPhaseChange(); }
          : onUpdate ? ()=> onUpdate(label)
          : onPhaseChange }>
          {label}
      </button>
  )
}