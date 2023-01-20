import React from "react";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { ImTable } from "react-icons/im";

const SideDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div
      id="SideDrawer"
      className={`absolute top-28  flex ${
        openDrawer ? "animate-openDrawer  gap-6" : "animate-closeDrawer gap-10"
      } `}
    >
      <div className="min-w-[200px] rounded-xl border-4 border-teal-500 bg-slate-200 p-4 shadow-xl">
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex gap-3 px-2 py-1 hover:bg-slate-200">
            <AiFillHome className="mt-1" /> Home
          </a>
          <a
            href="#"
            className="flex cursor-default gap-3 px-2 py-1 text-teal-500 hover:bg-slate-200"
          >
            <ImTable className="mt-1" />
            Ficha
          </a>
        </nav>
      </div>
      {openDrawer ? (
        <RiArrowLeftCircleLine
          className="hidden cursor-pointer hover:animate-wiggle md:block"
          color="#14B8A6"
          size={35}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      ) : (
        <RiArrowRightCircleLine
          className="hidden cursor-pointer hover:animate-wiggle md:block"
          color="#14B8A6"
          size={35}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      )}
    </div>
  );
};

export default SideDrawer;
