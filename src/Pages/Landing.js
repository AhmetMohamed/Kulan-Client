import React from "react";
import { Link } from "react-router-dom";
import Image from "../Assets/LandingImage.png";
import Login from "./Login";

const Landing = () => {
  return (
    <div className="w-full h-screen p-3 bg-primary text-slate-500 ">
      <div>
        {/* <Login /> */}
        <div className="mt-11">
          <h3 className="mt-5 text-4xl uppercase text-white font-poppins space-y-5 font-bold text-center">
            Join the <span className="text-Green">biggest</span> <br />
            development community
          </h3>
          <p className="mt-3 text-xs text-body font-poppins font-medium leading-5 text-center">
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            randomised words which don't look even believable.
          </p>
        </div>
        <div className="flex mt-20 m-auto justify-center items-center">
          <img src={Image} width="1080px" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
