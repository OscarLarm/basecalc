"use client";
import Image from "next/image";
import InputCard from "./components/InputCard";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center pt-32 px-16 bg-neutral-950">
      <div className="flex-1 flex-col w-full flex items-center justify-start gap-16">
        <InputCard />
        <InputCard />
        <InputCard />
        <InputCard />
      </div>
    </main>
  );
}
