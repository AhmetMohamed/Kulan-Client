/** @format */

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ListPost from "./ListPost";
import Home from "../Pages/Home";

const Comment = ({ user }) => {
  // console.log(user.image);
  const [post, setPost] = useState({});
  const [open, setOpen] = useState(false);
  async function handleOnSubmit() {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.post(
        "http://localhost:8000/post/createPost",
        post,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      setPost("");
      setOpen(false);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  }

  return (
    <div>
      <div className="Post h-fit flex p-5 gap-4">
        <div className="bg-primary w-11 h-11 rounded-lg">
          <img
            src={`http://localhost:8000/${user.image}`}
            alt=""
            className="w-11 h-11 rounded-lg"
          />
        </div>
        <input
          Title
          className="bg-Tertairy outline-none text-body flex-1 rounded-lg w-10 p-2 text-xs font-poppins font-medium"
          placeholder="What is the code problem today?"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="px-8 mb-5 ml-12">
        <textarea
          body
          className={
            open === true
              ? "bg-Tertairy outline-none text-body rounded-lg w-full overflow-y-auto h-32 overscroll-none p-3 mx-auto text-xs font-poppins font-medium"
              : "hidden"
          }
          placeholder="Write all the information someone would need to answer your question?"
          onChange={(e) => setPost({ ...post, question: e.target.value })}
        />
      </div>

      <div
        className={
          open == true
            ? "h-fit flex pt-1 pb-6 text-body px-7 gap-4 text-xs font-poppins font-medium justify-between"
            : "hidden"
        }
      >
        <p
          className="mx-auto cursor-pointer hover:text-Green"
          onClick={handleOnSubmit}
        >
          Ask Question
        </p>
      </div>
    </div>
  );
};

export default Comment;
