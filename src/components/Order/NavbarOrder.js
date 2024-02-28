import React from "react";
import { Navbar } from "flowbite-react";
import { RESTAURANT_LOGO_ADDRESS_URL, RESTAURANT_NAME } from "../../data/info";

function NavbarOrder() {
  return (
    <Navbar
      fluid
      rounded
      className="pt-3 border-b border-gray-300 hidden md:block"
    >
      <Navbar.Brand>
        <img
          src={RESTAURANT_LOGO_ADDRESS_URL}
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {RESTAURANT_NAME}
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavbarOrder;
