import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../Assets/Profile.svg";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";
import ScaleLoader from "react-spinners/ScaleLoader";

const Members = () => {
  const [users, setUsers] = useState([]);
  let [color, setColor] = useState("#15c5a4");

  useEffect(() => {
    const res = axios
      .get("http://localhost:8000/user/getAllUser")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(users.name);
        console.log(res.data.data[0].skills);
      });
  }, []);

  if (users.length == 0) {
    return (
      <div className="flex items-center justify-center -mt-10 bg-Secondary h-screen">
        <ScaleLoader color={color} size={200} />
      </div>
    );
  }

  return (
    <div className="  w-full h-fit px-10 py-5 grid grid-cols-4 items-center gap-5 bg-Secondary text-slate-500">
      {users.map((user) => (
        <div class="bg-[#091423]  mt-5 rounded-3xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.75)] text-[#B3B8CD] pt-8 w-[340px] h-[500px]  text-center">
          <img
            class="border-[1px] border-[#15c5a4] rounded-full mx-auto p-2 w-[127px] h-[128px]"
            src={`http://localhost:8000/${user.image}`}
            alt="user"
          />
          <h3 class="mt-2">{user.name}</h3>
          <h6 class="my-2">{user.location}</h6>

          <div class="flex items-center justify-center my-5">
            <button class="btn-primary bg-Green">
              <span class="">
                <img src={github} />
              </span>
            </button>

            <button class="btn-primary bg-Green">
              <span class="">
                <img src={linkedin} />
              </span>
            </button>

            <button class="btn-primary bg-Green">
              <span>
                <img src={Website} />
              </span>
            </button>
          </div>

          <div class="bg-[#091423] px-3 rounded-3xl text-left p-4 my-10">
            <h6 class="text-Green mb-2 text-bold">SKILLS</h6>
            <ul class="list-none m-0 p-0 flex flex-wrap">
              {user.skills.map((skill) => (
                <li class="list-style">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
