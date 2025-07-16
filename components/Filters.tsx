import SearchBar from "./SearchBar";
import Genres from "./Genres";
import Year from "./Year";

export default async function Filters() {
  return (
    <div className={'flex flex-row w-100 justify-between'}>
      <div className={'w-4/12 flex flex-col m-7'}>
        <div className={'flex flex-col m-3 mb-2'}>
          <SearchBar />
        </div>
        <div className={'flex m-3 justify-between'}>
          <div className={'flex flex-col'}>
            <Year />
          </div>
        </div>
      </div>
        <div className={'w-4/12 m-7'}>
          <Genres />
        </div>
    </div>
  );
}