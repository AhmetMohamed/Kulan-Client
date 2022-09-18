import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";

const AllBlog = () => {
  const [getBlog, setGetBlog] = useState([]);
  let [color, setColor] = useState("#15c5a4");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/blog/").then((res) => {
      // console.log(res.data.data);
      setGetBlog(res.data.data);
    });
    setLoading(false);
  }, []);

  if (loading) {
    <div>loading</div>;
  }

  return (
    <div class="w-full h-fit bg-primary px-20 py-16">
      <div class="header flex items-center justify-between mb-20">
        <div class="title ">
          <Link to="/account/create-blog">
            <bottom class="lg:mx-10 bg-Green rounded-md border-Tertairy  py-2.5 px-4 cursor-pointer font-semibold text-black">
              Create Blog
            </bottom>
          </Link>
        </div>
        <div class="text-end">
          <form class="flex flex-col lg:mr-16 md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div class=" relative ">
              <input
                type="text"
                id='"form-subscribe-Search'
                class=" rounded-lg border-transparent flex-1 appearance-none border border-Secondary outline-none w-[350px] py-2 px-4 bg-Secondary text-white placeholder-gray-400 shadow-sm text-base"
                placeholder="Enter Article Title"
              />
            </div>
            <button
              class="flex-shrink-0 px-6 py-2 text-base font-semibold text-black bg-Green rounded-lg shadow-md hover:bg-Tertairy outline-none"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Blog Cards */}
      {getBlog.length === 0 ? (
        <div className="flex items-center justify-center relative bottom-52 h-screen">
          <ScaleLoader color={color} size={300} />
        </div>
      ) : (
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          {getBlog.map((blog) => (
            <Link to={`/account/getBlog/${blog._id}`}>
              <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                  <img
                    alt="blog photo"
                    src={`http://localhost:8000/${blog.blogbackground}`}
                    class="max-h-52 w-full object-cover"
                  />
                  <div class="bg-Secondary w-full p-4">
                    <p class="text-Green text-md font-bold">{blog.blogType}</p>
                    <p class="text-indigo-500 text-md font-medium">
                      {blog.blogTag}
                    </p>
                    <p class="text-white uppercase my-3 text-lg font-semibold font-poppins mb-2">
                      {blog.blogTitle}
                    </p>
                    <p class="text-body text-xs font-poppins font-medium text-md">
                      {blog.blogBody.substring(0, 81)}...
                    </p>
                    <div class="flex items-center mt-4">
                      <a href="#" class="block relative">
                        <img
                          alt="profil"
                          src={`http://localhost:8000/${blog.blogUser.image}`}
                          class="mx-auto object-cover rounded-lg h-10 w-10 "
                        />
                      </a>
                      <div class="flex flex-col justify-between ml-4 text-sm">
                        <p class="text-white font-poppins font-medium">
                          {blog.blogUser.name}
                        </p>
                        <p class="text-gray-300 font-poppins">
                          {blog.createdAt.split("T")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlog;
