/** @format */

import React from "react";
import Brand from "../Assets/Brand.svg";
import Home from "../Assets/Home.svg";
import Members from "../Assets/Members.svg";
import Notification from "../Assets/Notification.svg";
import Setting from "../Assets/Setting.svg";
import Profile from "../Assets/Profile.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../utils/userContext";

const Header = () => {
  const { user, setUser } = useContext(userContext);
  function handleDelete() {
    localStorage.removeItem("token");
    setUser(false);
  }
  return (
    <div className=" bg-primary">
      <div className="Cont p-4 text-gray-300 w-11/12 flex justify-between m-auto items-center">
        <div className="Brand scale-75 ">
          <Link to={"/"}>
            <img src={Brand} alt="" />
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-5">
            <div className="Menu gap-8 items-center">
              <ul className=" flex gap-8 text-xs font-poppins font-medium">
                <div className=" flex gap-2 items-center">
                  <img
                    src={Home}
                    className="scale-72"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <li>Home</li>
                </div>

                <div className=" flex  gap-2 items-center">
                  <img
                    src={Members}
                    className=""
                    alt=""
                    width={12}
                    height={12}
                  />
                  <li>Members</li>
                </div>

                <div className=" flex  gap-2 items-center">
                  <img
                    src={Notification}
                    className=""
                    width={14}
                    height={14}
                    alt=""
                  />
                  <li>Notification</li>
                </div>

                <div className=" flex  gap-2 items-center">
                  <img
                    src={Setting}
                    className="scale-90"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <li>Setting</li>
                </div>
                <Link to={"/login"}>
                  <li onClick={handleDelete} className="cursor-pointer">
                    LogOut
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <img src={Profile} className="scale-75" alt="" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <div className="Menu gap-8 items-center">
              <ul className=" flex gap-8 text-xs font-poppins font-medium">
                <div className=" flex gap-2 items-center">
                  <Link to={"/login"}>
                    <li className="hover:hover:text-Green">Login</li>
                  </Link>
                </div>

                <div className=" flex  gap-2 items-center">
                  <Link to={"/signup"}>
                    <li className="hover:hover:text-Green">Sign up</li>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        )}
        {/* */}

        {/*  */}
      </div>
    </div>
  );
};

export default Header;
