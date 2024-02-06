import { FaUndo } from "react-icons/fa";
import IconButton from "@/app/components/IconButton";

interface Props {
  styles?: string;
  onComplete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function UndoButton({ styles, onComplete }: Props) {
  return (
    <IconButton styles={styles} onClick={onComplete}>
      <FaUndo className="hidden w-3/4 h-3/4 group-hover:block group-hover:text-white " />
    </IconButton>
  );
}
