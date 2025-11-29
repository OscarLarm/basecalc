import { Card, Input } from "@heroui/react";
import React, { useRef, useState } from "react";

interface InputCardProps {
  title: string;
  prefix: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export default function InputCard({
  title,
  prefix,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {

    const input = cardRef.current?.querySelector("input");
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="w-full" ref={cardRef} onClick={handleCardClick}>
      <Card
        className={`w-full flex flex-col border rounded-xl p-4 gap-0.5 justify-baseline items-start hover:border-neutral-700 transition-all duration-200 cursor-text ${isFocused ? "bg-neutral-900 border-neutral-700" : "bg-neutral-950 border-neutral-800"}`}
      >
        <p className={`px-1 text-xs font-bold uppercase tracking-wider font-mono ${isFocused ? "text-neutral-200 " : "text-neutral-500"}`}>
          {title}
        </p>
        <div className="flex items-center w-full">
          {prefix && (
            <p className="text-neutral-600 text-md font-mono">{prefix}</p>
          )}
          <Input
            type={type}
            classNames={{
              inputWrapper: [
                "bg-transparent",
                "shadow-none",
                "data-[hover=true]:bg-transparent",
                "group-data-[focus=true]:bg-transparent",
                "px-1",
              ],
              input: "text-lg font-mono ",
            }}
            className=""
            prefix="0x"
            placeholder={placeholder}
            spellCheck="false"
            autoComplete="off"
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            size="lg"
          />
        </div>
      </Card>
    </div>
  );
}
