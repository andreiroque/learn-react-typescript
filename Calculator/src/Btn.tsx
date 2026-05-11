interface BtnProps {
  click?: () => void;
  children: string;
  style: string;
}

const Btn = ({ click, children, style }: BtnProps) => {
  return (
    <button onClick={click} className={style}>
      {children}
    </button>
  );
};

export default Btn;
