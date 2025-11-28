import BaseCard from "./BaseCard";
export default function BaseCardContainer() {
    return (
        <div className="grid-cols-3 grid-rows-1 grid gap-16">
            <BaseCard />
            <BaseCard />
            <BaseCard />
        </div>
    );
}