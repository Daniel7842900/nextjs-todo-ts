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
      <IconButton
        icon={FaPlus}
        styles="flex border-0 rounded-full justify-center items-center w-[36px] h-[36px] mx-2 "
        iconStyles="w-full h-full text-gray-500"
      />
      {children}
    </div>
  );
}
