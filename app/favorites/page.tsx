import MovieCards from "@/components/MovieCards";
import FavoritesHeader from "@/components/FavoritesHeader";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <FavoritesHeader />
      <MovieCards />
    </div>
  );
}