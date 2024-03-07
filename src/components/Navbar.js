import React from "react";
import { RESTAURANT_LOGO_ADDRESS_URL, RESTAURANT_NAME } from "../data/info";

function Navbar() {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div href="#" className="flex ml-2 md:mr-24">
              <img
                src={RESTAURANT_LOGO_ADDRESS_URL}
                className="h-8 mr-3"
                alt={RESTAURANT_NAME}
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                {RESTAURANT_NAME}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
