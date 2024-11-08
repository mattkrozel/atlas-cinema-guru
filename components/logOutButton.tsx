import { signOut } from "@/auth";

export default async function LogOutButton() {
    return (
        <div className={"items-center flex flex-row"}>
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