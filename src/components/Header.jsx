import {
  BiFilter,
  BiGlobe,
  BiMenu,
  BiSearch,
  BiUserCircle,
} from "react-icons/bi";

import Image from "next/image";

const Header = () => {
  return (
    <header className="md:border-b bg-white">
      <div className="main_inner">
        {/* HEADER FOR --> MOBILE DEVICE ONLY */}
        <div className="md:hidden flex flex-row gap-2 items-center justify-between my-3 border rounded-full">
          {/* SEARCH BUTTON */}
          <button className="flex-auto flex flex-row gap-3 px-4 py-2 items-center">
            <div>
              <BiSearch size={20} />
            </div>
            <div className="flex flex-col text-left">
              <h1>Anywhere</h1>
              <p className="text-xs text-gray-400 line-clamp-1">
                Any week • Add guests
              </p>
            </div>
          </button>

          {/* FILTER BUTTON */}
          <div className="py-2 px-2 mr-2 bg-white border rounded-full cursor-pointer">
            <BiFilter size={20} />
          </div>
        </div>

        {/* HEADER FOR --> LABLET OR LARGER DEVICES */}
        <div className="hidden md:flex flex-row justify-between items-center py-3">
          {/* TOP HEADER LOGO */}
          <div className="lg:flex-1">
            <Image
              src="/travel_logo/full_logo.png"
              width={180}
              height={70}
              alt="Travel Logo"
              loading="lazy"
              className="hidden lg:block"
            />
            <Image
              src="/travel_logo/circle_logo.png"
              width={40}
              height={40}
              alt="Travel Logo"
              loading="lazy"
              className="block lg:hidden w-12"
            />
          </div>

          {/* SEARCH BAR */}
          <div className="flex flex-row items-center justify-center border rounded-full py-2 px-2 mx-4 overflow-hidden hover:shadow-md">
            <button>
              <span className="px-3 lg:px-6">Anywhere</span>
            </button>
            <div className="h-6 w-[1px] bg-gray-300"></div>

            <button>
              <span className="px-3 lg:px-6">Any week</span>
            </button>
            <div className="h-6 w-[1px] bg-gray-300"></div>

            <button className="flex flex-row items-center justify-center">
              <span className="text-gray-400 font-light px-3 lg:px-6">
                Add guests
              </span>
              <div className="py-2 px-2 bg-orange-500 text-white rounded-full">
                <BiSearch />
              </div>
            </button>
          </div>

          {/* USER MENU BUTTON */}
          <div className="flex-1 flex flex-row justify-end items-center">
            <button className="hidden md:block py-2 px-4 hover:bg-black/5 rounded-full">
              Join with us
            </button>
            <button className="h-10 px-3 hover:bg-black/5 rounded-full">
              <BiGlobe size={20} />
            </button>
            <button className="flex flex-row gap-3 border rounded-full py-3 px-3 ml-2 hover:shadow-md">
              <BiMenu size={20} />
              <BiUserCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
