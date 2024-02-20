import TextButton from "@/app/components/TextButton";

interface Props {
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CreateButton({ onCreate }: Props) {
  return (
    <TextButton
      styles="flex border border-gray-500 w-[112px] h-[36px] rounded-full justify-center items-center mr-4 hover:bg-blue-500 hover:border-blue-500 group "
      onClick={onCreate}
      text="Create"
      textStyles="group-hover:text-white"
    />
  );
}
