interface Props {
  children?: React.ReactNode;
  styles?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, styles, onClick }: Props) {
  return (
    <button
      className={
        "flex border border-gray-500 rounded-full justify-center items-center " +
        (styles ? styles : "")
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
