interface Props {
  children?: React.ReactNode;
  styles?: string;
}

export default function Button({ children, styles }: Props) {
  return (
    <button
      className={
        "flex border border-gray-500 rounded-full justify-center items-center " +
        (styles ? styles : "")
      }
    >
      {children}
    </button>
  );
}
