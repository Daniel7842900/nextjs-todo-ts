import TextButton from "@/app/_components/TextButton";

interface Props {
  styles?: string;
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CreateButton({ styles, onCreate }: Props) {
  return (
    <TextButton styles={styles} onClick={onCreate}>
      <span className="group-hover:text-white">Create</span>
    </TextButton>
  );
}
