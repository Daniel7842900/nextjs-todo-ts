interface Props {
  styles?: string;
  text: string;
  textStyles?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TextButton({
  styles,
  text,
  textStyles,
  onClick,
}: Props) {
  return (
    <button onClick={onClick} className={styles}>
      <span className={textStyles}>{text}</span>
    </button>
  );
}
