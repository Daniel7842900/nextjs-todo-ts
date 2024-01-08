import TextButton from "@/app/_components/TextButton";

interface Props {
  styles?: string;
}

export default function CreateButton({ styles }: Props) {
  return (
    <TextButton styles={styles}>
      <span className="group-hover:text-white">Create</span>
    </TextButton>
  );
}
