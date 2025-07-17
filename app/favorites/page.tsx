import FavoritesMovieCards from "@/components/FavoritesMovieCards";
import FavoritesHeader from "@/components/FavoritesHeader";
import { fetchTitles } from "@/lib/data";


export default async function Page() {
  let initialData = await fetchTitles(1, 1990, 2024, "", [""], "");

  return (
    <div className="flex flex-col w-screen">
      <FavoritesHeader />
      <FavoritesMovieCards initialData={initialData} />
    </div>
  );
}