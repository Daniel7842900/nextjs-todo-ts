"use client";
import React from "react";
import Card from "@/app/_components/Card";
import AddButton from "@/app/(routes)/todo/AddButton";
import NewTask from "@/app/(routes)/todo/NewTask";

export default function ToDo(props) {
  return (
    <div className="flex flex-col min-w-[1446px] border border-sky-200 items-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <NewTask />
    </div>
  );
}
