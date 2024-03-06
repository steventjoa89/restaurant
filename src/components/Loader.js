import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TailSpin
        visible={true}
        height="35"
        width="35"
        color="black"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
      />
      <span className="mt-2">Loading...</span>
    </div>
  );
}

export default Loader;
