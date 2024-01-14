import Button from "@/app/_components/Button";

interface Props {
  styles?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ styles, children, onClick }: Props) {
  return (
    <Button styles={"w-[36px] h-[36px] " + styles} onClick={onClick}>
      {children}
    </Button>
  );
}
