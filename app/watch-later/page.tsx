import WatchLaterMovieCards from "@/components/WatchLaterMovieCards";
import WatchLaterHeader from "@/components/WatchLaterHeader";
import { fetchTitles } from "@/lib/data";

export default async function Page() {
  let initialData = await fetchTitles(1, 1990, 2024, "", [""], "");

  return (
    <div className="flex flex-col w-screen">
      <WatchLaterHeader />
      <WatchLaterMovieCards initialData={initialData} />
    </div>
  );
}