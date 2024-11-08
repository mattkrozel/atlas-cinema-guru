import Logo from "./logo";
import LogOutButton from "./logOutButton";

export default async function Header() {
    return (
        <div className={"flex-row flex align-center justify-between bg-teal text-navy"}>
            <Logo />
            <div className={"flex-row flex"}>
               <LogOutButton /> 
            </div>
        </div>
    );
}