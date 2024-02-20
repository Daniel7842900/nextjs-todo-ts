import { IconType } from "react-icons";

interface Props {
  styles?: string;
  iconStyles?: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({
  styles,
  iconStyles,
  icon: IconComponent,
  onClick,
}: Props) {
  return (
    <button onClick={onClick} className={styles}>
      {IconComponent && <IconComponent className={iconStyles} />}
    </button>
  );
}
