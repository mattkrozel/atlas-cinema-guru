import { ClockIcon, FolderIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export async function HomeButton() {
    return (
        <Link href={'/'} className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <FolderIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Home</div>
        </Link>
    );
}

export async function FavoritesButton() {
    return (
        <Link href={'/favorites'} className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <StarIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Favorites</div>
        </Link>
    );
}

export async function WatchLaterButton() {
    return (
        <Link href={'/watch-later'} className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <ClockIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Watch Later</div>
        </Link>
    );
}