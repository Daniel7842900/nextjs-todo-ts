"use client";
import React, { useState } from "react";
import Card, { ITask } from "@/app/components/Card";
import NewTask from "./NewTask";

export default function ToDo(props) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isNewTaskClicked, setNewTaskClicked] = useState(false);

  const handleNewTaskClickedChange = (newValue) => {
    setNewTaskClicked(newValue);
  };

  const handleContentChange = (newContent: string, idx: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.idx === idx ? { ...task, content: newContent } : task,
      ),
    );
  };

  const handleCompleteChange = (newValue: boolean, idx: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.idx === idx ? { ...task, complete: newValue } : task,
      ),
    );
  };

  const handleCreateTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="flex flex-col min-w-[1446px] items-center">
      {tasks.map((task) => {
        return (
          <Card
            key={task.idx}
            idx={task.idx}
            content={task.content}
            complete={task.complete}
            isNew={task.isNew}
            handleContentChange={handleContentChange}
            handleCompleteChange={handleCompleteChange}
          />
        );
      })}
      <NewTask
        tasks={tasks}
        isNewTaskClicked={isNewTaskClicked}
        handleNewTaskClickedChange={handleNewTaskClickedChange}
        handleCreateTask={handleCreateTask}
      />
    </div>
  );
}