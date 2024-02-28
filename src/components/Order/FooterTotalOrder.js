import React from "react";
import { MAIN_COLOR } from "../../constants/constants";
import { addThousandSeparator } from "../../utils/stringUtils";

function FooterTotalOrder({ total = 0 }) {
  const handleClick = () => {
    console.log("Handling clicked");
  };

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 shadow flex items-center justify-between px-3 py-2 dark:bg-gray-800 dark:border-gray-600">
      <div>
        <div className="text-xs sm:text-center text-gray-800">Total</div>
        <div className="text-sm sm:text-center font-semibold">
          Rp {addThousandSeparator(total)}
        </div>
      </div>

      <button
        onClick={handleClick}
        className={`text-white bg-${MAIN_COLOR}-600 hover:bg-${MAIN_COLOR}-500  font-medium rounded-xl text-sm dark:bg-${MAIN_COLOR}-600 dark:hover:bg-${MAIN_COLOR}-700 focus:outline-none dark:focus:ring-${MAIN_COLOR}-800 px-4 py-2 my-2`}
      >
        Order Now
      </button>
    </footer>
  );
}

export default FooterTotalOrder;
