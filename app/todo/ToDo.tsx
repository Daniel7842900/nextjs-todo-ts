"use client";
import NewTask from "@/app/todo/NewTask";
import { useState } from "react";
import Card, { ITask } from "@/app/components/Card";

export default function ToDo() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleCreateTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
      <NewTask tasks={tasks} handleCreateTask={handleCreateTask} />
    </div>
  );
}
