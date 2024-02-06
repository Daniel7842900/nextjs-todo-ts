import Button from "@/app/components/Button";
import { FaCheck } from "react-icons/fa";
import IconButton from "@/app/components/IconButton";

interface Props {
  styles?: string;
  onComplete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CompleteButton({ styles, onComplete }: Props) {
  return (
    <IconButton styles={styles} onClick={onComplete}>
      <FaCheck className="hidden w-3/4 h-3/4 group-hover:block group-hover:text-white " />
    </IconButton>
  );
}
