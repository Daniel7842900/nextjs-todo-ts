import Button from "@/app/components/Button";

interface Props {
  styles?: string;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TextButton({ styles, children, onClick }: Props) {
  return (
    <Button styles={"w-[112px] h-[36px] " + styles} onClick={onClick}>
      {children}
    </Button>
  );
}