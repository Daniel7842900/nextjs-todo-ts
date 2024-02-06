import CompleteButton from "@/app/todo/CompleteButton";
import React from "react";
import CreateButton from "@/app/todo/CreateButton";
import UndoButton from "@/app/todo/UndoButton";

export interface ITask {
  idx: number;
  content: string;
  complete: boolean;
  isNew: boolean;
}

interface Props {
  idx: number;
  content: string;
  complete: boolean;
  isNew: boolean;
  handleNewTaskContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleCreateTaskOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleContentChange: (newContent: string, idx: number) => void;
  handleCompleteChange: (newValue: boolean, idx: number) => void;
}

export default function Card({
  idx,
  content,
  complete,
  isNew,
  handleNewTaskContentChange,
  handleCreateTaskOnClick,
  handleContentChange,
  handleCompleteChange,
}: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isNew) handleNewTaskContentChange(e);
    else handleContentChange(e.target.value, idx);
  };

  const handleCompleteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleCompleteChange(!complete, idx);
  };

  return (
    <div
      className={
        complete
          ? "w-8/12 min-h-[96px] bg-green-500 flex border border-red-200 rounded-lg my-2 justify-between items-center "
          : "w-8/12 min-h-[96px] bg-white flex border border-red-200 rounded-lg my-2 justify-between items-center "
      }
    >
      <div className={"flex-1 mx-4"}>
        <label htmlFor="task" className="hidden">
          Add a task
        </label>
        <textarea
          name="task"
          placeholder="Add a task..."
          rows="3"
          className={
            complete
              ? "resize-none w-full outline-0 bg-green-500 text-gray-500"
              : "resize-none w-full outline-0 cursor-pointer focus:cursor-text bg-white"
          }
          readOnly={complete ? true : false}
          value={content}
          onChange={handleOnChange}
        />
      </div>
      {isNew ? (
        <CreateButton
          styles="mr-4 hover:bg-blue-500 hover:border-blue-500 group"
          onCreate={handleCreateTaskOnClick}
        />
      ) : complete ? (
        <UndoButton
          styles="mr-4 hover:bg-yellow-500 hover:border-yellow-500 group"
          onComplete={handleCompleteOnClick}
        />
      ) : (
        <CompleteButton
          styles="mr-4 hover:bg-green-500 hover:border-green-500 group"
          onComplete={handleCompleteOnClick}
        />
      )}
    </div>
  );
}
