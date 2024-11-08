import LatestActivity from "./latestActivity";
import { FavoritesButton, HomeButton, WatchLaterButton } from "./navButtons";

export default async function NavBar() {
    return (
        <div className={"bg-darkerTeal flex-col flex group w-20 transition-all hover:w-60 duration-300 overflow-hidden"}>
            <HomeButton />
            <FavoritesButton />
            <WatchLaterButton />
            <div className={"hidden group-hover:block mt-4"}>
                <LatestActivity />
            </div>
        </div>
    );
}