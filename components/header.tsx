import Logo from "./logo";
import LogOutButton from "./logOutButton";
import UserWelcome from "./userWelcome";

export default async function Header() {
    return (
        <div className={"flex-row flex align-center justify-between bg-teal text-navy"}>
            <Logo />
            <div className={"flex-row flex items-center p-4"}>
                <UserWelcome />
                <LogOutButton /> 
            </div>
        </div>
    );
}