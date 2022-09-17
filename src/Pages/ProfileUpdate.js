import React from "react";
import Card from "../Components/Card";
import profile from "../Images/card-Profile.png";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";

const ProfileUpdate = () => {
  return (
    <div className="flex justify-center w-full pt-10 bg-primary mx-auto">
      {/* profile */}
      <div className=" rounded-xl flex-auto bg-primary w-80 h-fit">
        <div>
          <div>
            <div className=" rounded-xl h-fit relative bg-Secondary w-72 m-auto mt-4">
              <div className="h-44">
                <div className="h-20 rounded-t-xl bg-Tertairy"></div>
                <div className=" absolute top-10 m-auto left-24 flex-col ">
                  <div className="h-16 m-auto w-16 rounded-xl bg-primary">
                    <img
                      src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
                      alt=""
                      className="h-16 m-auto w-16 rounded-xl"
                    />
                  </div>
                  <div className="Pro text-center mt-3">
                    <p className="font-poppins text-sm font-medium text-white">
                      Jama Ali
                    </p>
                    <p className="font-poppins text-xs font-medium text-body">
                      @jama
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center py-4 ">
                <a target="_blank">
                  <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer">
                    <img src={github} alt="" />
                  </div>
                </a>
                <a target="_blank">
                  <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer">
                    <img src={linkedin} alt="" />
                  </div>
                </a>
                <a target="_blank">
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
                A web developer turned product manager, currently working with
                Jamstack technology based on Javascript and rarely use Python's
                Django framework as a .
              </p>
            </div>

            <div className="">
              <p className=" mt-7 font-medium text-white ">Skills</p>
              <div className="font-poppins flex flex-wrap gap-4 mt-4 text-xs font-medium text-white">
                <p className="bg-primary py-2 px-3 rounded-lg w-fit">react</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* close profile */}

      <div class="h-screen w-[1390px] bg-primary">
        <div class="mx-auto flex w-11/12 items-center justify-between pt-10 text-white">
          <div class="h-[580px] w-[550px] flex-auto mx-8 rounded-md bg-Secondary px-12 py-10">
            <div className="flex gap-5">
              <input
                type="text"
                class="w-full rounded-md bg-primary p-4 px-4 outline-none placeholder:text-xs placeholder:text-gray-400"
                placeholder="Title of the Blog"
              />

              <select class="w-full rounded-md bg-primary p-5 outline-none text-xs text-gray-400">
                <option className="p-10" value={"Article"}>
                  Article
                </option>
                <option value={"Tutorial"}>Tutorial</option>
              </select>
            </div>
            <div class="flex gap-5 my-10">
              <input
                type="text"
                class="w-full rounded-md bg-primary p-4 px-5 outline-none placeholder:text-xs placeholder:text-gray-400"
                placeholder="Tag Of The Blog"
              />
              <input
                type="file"
                class="w-full rounded-md bg-primary p-4 px-5 outline-none placeholder:text-xs placeholder:text-gray-400"
                placeholder="Upload Thumnail Image"
              />
            </div>
            <textarea
              type="text"
              class="w-full rounded-md bg-primary p-4 h-52 outline-none placeholder:text-xs placeholder:text-gray-400"
              placeholder="Blog Description"
            ></textarea>
            <button class="w-full rounded-md bg-Green p-4 px-4 outline-none my-10">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
