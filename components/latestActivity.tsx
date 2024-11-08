import LatestActivityItem from "./latestActivityItem";

export default async function LatestActivity() {
    return (
        <div className={"bg-teal text-navy mx-4 rounded-xl"}>
            <h2 className={"text-lg mx-5 font-bold text-center pt-3"}>Latest Activites</h2>
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
            <LatestActivityItem />
        </div>
    );
}