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
      </Button>
    </Footer>
  );
}

export default FooterOrder;
