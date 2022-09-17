import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

const CreateBlog = () => {
  const [blog, setBlog] = useState({});
  const [open, setOpen] = useState(1);
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const user = decode(token);
      const formData = new FormData();
      formData.append("blogbackground", blog.blogbackground);
      formData.append("blogType", blog.blogType);
      formData.append("blogTitle", blog.blogTitle);
      formData.append("blogTag", blog.blogTag);
      formData.append("blogBody", blog.blogBody);
      formData.append("blogUser", user.id);

      const res = await axios.post("http://localhost:8000/blog", formData, {
        headers: {
          authorization: token,
        },
      });
      // console.log(res.data);
      navigate("/account/blog");
      toast.success(res.data.message);
    } catch (e) {
      console.log(e.message);
      toast.error(e.message);
    }
  }
  return (
    <div>
      <div class="h-screen w-full bg-primary">
        <div class="mx-auto flex w-11/12 items-center justify-between pt-10 text-white">
          <div class="h-[580px] w-[550px] flex-auto mx-8 rounded-md bg-Secondary px-12 py-10">
            <div className="flex gap-5">
              <input
                type="text"
                class="w-full rounded-md bg-primary p-4 px-4 outline-none placeholder:text-xs placeholder:text-gray-400"
                placeholder="Title of the Blog"
                onChange={(e) =>
                  setBlog({ ...blog, blogTitle: e.target.value })
                }
              />

              <select
                class="w-full rounded-md bg-primary p-5 outline-none text-xs text-gray-400"
                onChange={(e) => setBlog({ ...blog, blogType: e.target.value })}
              >
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
                onChange={(e) => setBlog({ ...blog, blogTag: e.target.value })}
              />
              <input
                type="file"
                class="w-full rounded-md bg-primary p-4 px-5 outline-none placeholder:text-xs placeholder:text-gray-400"
                placeholder="Upload Thumnail Image"
                onChange={(e) =>
                  setBlog({ ...blog, blogbackground: e.target.files[0] })
                }
              />
            </div>
            <textarea
              type="text"
              class="w-full rounded-md bg-primary p-4 h-52 outline-none placeholder:text-xs placeholder:text-gray-400"
              placeholder="Blog Description"
              onChange={(e) => setBlog({ ...blog, blogBody: e.target.value })}
            ></textarea>
            <button
              class="w-full rounded-md bg-Green p-4 px-4 outline-none my-10"
              onClick={handleOnSubmit}
            >
              Submit
            </button>
          </div>

          {/* Accordation */}
          <div class="w-80 h-[580px] rounded-md bg-Secondary">
            <div class="p-5">
              <h1>Draft Your Question </h1>
              <div class="w-[270px] h-32 p-5 rounded-lg bg-primary my-5">
                There are many variations of Ipsum available, but majority
                suffered alter, of that believa.
              </div>
              <div class="w-[270px] h-16 p-5 rounded-lg bg-primary my-5">
                <h1>Summarize The Problem</h1>
              </div>
              <div class="w-[270px] h-16 p-5 rounded-lg bg-primary my-5">
                <h1>Descripe What Your Problem</h1>
              </div>
              <div class="w-[270px] h-16 p-5 rounded-lg bg-primary my-5">
                <h1>Show Some Code</h1>
              </div>
              <div class="w-[270px] h-16 p-5 rounded-lg bg-primary my-5">
                <h1>Final Then Post</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
