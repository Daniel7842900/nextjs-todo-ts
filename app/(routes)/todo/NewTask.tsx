import AddButton from "@/app/(routes)/todo/AddButton";
import React from "react";

export default function NewTask() {
  return (
    <div className="w-8/12 min-h-[96px] flex rounded-lg my-2 justify-center items-center">
      <AddButton styles="mx-2" />
      <span className="text-gray-500 text-xl">Add Task</span>
    </div>
  );
}
