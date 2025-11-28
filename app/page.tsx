"use client";
import Image from "next/image";
import InputCard from "./components/InputCard";
import NavigationBar from "./components/NavigationBar";
import BaseCardContainer from "./components/BaseCardContainer";

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-neutral-950">
      <div className="flex-1 flex-col flex items-center justify-start gap-16">
        <InputCard />
        <BaseCardContainer />

      </div>
    </main>
  );
}
