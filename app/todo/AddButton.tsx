import Button from "@/app/components/Button";
import { FaPlus } from "react-icons/fa";
import IconButton from "@/app/components/IconButton";

interface Props {
  styles?: string;
  children?: React.ReactHTMLElement<any>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function AddButton({ styles, children, onClick }: Props) {
  return (
    <div className="flex justify-center items-center" onClick={onClick}>
      <IconButton styles={styles}>
        <FaPlus className="w-full h-full text-gray-500" />
      </IconButton>
      {children}
    </div>
  );
}
