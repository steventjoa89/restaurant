import React from "react";
import { addThousandSeparator } from "../../utils/stringUtils";
import { Button, Footer } from "flowbite-react";
import { SERVICE_PERCENTAGE, TAX_PERCENTAGE } from "../../constants/constant";

function FooterTotalOrder({ total = 0 }) {
  const totalAfterTaxAndService =
    total + (total * (TAX_PERCENTAGE + SERVICE_PERCENTAGE)) / 100;

  const handleClick = () => {
    console.log("Ordering the food...");
  };

  return (
    <Footer
      container
      className="fixed bottom-0 left-0 z-50 w-full px-4 py-3 flex items-center justify-between flex-wrap sm:flex-nowrap border-t border-gray-300 shadow-xl"
    >
      <div className="flex flex-col items-start">
        <div className="text-xs sm:text-center text-gray-800">Total</div>
        <div className="text-sm sm:text-center font-semibold">
          Rp {addThousandSeparator(totalAfterTaxAndService)}.00
        </div>
      </div>

      <Button onClick={handleClick} color="failure">
        Order Now
      </Button>
    </Footer>
  );
}

export default FooterTotalOrder;
