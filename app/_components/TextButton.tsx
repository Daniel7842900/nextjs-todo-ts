import Button from "@/app/_components/Button";

interface Props {
  styles?: string;
  children?: React.ReactNode;
}

export default function TextButton({ styles, children }: Props) {
  return <Button styles={"w-[112px] h-[36px] " + styles}>{children}</Button>;
}
