import React from "react";
import { BiRevision } from "react-icons/bi";
import ButtonPrimary from "../ButtonPrimary";

function Error({
  title = "Something went wrong...",
  subtitle = "We are working on fixing the problem. Please try again...",
  onClick,
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-lg font-bold text-gray-900 my-2 mt-2">{title}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>

      <div className="mt-12">
        <ButtonPrimary onClick={onClick}>
          <div className="flex flex-row">
            <BiRevision className="w-5 h-5" />
            <span className="ms-2">Refresh Page</span>
          </div>
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default Error;
