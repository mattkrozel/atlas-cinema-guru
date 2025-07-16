import FavoritesMovieCards from "@/components/FavoritesMovieCards";
import FavoritesHeader from "@/components/FavoritesHeader";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen">
      <FavoritesHeader />
      <FavoritesMovieCards />
    </div>
  );
}