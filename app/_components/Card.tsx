import Button from "@/app/_components/Button";
import CompleteButton from "@/app/(routes)/todo/CompleteButton";
import React, { useState } from "react";
import CreateButton from "@/app/(routes)/todo/CreateButton";

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
  // handleOnChange: (newContent: string, idx: number) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isNewTaskClicked: boolean;
  // handleCreateTaskOnClick: (newTask: ITask) => void;
  handleCreateTaskOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Card({
  idx,
  content,
  complete,
  isNew,
  handleOnChange,
  handleCreateTaskOnClick,
}: Props) {
  return (
    <div className="w-8/12 min-h-[96px] flex border border-red-200 bg-white rounded-lg my-2 justify-between items-center">
      <div className="flex-1 mx-4">
        <label htmlFor="task" className="hidden">
          Add a task
        </label>
        <textarea
          name="task"
          placeholder="Add a task..."
          rows="3"
          className="resize-none w-full outline-0 cursor-pointer focus:cursor-text"
          value={content}
          onChange={handleOnChange}
        />
      </div>
      {isNew ? (
        <CreateButton
          styles="mr-4 hover:bg-blue-500 hover:border-blue-500 group"
          // onCreate={handleCreate}
          onCreate={handleCreateTaskOnClick}
        />
      ) : (
        <CompleteButton styles="mr-4 hover:bg-green-500 hover:border-green-500 group" />
      )}
    </div>
  );
}
