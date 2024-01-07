import Button from "@/app/_components/Button";
import { FaCheck } from "react-icons/fa";

interface Props {
  styles?: string;
}

export default function CompleteButton({ styles }: Props) {
  return (
    <Button styles={styles}>
      <FaCheck className="w-3/4 h-3/4" />
    </Button>
  );
}
