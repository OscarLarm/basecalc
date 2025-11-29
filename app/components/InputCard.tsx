import { Card, Input, Chip, CardBody, CardFooter } from "@heroui/react";
import React, { useRef, useState } from "react";

interface InputCardProps {
  title: string;
  prefix: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  base: string;
  type?: string;
}

export default function InputCard({
  title,
  prefix,
  value,
  onChange,
  placeholder,
  base,
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
        className={`w-full flex flex-row border rounded-xl p-4 gap-0.5 justify-baseline items-start hover:border-neutral-700 transition-all duration-200 cursor-text ${isFocused ? "bg-neutral-900 border-neutral-700" : "bg-neutral-950 border-neutral-800"}`}
      >
        <CardBody className="flex-1">
        <p className={` text-xs font-bold uppercase tracking-wider font-mono ${isFocused ? "text-neutral-300 " : "text-neutral-500"}`}>
          {title}
        </p>
        <div className="flex items-center w-full">
          <Input
            startContent={
              prefix && (
                <p className="text-neutral-600 text-md font-mono">{prefix}</p>
              )
            }
            type={type}
            classNames={{
              inputWrapper: [
                "bg-transparent",
                "shadow-none",
                "data-[hover=true]:bg-transparent",
                "group-data-[focus=true]:bg-transparent",
                "p-0",
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
        </CardBody>
        <div className="w-16 mr-2 flex justify-start text-center">
          <Chip className={`font-mono min-w-18 border transition-all duration-200 ${isFocused ? "bg-neutral-900 border-neutral-700 text-neutral-400" : "bg-neutral-950 border-neutral-800 text-neutral-500"}`} size="sm" variant="bordered" radius="sm" >BASE {base}</Chip>
        </div>
      </Card>
    </div>
  );
}
