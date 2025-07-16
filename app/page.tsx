import MovieCards from "@/components/MovieCards";
import Filters from "@/components/Filters";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Filters />
      <MovieCards />
    </div>
  );
}
