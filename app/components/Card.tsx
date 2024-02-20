import CreateButton from "@/app/todo/CreateButton";
import CompleteButton from "@/app/todo/CompleteButton";
import UndoButton from "@/app/todo/UndoButton";

export interface ITask {
  idx: number;
  content: string;
  complete: boolean;
  isNew: boolean;
}

interface Props {
  idx: number;
  content: string;
  complete: boolean;
  isNew: boolean;
  handleCreateTaskOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleContentChange: (newContent: string, idx: number) => void;
  handleNewTaskContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleCompleteChange: (newValue: boolean, idx: number) => void;
}

export default function Card({
  idx,
  content,
  complete,
  isNew,
  handleNewTaskContentChange,
  handleContentChange,
  handleCreateTaskOnClick,
  handleCompleteChange,
}: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isNew) handleNewTaskContentChange(e);
    else handleContentChange(e.target.value, idx);
  };

  const handleCompleteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleCompleteChange(!complete, idx);
  };

  return (
    <div
      className={
        complete
          ? "w-8/12 min-h-[96px] bg-green-500 flex border border-red-200 rounded-lg my-2 justify-between items-center "
          : "w-8/12 min-h-[96px] bg-white flex border border-red-200 rounded-lg my-2 justify-between items-center "
      }
    >
      <div className="flex-1 mx-4">
        <label htmlFor="task" className="hidden">
          Add a task
        </label>
        <textarea
          name="task"
          placeholder="Add a task..."
          rows="3"
          className={
            complete
              ? "resize-none w-full outline-0 bg-green-500 text-gray-500"
              : "resize-none w-full outline-0 cursor-pointer focus:cursor-text bg-white"
          }
          readOnly={complete ? true : false}
          onChange={handleOnChange}
          value={content}
        />
      </div>
      {isNew ? (
        <CreateButton onCreate={handleCreateTaskOnClick} />
      ) : complete ? (
        <UndoButton onUndo={handleCompleteOnClick} />
      ) : (
        <CompleteButton onComplete={handleCompleteOnClick} />
      )}
    </div>
  );
}
