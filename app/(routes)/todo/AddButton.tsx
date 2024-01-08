import Button from "@/app/_components/Button";
import { FaPlus } from "react-icons/fa";
import IconButton from "@/app/_components/IconButton";

interface Props {
  styles?: string;
}

export default function AddButton({ styles }: Props) {
  return (
    <IconButton styles={styles}>
      <FaPlus className="w-full h-full text-gray-500" />
    </IconButton>
  );
}
