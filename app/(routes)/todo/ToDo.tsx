"use client";
import React, { useState } from "react";
import Card, { ITask } from "@/app/_components/Card";
import NewTask from "@/app/(routes)/todo/NewTask";

export default function ToDo(props) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isNewTaskClicked, setNewTaskClicked] = useState(false);
  // const [isNew, setNew] = useState(false);
  const handleAddTaskOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewTaskClicked(!isNewTaskClicked);
  };

  // const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const newContent = e.target.value;
  //   setContent(newContent);
  // };

  const handleContentOnChange = (newContent: string, idx: number) => {
    console.log("handle content on change");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.idx === idx ? { ...task, content: newContent } : task,
      ),
    );
  };

  return (
    <div className="flex flex-col min-w-[1446px] border border-sky-200 items-center">
      {/*{tasks.map((task) => {*/}
      {/*  <Card*/}
      {/*    key={task.idx}*/}
      {/*    content={task.content}*/}
      {/*    complete={task.complete}*/}
      {/*    isNew={false}*/}
      {/*    // handleOnChange={(newContent) =>*/}
      {/*    //   handleContentOnChange(newContent, task.idx)*/}
      {/*    // }*/}
      {/*    handleOnChange={handleContentOnChange}*/}
      {/*  />;*/}
      {/*})}*/}
      <NewTask
        isNewTaskClicked={isNewTaskClicked}
        handleAddTaskOnClick={handleAddTaskOnClick}
        handleOnChange={handleContentOnChange}
      />
    </div>
  );
}
