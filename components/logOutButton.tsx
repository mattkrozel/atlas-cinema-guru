
import { signOut } from "@/auth";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default async function LogOutButton() {
    return (
        <div className={"items-center flex flex-row"}>
            <ArrowRightEndOnRectangleIcon className={"mr-1 size-5"} />
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
}