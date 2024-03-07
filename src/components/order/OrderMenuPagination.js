import React from "react";
import { TOTAL_ITEM_IN_PAGE } from "../../data/info";

function OrderMenuPagination({ totalItems = 0, currentPage, setCurrentPage }) {
  const calculateTotalPages = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  const totalPages = calculateTotalPages(totalItems, TOTAL_ITEM_IN_PAGE);

  return (
    <nav className="flex justify-center items-center mt-6">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        {/* PREV */}
        {currentPage !== 0 && (
          <li
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </li>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`${
              index === currentPage && "z-10"
            } flex items-center justify-center px-3 h-8 leading-tight cursor-pointer ${
              index === currentPage
                ? "text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700"
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </li>
        ))}
        {/* NEXT */}
        {currentPage < totalPages - 1 && (
          <li
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </li>
        )}
      </ul>
    </nav>
    // <nav>
    //   <ul className="flex items-center -space-x-px h-8 text-sm">
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         <span className="sr-only">Previous</span>
    //         <svg
    //           className="w-2.5 h-2.5 rtl:rotate-180"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M5 1 1 5l4 4"
    //           />
    //         </svg>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         1
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         2
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         aria-current="page"
    //         className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    //       >
    //         3
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         4
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         5
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         <span className="sr-only">Next</span>
    //         <svg
    //           className="w-2.5 h-2.5 rtl:rotate-180"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default OrderMenuPagination;
