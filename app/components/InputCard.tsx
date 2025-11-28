import {
  Card,
  CardBody,
  CardHeader,
  Input,
  NumberInput,
  Divider,
} from "@heroui/react";

export default function InputCard() {
  return (
    <Card className="w-full flex flex-col border rounded-xl bg-neutral-950 border-neutral-800 p-4 gap-0.5 justify-baseline items-start hover:border-neutral-700 transition-all duration-200">
      <p className="px-1.5 text-neutral-500 text-sm font-bold uppercase tracking-wider font-mono">Hexadecimal</p>
      <div className="flex items-center">
        <p className="text-neutral-600 text-md font-mono px-1.5">0x</p>
        <Input classNames={{inputWrapper: [
          "bg-transparent",
          "shadow-none",
          "data-[hover=true]:bg-transparent",
          "group-data-[focus=true]:bg-transparent",
          "p-0"
        ],
        input: "text-lg font-mono"}} prefix="0x" placeholder="0" size="lg" />
      </div>
    </Card>
  );
}
