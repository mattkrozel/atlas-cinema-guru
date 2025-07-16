import Link from "next/link";
import { FolderIcon, StarIcon, ClockIcon } from "@heroicons/react/24/solid";

export async function HomeButton() {
  return (
    <Link href={'/'} className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <FolderIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Home</div>
    </Link>
  );
}

export async function FavoritesButton() {
  return (
    <Link href={'/favorites'} className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <StarIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Favorites</div>
    </Link>
  );
}

export async function WatchLaterButton() {
  return (
    <Link href={'/watch-later'} className={'flex flex-row my-4 mx-auto group-hover:ml-8'}>
      <ClockIcon className={'size-6'} />
      <div className={'ml-2 hidden group-hover:inline'}>Watch Later</div>
    </Link>
  );
}