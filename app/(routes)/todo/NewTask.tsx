import AddButton from "@/app/(routes)/todo/AddButton";
import React, { useState } from "react";
import Card, { ITask } from "@/app/_components/Card";

interface Props {
  tasks: ITask[];
  isNewTaskClicked: boolean;
  handleAddTaskOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  // handleOnChange: (newContent: string, idx: number) => void;
  handleNewTaskClickedChange: (newValue: boolean) => void;
  handleCreateTaskOnClick: (newTask: ITask) => void;
}

export default function NewTask({
  tasks,
  isNewTaskClicked,
  handleAddTaskOnClick,
  handleOnChange,
  handleNewTaskClickedChange,
  handleCreateTaskOnClick,
}: Props) {
  const [newTask, setNewTask] = useState<ITask>({
    idx: 0,
    content: "",
    isNew: true,
    complete: false,
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({
      ...newTask,
      content: e.target.value,
    });
  };

  const handleCreateButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Check if the content is not empty before adding the task
    if (newTask && newTask.content.trim() !== "") {
      const newIdx = tasks.length === 0 ? 0 : tasks.length;
      handleCreateTaskOnClick({
        ...newTask,
        idx: newIdx,
        content: newTask.content,
        isNew: false,
      });
      handleNewTaskClickedChange(false);
    }
  };

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
        <Card
          isNew={true}
          handleOnChange={handleContentChange}
          handleCreateTaskOnClick={handleCreateButtonClick}
        />
      )}
    </>
  );
}
