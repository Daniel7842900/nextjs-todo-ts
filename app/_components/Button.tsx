interface Props {
  children?: React.ReactNode;
  styles?: string;
}

export default function Button({ children, styles }: Props) {
  return (
    <button
      className={
        "w-[36px] h-[36px] border border-gray-500 rounded-full " +
        (styles ? styles : "")
      }
    >
      {children}
    </button>
  );
}
