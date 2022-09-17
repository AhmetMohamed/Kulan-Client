import axios from "axios";
import React, { useState, useEffect } from "react";
import Brand from "../Assets/Brand.svg";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import one from "../Assets/bg-1.webp";
import two from "../Assets/bg-2.webp";

function GetBlog() {
  const [content, setContent] = useState({});
  const { id } = useParams();
  let [color, setColor] = useState("#15c5a4");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8000/blog/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setContent(res.data.data);
      });
  });
  console.log(content);

  if (Object.keys(content).length === 0) {
    return (
      <div className="flex items-center justify-center -mt-10 bg-Secondary h-screen">
        <ScaleLoader color={color} size={200} />
      </div>
    );
  }
  return (
    <div className="w-full h-screen px-12 py-3 bg-primary text-slate-500">
      <div className=" w-11/12 flex m-auto gap-20 justify-between mt-8">
        <div>
          <img
            alt="blog photo"
            src={`http://localhost:8000/${content.blogbackground}`}
            class="max-h-52 w-full object-cover"
          />
          <h1 className="font-poppins font-bold text-white mt-10 text-2xl">
            {content.blogTitle}
          </h1>
          <p className="font-poppins mt-6 pr-16 font-medium leading-6 text-body text-xs">
            {content.blogBody}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-Secondary w-64 h-52 rounded-2xl">
            <img src={one} alt="" className=" w-72 h-52 rounded-2xl" />
          </div>
          <div className="bg-Secondary w-64 h-52 rounded-2xl">
            <img src={two} alt="" className=" w-72 h-52 rounded-2xl" />
          </div>
        </div>
      </div>

      <div className=" w-11/12 flex gap-6 mt-6 items-center  m-auto">
        <div className="w-12 h-12 bg-Secondary rounded-lg">
          <img
            src={`http://localhost:8000/${content.blogUser.image}`}
            alt=""
            className="w-12 h-12 rounded-lg"
          />
        </div>
        <div className="font-poppins font-medium">
          <p className="text-xs text-white">{content.blogUser.name}</p>
          <p className="text-xs text-body mt-1">
            {content.blogUser.skills.map((skill) => skill)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetBlog;
