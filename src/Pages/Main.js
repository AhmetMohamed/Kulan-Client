/** @format */

import React from "react";
import Card from "../Components/Card";
import Comment from "../Components/Comment";
import Trends from "../Components/Trends";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const res = axios.get("http://localhost:8000/user/getUser").then((res) => {
      setUserData(res.data.data);
      console.log("", res.data.data);
    });
  }, []);
  return (
    <div className="  w-full h-screen p-5 bg-Secondary text-slate-500 ">
      <div className="  mt-5 gap-6  flex justify-between  m-auto">
        {userData.map((user) => (
          <Card user={user} />
        ))}

        {/* <Comment />
        <Trends /> */}
      </div>
    </div>
  );
};

export default Main;
