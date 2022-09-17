import React, { useState, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import jwt from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";

const ListPost = ({ item }) => {
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState(false);
  const [input, setInput] = useState({});
  const [listComment, setlistComment] = useState([]);
  const [userData, setUserData] = useState({});
  let [color, setColor] = useState("#15c5a4");

  console.log(listComment);
  const user = localStorage.getItem("token");
  const decoded = jwt(user);
  const login = decoded.data;

  console.log(login);

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

  // Post Comment
  async function handlePopComment(id) {
    setComment(true);
    const res = await axios.get(`http://localhost:8000/post/comments/${id}`);
    setlistComment(res.data.data);
    // console.log(res.data.data.comments);
  }

  function handleOnClick() {
    setClick(true);
  }

  function handleOnCancel() {
    setClick(false);
    setComment(false);
  }

  // Get All Comments
  async function handleOnSubmit(id) {
    try {
      const res = await axios.post(
        `http://localhost:8000/post/comments/${id}`,
        input,
        {
          headers: {
            authorization: user,
          },
        }
      );
      // console.log(res.data.data);
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div>
      <div className="rounded-xl h-fit bg-Secondary px-8 flex-1 mx-4 mt-4 flex-col p-5 gap-4 mb-5 items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-primary w-11 h-11 rounded-lg">
            <img
              src={`http://localhost:8000/${item.postUser.image}`}
              alt=""
              className="w-11 h-11 rounded-lg"
            />
          </div>

          <div className="Pro  ">
            <p className="font-poppins text-sm font-medium text-white">
              {item.postUser.name}
            </p>
          </div>
        </div>

        <div className="mt-5 text-xs text-body font-poppins font-medium leading-6">
          <h1 className="font-bold my-3 text-sm">{item.title}?</h1>
          <p>{item.question}?</p>
        </div>

        <div className="flex justify-content justify-between items-center mt-3 pb-3">
          <div className="flex gap-56 mt-4 justify-between font-poppins font-medium text-xs text-white px-5">
            <p
              onClick={() => handlePopComment(item._id)}
              className="cursor-pointer"
            >
              View
            </p>
            <p onClick={handleOnClick} className="cursor-pointer">
              Reply
            </p>
            <p onClick={handleOnCancel} className="cursor-pointer">
              Cancel
            </p>
          </div>
        </div>

        <div
          className={
            click == true
              ? "flex-1 justify-content justify-between items-center mt-8 pb-3"
              : "hidden flex-1 justify-content justify-between items-center mt-8 pb-3"
          }
        >
          <div className="Post h-fit flex gap-2">
            <div className="bg-primary w-11 h-11 rounded-lg">
              <img
                src={`http://localhost:8000/${userData.image}`}
                alt=""
                className="w-11 h-11 rounded-lg"
              />
            </div>
            <input
              className="bg-Tertairy outline-none text-body flex-1 rounded-lg w-10 p-2 text-xs font-poppins font-medium"
              placeholder="What is the code problem today?"
              onChange={(e) => setInput({ ...input, comment: e.target.value })}
            />

            <div className="bg-Tertairy rounded-lg p-2 ">
              <BiSend
                className="cursor-pointer"
                size={28}
                style={{ color: "#15c5a4" }}
                onClick={() => handleOnSubmit(item._id)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* List of Comments  */}

      <div
        class={
          comment == true
            ? "fade fixed top-20 left-[410px] lg:left-[475px] w-1/2 h-[620px]  scrollbar-thin scrollbar-thumb-Secondary scrollbar-track-Tertairy mb-5 overflow-y-auto overflow-x-hidden outline-none"
            : "hidden"
        }
      >
        <div class="relative w-auto">
          <div class="-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-primary bg-clip-padding text-current shadow-lg outline-none">
            <div class="-header flex flex-shrink-0 items-center justify-between rounded-t-md  p-4">
              <h5 class="text-xl font-bold leading-normal text-white border-b-2">
                {listComment.title}
              </h5>
              <button
                type="button"
                class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-bs-dismiss=""
                aria-label="Close"
              ></button>
            </div>
            <div class="-body relative p-4">
              {/* All Comment Cards */}
              {listComment.length == 0 ? (
                <div className="flex items-center justify-center -mt-10  h-screen">
                  <ScaleLoader color={color} size={200} />
                </div>
              ) : (
                listComment.comments.map((comm) => (
                  <div class="flex bg-Secondary shadow-lg rounded-lg mx-4  my-5 max-w-md md:max-w-2xl ">
                    <div class="flex items-start px-5 py-6">
                      <img
                        class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src={`http://localhost:8000/${comm.user.image}`}
                        alt="avatar"
                      />
                      <div class="">
                        <div class="flex items-center justify-between">
                          <h2 class="text-lg font-semibold text-white -mt-1">
                            {comm.user.name}
                          </h2>
                        </div>

                        <p class="mt-3 text-white text-sm">{comm.comment}</p>
                        <div class="mt-4 flex items-center">
                          <div class="flex text-white text-sm mr-3">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>12</span>
                          </div>
                          <div class="flex  text-white text-sm mr-8">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>
                            <span>8</span>
                          </div>
                          <div class="flex  text-white text-sm mr-4">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                              />
                            </svg>
                            <span>share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* All Comment Cards */}
            </div>

            <div class="-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md p-4">
              <button
                type="button"
                class="inline-block rounded btn-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-Green hover:shadow-lg focus:bg-Tertairy focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                onClick={handleOnCancel}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPost;
