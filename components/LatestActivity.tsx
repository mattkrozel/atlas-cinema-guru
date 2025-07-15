import LatestActivityItem from "./latestActivityItem";

export default async function LatestActivity() {
    return (
    <div className={'bg-[#85F1D2] text-[#00003c] rounded-xl mx-4'}>
      <h2 className={'text-center font-bold text-lg mx-5 my-3 pt-3'}>Latest Activities</h2>
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