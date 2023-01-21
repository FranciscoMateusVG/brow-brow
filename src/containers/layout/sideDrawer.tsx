import React from "react";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { ImTable } from "react-icons/im";
import Image from "next/image";

const SideDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div
      id="SideDrawer"
      className={`absolute top-20 flex  h-full ${
        openDrawer ? "animate-openDrawer  gap-6" : "animate-closeDrawer gap-10"
      } `}
    >
      <div className=" min-w-[200px]   bg-prim p-4 shadow-xl">
        <Image src="/logo.png" alt="logo" height={150} width={150} />

        <nav className="flex flex-col gap-2 text-white ">
          <a
            href="#"
            className=" flex gap-3 rounded-lg px-2 py-1 hover:bg-stone-700 hover:font-bold"
          >
            <AiFillHome className="mt-1" /> Home
          </a>
          <a href="#" className="flex cursor-default gap-3 px-2 py-1">
            <ImTable className="mt-1" />
            Ficha
          </a>
        </nav>
      </div>
      {openDrawer ? (
        <RiArrowLeftCircleLine
          className="mt-4 hidden cursor-pointer text-sec hover:animate-wiggle md:block"
          size={35}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      ) : (
        <RiArrowRightCircleLine
          className="mt-4 hidden cursor-pointer text-sec hover:animate-wiggle md:block"
          size={35}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      )}
    </div>
  );
};

export default SideDrawer;
