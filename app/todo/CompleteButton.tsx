import { FaCheck } from "react-icons/fa";
import IconButton from "@/app/components/IconButton";

interface Props {
  styles?: string;
  children?: React.ReactHTMLElement<any>;
  onComplete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CompleteButton({
  styles,
  children,
  onComplete,
}: Props) {
  return (
    <>
      <IconButton
        icon={FaCheck}
        styles="flex border-0 rounded-full justify-center items-center w-[36px] h-[36px] mr-4 hover:bg-green-500 hover:border-green-500 group"
        iconStyles="hidden w-3/4 h-3/4 group-hover:block group-hover:text-white"
        onClick={onComplete}
      />
      {children}
    </>
  );
}
