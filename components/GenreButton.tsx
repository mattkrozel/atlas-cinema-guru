
type GenreButtonProps = {
  genre: string;
}

export default async function GenreButton(props: GenreButtonProps) {
  return (
    <button type="submit" className={'bg-[#000061] outline-[#85F1D2] outline-1 rounded-3xl text-center p-2 m-1'}>
      {props.genre}
    </button>
  );
}