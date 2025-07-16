import Image from "next/image";
import placeholder from '@/assets/placeholder.svg';
import { ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { ClockIcon as SolidClock, StarIcon as SolidStar } from "@heroicons/react/24/solid";

export default async function Card() {
  return (
    <div className="relative group overflow-hidden rounded-lg outline-1 outline-[#85F1D2]">
      <div className={'absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
        <ClockIcon className={'w-6 h-6 cursor-pointer'} />
        <StarIcon className={'w-6 h-6 cursor-pointer'} />
      </div>
      <Image
        src={placeholder}
        alt="Movie Image"
        className={'object-cover w-full h-full'}
      />
      <div className={'absolute bottom-0 left-0 right-0 p-4 bg-[#000061] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
        <h2 className={''}>Beneath the Surface (2021)</h2>
        <p className={''}>A marine biologist discovers a hidden underwater civilization</p>
        <div className={''}>Sci-Fi</div>
      </div>
    </div>
  );
}