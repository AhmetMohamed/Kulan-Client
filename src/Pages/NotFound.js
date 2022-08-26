import React from "react";
import notfound from "../Images/NotFound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src={notfound} alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default NotFound;
