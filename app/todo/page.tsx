import ToDo from "@/app/todo/ToDo";

export default function Page() {
  return (
    <div className="min-h-screen h-screen m-0 bg-stone-100">
      <div className="flex flex-col h-3/5 items-center mx-auto">
        <ToDo />
      </div>
    </div>
  );
}
