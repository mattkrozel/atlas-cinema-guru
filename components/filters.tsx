import YearRange from "./yearRange";
import SearchBar from "./searchBar";
import Genres from "./genres";

export default async function Filters() {
    return (
      <div className={'flex flex-row w-100 justify-between'}>
        <div className={'w-4/12 flex flex-col m-7'}>
          <SearchBar />
          <YearRange />
        </div>
        <Genres />
      </div>
    );
  }