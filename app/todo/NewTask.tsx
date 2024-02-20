"use client";
import { useState } from "react";
import AddButton from "@/app/todo/AddButton";
import Card, { ITask } from "@/app/components/Card";

interface Props {
  tasks: ITask[];
  handleCreateTask: (newTask: ITask) => void;
}

export default function NewTask({ tasks, handleCreateTask }: Props) {
  const [isNewTaskClicked, setNewTaskClicked] = useState(false);
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

  const handleOnTaskClicked = () => {
    setNewTaskClicked(!isNewTaskClicked);
  };

  const handleCreateButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newIdx = tasks.length === 0 ? 0 : tasks.length;
    handleCreateTask({
      ...newTask,
      idx: newIdx,
      content: newTask.content,
      isNew: false,
    });

    setNewTaskClicked(!isNewTaskClicked);

    setNewTask({
      ...newTask,
      content: "",
    });
  };

  return (
    <>
      {!isNewTaskClicked ? (
        <div className="w-8/12 min-h-[96px] flex rounded-lg my-2 justify-center items-center">
          <AddButton onClick={handleOnTaskClicked}>
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
