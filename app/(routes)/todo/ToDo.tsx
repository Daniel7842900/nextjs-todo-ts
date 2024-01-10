"use client";
import React, { useEffect, useState } from "react";
import Card, { ITask } from "@/app/_components/Card";
import NewTask from "@/app/(routes)/todo/NewTask";

export default function ToDo(props) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isNewTaskClicked, setNewTaskClicked] = useState(false);

  const handleAddTaskOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewTaskClicked(!isNewTaskClicked);
  };

  const handleNewTaskClickedChange = (newValue) => {
    setNewTaskClicked(newValue);
  };

  // const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const newContent = e.target.value;
  //   setContent(newContent);
  // };

  // const handleContentOnChange = (newContent: string, idx: number) => {
  //   console.log("handle content on change");
  //   console.log(newContent);
  //   console.log(idx);
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.idx === idx ? { ...task, content: newContent } : task,
  //     ),
  //   );
  // };

  // const handleCreateTaskOnClick = (newTask: ITask) => {
  //   const newTasks = tasks;
  //   newTasks.push(newTask);
  //   setTasks(newTasks);
  // };

  // const handleCreateTaskOnClick = (newTask: ITask) => {
  //   const newTasks = tasks;
  //   newTasks.push(newTask);
  //   setTasks(newTasks);
  // };

  const handleCreateTaskOnClick = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // useEffect(() => {
  //   // Code that depends on the updated state
  //   console.log(tasks);
  // }, [tasks]); // Ensure to include tasks in the dependency array

  return (
    <div className="flex flex-col min-w-[1446px] border border-sky-200 items-center">
      {tasks.map((task) => {
        return (
          <Card
            key={task.idx}
            content={task.content}
            complete={task.complete}
            isNew={task.isNew}
            // handleOnChange={(newContent) =>
            //   handleContentOnChange(newContent, task.idx)
            // }
            // handleOnChange={handleContentOnChange}
          />
        );
      })}
      <NewTask
        tasks={tasks}
        isNewTaskClicked={isNewTaskClicked}
        handleAddTaskOnClick={handleAddTaskOnClick}
        handleNewTaskClickedChange={handleNewTaskClickedChange}
        // handleOnChange={handleContentOnChange}
        handleCreateTaskOnClick={handleCreateTaskOnClick}
      />
    </div>
  );
}
