"use client";
import React, { useState } from "react";
import Card from "@/app/_components/Card";
import NewTask from "@/app/(routes)/todo/NewTask";

export default function ToDo(props) {
  const [tasks, setTasks] = useState([]);
  const [isNewTaskClicked, setNewTaskClicked] = useState(false);
  const handleNewTaskOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setNewTaskClicked(!isNewTaskClicked);
  };

  return (
    <div className="flex flex-col min-w-[1446px] border border-sky-200 items-center">
      <Card />
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {!isNewTaskClicked ? (
        <NewTask handleOnClick={handleNewTaskOnClick} />
      ) : (
        <Card />
      )}
    </div>
  );
}
