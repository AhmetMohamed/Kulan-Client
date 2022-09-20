import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../Assets/Profile.svg";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Link } from "react-router-dom";

const Members = () => {
  const [users, setUsers] = useState([]);
  let [color, setColor] = useState("#15c5a4");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const res = axios
      .get("https://kulan-back-end.onrender.com/user/getAllUser")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(users.name);
        // console.log(res.data.data[0].skills);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center -mt-10 bg-Secondary h-screen">
        <ScaleLoader color={color} size={200} />
      </div>
    );
  }

  return (
    <div className="  w-full h-screen p-3 bg-Secondary text-slate-500">
      <div className="mt-5 w-11/12 grid grid-cols-5 justify-between gap-16 m-auto">
        {users.map((user) => (
          <div className="CardOne mt-3">
            <div className=" font-poppins font-medium bg-primary w-64 h-52 rounded-lg">
              <div className="Top flex gap-3 p-5 items-center">
                <img
                  src={`https://kulan-back-end.onrender.com/${user.image}`}
                  alt="Profile"
                  className="rounded-md h-10 w-10"
                  height="auto"
                />
                <div className=" font-poppins font-medium text-xs">
                  <p className="text-white">{user.name}</p>
                  <p>{user.username}</p>
                </div>
              </div>
              <div className="Middle">
                <p className="font-poppins font-medium text-xs px-5 text-body">
                  {user.description.substring(0, 50)}
                </p>
              </div>
              <div className="Bottom">
                <div className="flex gap-2 items-center justify-center p-5">
                  <div className="bg-Tertairy w-10 h-10 rounded-lg">
                    <a href={`https://www.${user.github}`} target="_blank">
                      <img src={github} className="mx-auto mt-2" alt="" />
                    </a>
                  </div>
                  <div className="bg-Tertairy w-10 h-10 rounded-lg">
                    <a href={`https://www.${user.linkedin}`} target="_blank">
                      <img src={linkedin} className="mx-auto mt-2" alt="" />
                    </a>
                  </div>
                  <div className="bg-Tertairy w-10 h-10 rounded-lg">
                    <a href={`https://www.${user.portfolio}`} target="_blank">
                      <img src={Website} className="mx-auto mt-2" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
