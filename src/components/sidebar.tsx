"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for mobile screens */}
      <div className="md:hidden p-4 flex justify-between items-center">
        <button onClick={toggleSidebar}>
        <Menu className="w-6 h-6" /> {/* MenuIcon */}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 bg-gray-950 bg-opacity-75 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:bg-transparent md:transition-none md:bg-opacity-100`}>
        <div className="h-full p-4">
          <button onClick={toggleSidebar} className="md:hidden mb-4">
            <Menu className="w-6 h-6" /> {/* MenuIcon */}
          </button>
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="grid gap-4">
            <Link href={"/gallery"}>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="text-sm lg:text-base">Gallery</p>
              </button>
            </Link>

            <Link href={"/album"}>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                <p className="text-sm lg:text-base">Picture Album</p>
              </button>
            </Link>

            <Link href={"/favourite"}>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="text-sm lg:text-base">Favorites</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
