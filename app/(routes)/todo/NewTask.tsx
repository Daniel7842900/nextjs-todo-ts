import AddButton from "@/app/(routes)/todo/AddButton";
import React from "react";
import Card from "@/app/_components/Card";

interface Props {
  isNewTaskClicked: boolean;
  handleAddTaskOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleOnChange: (newContent: string, idx: number) => void;
}

export default function NewTask({
  isNewTaskClicked,
  handleAddTaskOnClick,
  handleOnChange,
}: Props) {
  return (
    <>
      {!isNewTaskClicked ? (
        <div
          className="w-8/12 min-h-[96px] flex rounded-lg my-2 justify-center items-center"
          onClick={handleAddTaskOnClick}
        >
          <AddButton styles="mx-2 border-0 " />
          <span className="text-gray-500 text-2xl hover:cursor-pointer">
            Add Task
          </span>
        </div>
      ) : (
        <Card isNew={true} handleOnChange={handleOnChange} />
      )}
    </>
  );
}
