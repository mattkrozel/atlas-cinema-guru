import Logo from "./Logo";
import LogOutButton from "./LogOutButton";
import WelcomeMessage from "./WelcomeMessage";


export default async function Header() {
    return (
        <div className={'bg-[#85F1D2] text-[#00003c] flex flex-row justify-between align-center'}>
          <Logo />
          <div className={'flex flex-row p-4 items-center'}>
            <WelcomeMessage />
            <LogOutButton />
          </div>
        </div>
    );
}