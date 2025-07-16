export default async function SearchBar() {
  return (
    <form className={'flex flex-col m-3 mb-2'}>
      <label className={'mb-2'}>Search</label>
      <input 
        type="text"
        name="search"
        placeholder="Search Movies..."
        className={'bg-[#000061] outline-1 outline-[#85F1D2] rounded-3xl p-2'}
      />
    </form>
  );
}