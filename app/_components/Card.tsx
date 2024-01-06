import Button from "@/app/_components/Button";
import CompleteButton from "@/app/(routes)/todo/CompleteButton";

export default function Card() {
  return (
    <div className="w-8/12 min-h-[96px] flex border border-red-200 bg-white rounded-lg my-2 justify-between items-center">
      <div className="flex-1 mx-4">
        <span>
          content herecontent herecontent herecontent herecontent herecontent
          herecontent herecontent herecontent herecontent herecontent
          herecontent herecontent herecontent herecontent herecontent here
        </span>
      </div>
      <CompleteButton styles="mr-4" />
    </div>
  );
}
