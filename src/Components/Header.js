/** @format */

import { useState } from "react";
import axios from "axios";
import Brand from "../Assets/Brand.svg";
import Home from "../Assets/Home.svg";
import Members from "../Assets/Members.svg";
import Notification from "../Assets/Notification.svg";
import Setting from "../Assets/Setting.svg";
import Profile from "../Assets/Profile.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../utils/userContext";

import Person from "../Assets/Person.svg";
import Update from "../Assets/Update.svg";
import Delete from "../Assets/Delete.svg";
import Logout from "../Assets/Logout.svg";

const Header = () => {
  const { user, setUser } = useContext(userContext);
  const [click, setClick] = useState(false);

  function handleOnLeave() {
    setUser(false);
  }
  function handleDelete() {
    localStorage.removeItem("token");
    setUser(false);
  }

  return (
    <div className=" bg-primary ">
      <div className="Cont p-4  text-gray-300 w-11/12 flex justify-between m-auto items-center">
        <div className="Brand scale-75 ">
          <Link to={"/"}>
            <img src={Brand} alt="" />
          </Link>
        </div>

        {user ? (
          <div
            className="flex items-center gap-5"
            onMouseLeave={() => setClick(false)}
          >
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
                  <Link to={"/account/home"}>
                    <li className="cursor-pointer">Home</li>
                  </Link>
                </div>

                <div className=" flex  gap-2 items-center">
                  <img
                    src={Members}
                    className=""
                    alt=""
                    width={12}
                    height={12}
                  />
                  <Link to={"account/member"}>
                    <li>Members</li>
                  </Link>
                </div>

                <div className=" flex  gap-2 items-center">
                  <img
                    src={Notification}
                    className=""
                    width={14}
                    height={14}
                    alt=""
                  />
                  <Link to="/account/blog">
                    <li>Blogs</li>
                  </Link>
                </div>

                {/* ====================== */}
                <div class="relative" onClick={() => setClick(true)}>
                  <div class="flex">
                    <img
                      src={Setting}
                      className="scale-90"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <button class="flex flex-row items-center w-full hover mt-2 text-xs text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-2 text-white hover:text-Green">
                      Setting
                      <div
                        class={
                          click === true
                            ? "absolute right-3 top-2 z-50 bg-primary mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                            : "hidden"
                        }
                      >
                        <div className="bg-primary w-72 h-[332px] justify-end p-6 rounded-xl">
                          <div className="flex flex-col gap-8">
                            <div className="flex gap-4 items-center">
                              <img
                                src={Person}
                                alt=""
                                className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                              />

                              <div className="text-xs hover:bg-Tertairy h-12 w-full rounded-md px-3 font-poppins font-medium">
                                <Link to={"/account/edit"}>
                                  <h3 className="text-white text-sm">
                                    My Account
                                  </h3>
                                  <p className="text-body mt-1">
                                    Username / Password
                                  </p>
                                </Link>
                              </div>
                            </div>

                            <div className="flex gap-4 items-center">
                              <img
                                src={Update}
                                alt=""
                                className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                              />

                              <div className="text-xs font-poppins hover:bg-Tertairy h-12 w-full rounded-md px-3 font-medium">
                                <h3 className="text-white text-sm">About</h3>
                                <Link to="/account/about">
                                  <p className="text-body mt-1">About Us</p>
                                </Link>
                              </div>
                            </div>

                            <div className="flex gap-4 items-center">
                              <img
                                src={Delete}
                                alt=""
                                className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                              />

                              <div className="text-xs font-poppins hover:bg-Tertairy h-12  w-full rounded-md px-3 font-medium">
                                <h3 className="text-white text-sm">
                                  Close Account
                                </h3>
                                <p className="text-body mt-1">
                                  Delete account permenantly
                                </p>
                              </div>
                            </div>

                            <Link to="/login">
                              <div
                                className="flex gap-4 items-center"
                                onClick={handleDelete}
                              >
                                <img
                                  src={Logout}
                                  alt=""
                                  className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                                />

                                <div className="text-xs font-poppins hover:bg-Tertairy h-12 w-full rounded-md px-3 font-medium">
                                  <h3 className="text-white text-sm">
                                    Log Out
                                  </h3>
                                  <p className="text-body mt-1">
                                    Log out your account here
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* ===================== */}
              </ul>
            </div>

            <div>
              {/* <img
                src={`http://localhost:8000/${login.image}`}
                className="h-[36px] w-[36px] rounded-lg"
                alt=""
              /> */}
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
      </div>
    </div>
  );
};

export default Header;
