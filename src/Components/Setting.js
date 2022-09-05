/** @format */

import React from "react";
import Person from "../Assets/Person.svg";
import Update from "../Assets/Update.svg";
import Delete from "../Assets/Delete.svg";
import Logout from "../Assets/Logout.svg";

function Setting() {
  return (
    <div className="w-full h-screen p-3 bg-Secondary text-slate-500 pointer">
      <div className="mt-3 gap-6 mr-16">
        <div className="flex justify-end">
          <div className="bg-primary w-80 h-80 justify-end p-6 rounded-xl">
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-center">
                <img
                  src={Person}
                  alt=""
                  className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                />

                <div className="text-xs font-poppins font-medium">
                  <h3 className="text-white text-sm">My Account</h3>
                  <p className="text-body mt-1">Username / Password</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src={Update}
                  alt=""
                  className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                />

                <div className="text-xs font-poppins font-medium">
                  <h3 className="text-white text-sm">Update</h3>
                  <p className="text-body mt-1">
                    Know the update of this platform
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src={Delete}
                  alt=""
                  className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                />

                <div className="text-xs font-poppins font-medium">
                  <h3 className="text-white text-sm">Close Account</h3>
                  <p className="text-body mt-1">Delete account permenantly</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src={Logout}
                  alt=""
                  className="bg-Tertairy w-10 h-10 rounded-lg text-center p-3"
                />

                <div className="text-xs font-poppins font-medium">
                  <h3 className="text-white text-sm">Log Out</h3>
                  <p className="text-body mt-1">Log out your account here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
