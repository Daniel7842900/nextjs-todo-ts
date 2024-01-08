import Button from "@/app/_components/Button";
import CompleteButton from "@/app/(routes)/todo/CompleteButton";
import { useState } from "react";

interface ICard {
  content: string;
  complete: boolean;
}

export default function Card() {
  const [content, setContent] = useState("");
  const [complete, isComplete] = useState(false);

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

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
          onChange={handleContentOnChange}
        />
      </div>
      <CompleteButton styles="mr-4 hover:bg-green-500 hover:border-green-500 group" />
    </div>
  );
}
