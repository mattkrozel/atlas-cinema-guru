import SearchBar from "./SearchBar";
import Genres from "./Genres";
import Year from "./Year";

export default async function Filters() {
  return (
    <form className={'flex flex-row w-full justify-between items-start'}>
      <div className={'w-4/12 flex flex-col m-7'}>
        <SearchBar />
        <Year />
      </div>
      <Genres />
    </form>
  );
}