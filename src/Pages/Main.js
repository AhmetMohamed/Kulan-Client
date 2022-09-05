/** @format */

import React from "react";
import Card from "../Components/Card";
import Comment from "../Components/Comment";
import Trends from "../Components/Trends";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import ScaleLoader from "react-spinners/ScaleLoader";

const Main = () => {
  const [userData, setUserData] = useState({});
  let [color, setColor] = useState("#15c5a4");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/user/getUser", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUserData(res.data.data);
        // console.log(res.data);
      });
  }, []);
  if (Object.keys(userData).length == 0) {
    return (
      <div className="flex items-center justify-center -mt-10 bg-Secondary h-screen">
        <ScaleLoader color={color} size={200} />
      </div>
    );
  }

  return (
    <div className=" scrollbar-thin w-full h-screen p-3 bg-Secondary text-slate-500 ">
      <div className="mt-5 gap-6 w-11/12 flex justify-between  m-auto ">
        <Card user={userData} />
        <Home user={userData} />
        <Trends />
      </div>
    </div>
  );
};

export default Main;
