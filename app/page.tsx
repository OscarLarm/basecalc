"use client";
import InputCard from "./components/InputCard";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [numValue, setNumValue] = useState<number | null>(null);

  const handleDecimalChange = (str: string) => {
    if (str === "") {
      setNumValue(null);
      return;
    }
    const cleanStr = str.replace(/[^0-9-]/g, "");
    if (cleanStr === "-") return;

    const val = parseInt(cleanStr, 10);
    if (!isNaN(val)) setNumValue(val);
  };

  const handleHexChange = (str: string) => {
    if (str === "") {
      setNumValue(null);
      return;
    }
    const cleanStr = str.replace(/[^0-9A-Fa-f]/g, "");
    const val = parseInt(cleanStr, 16);
    if (!isNaN(val)) setNumValue(val);
  };

  const handleBinaryChange = (str: string) => {
    if (str === "") {
      setNumValue(null);
      return;
    }
    const cleanStr = str.replace(/[^0-1]/g, "");
    const val = parseInt(cleanStr, 2);
    if (!isNaN(val)) setNumValue(val);
  };

  const decimalDisplay = numValue !== null ? numValue.toString(10) : "";
  const hexDisplay = numValue !== null ? numValue.toString(16).toUpperCase() : "";
  const binaryDisplay = numValue !== null ? numValue.toString(2) : "";


  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center pt-8 sm:pt-32 px-4 sm:px-16 bg-neutral-950 transition-all duration-200">
      <div className="flex-1 flex-col w-full flex items-stretch justify-start gap-4">
        <InputCard title="decimal" prefix="" placeholder="0" value={decimalDisplay} base="10" onChange={handleDecimalChange} />
        <InputCard title="hexadecimal" prefix="0x" placeholder="0" value={hexDisplay} base="16" onChange={handleHexChange} />
        <InputCard title="binary" prefix="" placeholder="0" value={binaryDisplay} base="2" onChange={handleBinaryChange} />
      </div>
    </main>
  );
}
