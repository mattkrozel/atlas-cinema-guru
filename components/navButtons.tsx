import { ClockIcon, FolderIcon, StarIcon } from "@heroicons/react/24/outline";

export async function HomeButton() {
    return (
        <div className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <FolderIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Home</div>
        </div>
    );
}

export async function FavoritesButton() {
    return (
        <div className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <StarIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Favorites</div>
        </div>
    );
}

export async function WatchLaterButton() {
    return (
        <div className={"flex flex-row mx-auto my-4 group-hover:ml-8"}>
            <ClockIcon className={"size-6"} />
            <div className={"ml-2 group-hover:inline hidden"}>Watch Later</div>
        </div>
    );
}