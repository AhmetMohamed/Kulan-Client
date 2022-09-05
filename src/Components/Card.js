/** @format */

import React from "react";
import profile from "../Images/card-Profile.png";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <div className=" rounded-xl bg-primary w-80 h-fit">
      <div>
        <div>
          <div className=" rounded-xl h-fit relative bg-Secondary w-72 m-auto mt-4">
            <div className="h-44">
              <div className="h-20 rounded-t-xl bg-Tertairy"></div>
              <div className=" absolute top-10 m-auto left-28 flex-col ">
                <div className="h-16 m-auto w-16 rounded-xl bg-primary">
                  <img
                    src={`http://localhost:8000/${user.image}`}
                    alt=""
                    className="h-16 m-auto w-16 rounded-xl"
                  />
                </div>
                <div className="Pro text-center mt-3">
                  <p className="font-poppins text-sm font-medium text-white">
                    {user.name}
                  </p>
                  <p className="font-poppins text-xs font-medium text-body">
                    @malidev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center py-4 ">
              <a target="_blank" href={`http://www.${user.github}`}>
                <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer">
                  <img src={github} alt="" />
                </div>
              </a>
              <a target="_blank" href={`http://www.${user.linkedin}`}>
                <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer">
                  <img src={linkedin} alt="" />
                </div>
              </a>
              <a target="_blank" href={`http://www.${user.portfolio}`}>
                <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer">
                  <img src={Website} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl h-fit bg-Secondary w-72 m-auto my-4">
          <div>
            <p className="font-medium text-white ">About</p>
            <p className=" text-xs font-medium leading-6 font-poppins mt-4 text-body">
              {user.description}.
            </p>
          </div>

          <div className="">
            <p className=" mt-7 font-medium text-white ">Skills</p>
            <div className="font-poppins flex flex-wrap gap-4 mt-4 text-xs font-medium text-white">
              {user.skills.map((item) => (
                <p className="bg-primary py-2 px-3 rounded-lg w-fit">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
