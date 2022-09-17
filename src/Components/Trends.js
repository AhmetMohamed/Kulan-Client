/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

function Trends() {
  const [getBlog, setGetBlog] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/blog/").then((res) => {
      // console.log(res.data.data);
      setGetBlog(res.data.data);
    });
  }, []);
  // console.log(getBlog);
  return (
    <div className="">
      <div class="w-80 h-56 p-5 bg-Secondary rounded-md">
        <div class="flex flex-col gap-5">
          <h1 class="font-bold text-Green text-xs">#100DAYSOFCODING</h1>
          <p class="text-gray-200 text-xs leading-5">
            There are many variations of passages <br />
            of Lorem Ipsum available, but majority
            <br />
            have suffered alteratuon in some form, <br />
            believable.
          </p>
          <button class="px-4 py-2 bg-Green rounded-md text-black font-semibold">
            Join Now
          </button>
        </div>
      </div>
      <div class="w-80 h-56 p-5 mt-3 bg-Secondary rounded-md">
        <div class="flex flex-col gap-5">
          <h1 class="font-bold text-Green text-xs">#100DAYSOFCODING</h1>
          <p class="text-gray-200 text-xs leading-5">
            There are many variations of passages <br />
            of Lorem Ipsum available, but majority
            <br />
            have suffered alteratuon in some form, <br />
            believable.
          </p>
          <button class="px-4 py-2 bg-Green rounded-md text-black font-semibold">
            Join Now
          </button>
        </div>
      </div>

      <div class="my-5">
        <h1 class="text-Green font-bold my-4 text-xs">Lastest Articles</h1>
        {getBlog.map((blog) => (
          <div class="w-80 h-10 rounded-md my-2 p-2  bg-Secondary font-bold  text-white">
            <h1>{blog.blogTitle.substring(0, 30)}</h1>
          </div>
        ))}
        {/* <div class="w-80 h-10 rounded-md p-2 my-3 bg-Secondary font-bold  text-white">
          <h1>How to write clean code</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Trends;
