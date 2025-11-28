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
    <>
      <div className="flex flex-col font-mono w-full">
        <Input size="lg" placeholder="0xffffe" />
      </div>
    </>
  );
}
