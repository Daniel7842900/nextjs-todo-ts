import ToDo from "@/app/(routes)/todo/ToDo";

export default function Page() {
  return (
    <div className="min-h-screen h-screen m-0">
      {/*<div className="flex h-1/5 justify-center items-center mx-auto">*/}
      {/*  <h1 className="text-5xl">Welcome to ToDo App</h1>*/}
      {/*</div>*/}
      <div className="flex flex-col h-3/5 items-center mx-auto">
        <ToDo />
      </div>
    </div>
  );
}
