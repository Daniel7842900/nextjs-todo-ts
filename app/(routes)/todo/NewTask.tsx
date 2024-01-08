import AddButton from "@/app/(routes)/todo/AddButton";
import React from "react";

interface Props {
  handleOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function NewTask({ handleOnClick }: Props) {
  return (
    <div
      className="w-8/12 min-h-[96px] flex rounded-lg my-2 justify-center items-center"
      onClick={handleOnClick}
    >
      <AddButton styles="mx-2 border-0 " />
      <span className="text-gray-500 text-2xl">Add Task</span>
    </div>
  );
}
