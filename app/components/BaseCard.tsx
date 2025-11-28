import { Card, CardBody, CardHeader, Input } from "@heroui/react";
export default function BaseCard() {
    return (
        <Card className="font-mono" isPressable>
            {/* <CardHeader> */}
                {/* <p>Decimal</p> */}
            {/* </CardHeader> */}
            <CardBody className="p-0">
                {/* <p>42</p> */}
                <Input className="" label="Decimal" placeholder="42" disabled />
            </CardBody>
        </Card>
    );
}