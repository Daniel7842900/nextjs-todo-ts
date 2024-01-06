import Button from "@/app/_components/Button";
import { FaPlus } from "react-icons/fa";

interface Props {
  styles?: string;
}

export default function AddButton({ styles }: Props) {
  return (
    <Button styles={styles}>
      <FaPlus className="w-full h-full text-gray-500" />
    </Button>
  );
}
