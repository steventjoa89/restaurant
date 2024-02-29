import { Button, Footer } from "flowbite-react";
import React from "react";

function FooterOrder({ totalItem = 0 }) {
  return (
    <Footer
      container
      className="md:hidden fixed bottom-0 left-0 z-50 w-full p-4 flex items-center justify-center border-t border-gray-300 shadow-xl"
    >
      <Button className="flex-grow" color="dark" pill>
        <span>My Order</span>
        <span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-black bg-white rounded-full p-2">
          {totalItem}
        </span>
      </Button>
    </Footer>
  );
}

export default FooterOrder;
