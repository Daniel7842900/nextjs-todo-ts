import AddButton from "./AddButton";
import React, { useState } from "react";
import Card, { ITask } from "@/app/components/Card";

interface Props {
  tasks: ITask[];
  isNewTaskClicked: boolean;
  handleNewTaskClickedChange: (newValue: boolean) => void;
  handleCreateTask: (newTask: ITask) => void;
}

export default function NewTask({
  tasks,
  isNewTaskClicked,
  handleNewTaskClickedChange,
  handleCreateTask,
}: Props) {
  const [newTask, setNewTask] = useState<ITask>({
    idx: 0,
    content: "",
    isNew: true,
    complete: false,
  });

  const handleNewTaskContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewTask({
      ...newTask,
      content: e.target.value,
    });
  };

  const handleCreateButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Check if the content is not empty before adding the task
    if (newTask && newTask.content.trim() !== "") {
      const newIdx = tasks.length === 0 ? 0 : tasks.length;
      handleCreateTask({
        ...newTask,
        idx: newIdx,
        content: newTask.content,
        isNew: false,
      });
      handleNewTaskClickedChange(false);
      setNewTask({
        ...newTask,
        content: "",
      });
    }
  };

  return (
    <>
      {!isNewTaskClicked ? (
        <div className="w-8/12 min-h-[96px] flex rounded-lg my-2 justify-center items-center">
          <AddButton
            styles="mx-2 border-0 "
            onClick={() => handleNewTaskClickedChange(true)}
          >
            <span className="text-gray-500 text-2xl hover:cursor-pointer">
              Add Task
            </span>
          </AddButton>
        </div>
      ) : (
        <Card
          isNew={true}
          handleNewTaskContentChange={handleNewTaskContentChange}
          handleCreateTaskOnClick={handleCreateButtonClick}
        />
      )}
    </>
  );
}
