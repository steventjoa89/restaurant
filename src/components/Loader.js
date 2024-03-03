import { Spinner } from "flowbite-react";
import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner
        aria-label="Extra large spinner example"
        size="xl"
        color="gray"
      />
    </div>
  );
}

export default Loader;
