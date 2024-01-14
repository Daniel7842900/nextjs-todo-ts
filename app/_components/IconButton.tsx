import Button from "@/app/_components/Button";

interface Props {
  styles?: string;
  children?: React.ReactNode;
}

export default function IconButton({ styles, children }: Props) {
  return <Button styles={"w-[36px] h-[36px] " + styles}>{children}</Button>;
}
