import { Card, CardBody, CardHeader, Input } from "@heroui/react";
export default function BaseCard() {
    return (
        <Card className="font-mono" isPressable>
                <Input className="" label="Decimal" placeholder="42" disabled />
        </Card>
    );
}