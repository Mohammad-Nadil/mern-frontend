import React from "react";

const Loader = () => {
  return (
    <div className=" w-full h-full grid place-items-center ">
      <div className="flex  justify-center items-center">
        <div className="text-center space-y-6">
          <div className="w-34 aspect-square border-15 border-t-primary border-primary-content rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
