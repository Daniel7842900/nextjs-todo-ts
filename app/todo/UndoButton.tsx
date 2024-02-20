import { FaUndo } from "react-icons/fa";
import IconButton from "@/app/components/IconButton";

interface Props {
  styles?: string;
  onUndo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function UndoButton({ styles, onUndo }: Props) {
  return (
    <IconButton
      icon={FaUndo}
      styles="flex border-0 rounded-full justify-center items-center w-[36px] h-[36px] mr-4 hover:bg-yellow-500 hover:border-yellow-500 group"
      iconStyles="hidden w-3/4 h-3/4 group-hover:block group-hover:text-white"
      onClick={onUndo}
    />
  );
}
