import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  console.log(inputs.image);

  const navigate = useNavigate();
  async function handleOnSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("email", inputs.email);
      formData.append("password", inputs.password);
      formData.append("confirmPassword", inputs.confirmPassword);
      formData.append("location", inputs.location);
      formData.append("skills", inputs.skills);
      formData.append("description", inputs.description);
      formData.append("github", inputs.github);
      formData.append("linkedin", inputs.linkedin);
      formData.append("portfolio", inputs.portfolio);
      formData.append("image", inputs.image);

      const res = await axios.post(
        "http://localhost:8000/user/signup",
        formData
      );
      // console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      navigate("/account/home");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="w-full h-screen p-3 bg-primary text-slate-500 ">
      {/* Sign Up Form */}
      <div className="flex justify-around items-center px-20">
        <div className="bg-Secondary rounded-md w-[600px] h-[700px] mt-20">
          <div className="mt-10">
            <h3 className="mt-2 text-2xl uppercase text-white font-poppins  font-bold text-center">
              CREATE NEW ACCOUNT
            </h3>
            <p className="mt-2 text-xs text-body font-poppins font-medium leading-5 text-center">
              There are many variations of passages of Lorem <br /> don't look
              even believable.
            </p>
          </div>

          <div className="flex m-auto justify-center">
            <div>
              <div className="flex flex-col  gap-4 mt-8 text-white">
                <div className="flex gap-4">
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Full name"
                    onChange={(e) =>
                      setInputs({ ...inputs, name: [e.target.value] })
                    }
                  />
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="Email"
                    placeholder="Email"
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="password"
                    placeholder="ConfirmPassword"
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Location"
                    onChange={(e) =>
                      setInputs({ ...inputs, location: e.target.value })
                    }
                  />
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-auto outline-none p-2 rounded-md"
                    type="text"
                    data-role="taginput"
                    placeholder="Skills"
                    onChange={(e) =>
                      setInputs({ ...inputs, skills: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <textarea
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-auto outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Description"
                    onChange={(e) =>
                      setInputs({ ...inputs, description: e.target.value })
                    }
                  />
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Github *Required*"
                    onChange={(e) =>
                      setInputs({ ...inputs, github: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Linkedin *Optional*"
                    onChange={(e) =>
                      setInputs({ ...inputs, linkedin: e.target.value })
                    }
                  />
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Portfolio *Optional*"
                    onChange={(e) =>
                      setInputs({ ...inputs, portfolio: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  {/* <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="file"
                    placeholder="Profile Image"
                    onChange={(e) =>
                      setInputs({ ...inputs, image: e.target.files[0] })
                    }
                  /> */}

                  <main>
                    <label
                      for="dropzone-file"
                      onChange={(e) =>
                        setInputs({ ...inputs, image: e.target.files[0] })
                      }
                      class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-Secondary p-6 text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>

                      <h2 class="mt-4 text-xl font-medium text-gray-400 tracking-wide">
                        Upload File
                      </h2>

                      <p class="mt-2 text-gray-500 tracking-wide">
                        Upload or darg & drop your file SVG, PNG, JPG or GIF.{" "}
                      </p>

                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </main>
                </div>
              </div>

              <div className="bg-Green p-2 mt-6 text-center rounded-md text-white font-poppins font-medium text-sm">
                <button onClick={handleOnSubmit}>Confirm</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div class="bg-Secondary w-[500px] h-[600px] rounded-md">
          <div class="bg-primary mx-auto  mt-14 rounded-3xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.75)] text-[#B3B8CD] pt-8 w-[340px] h-[500px]  text-center">
            <img
              class="border-[1px] border-[#15c5a4] rounded-full mx-auto p-2 w-[127px] h-[128px]"
              // src={inputs.image.name}
              alt="user"
            />
            <h3 class="mt-5 break-words px-16">{inputs.name}</h3>
            <h6 class="my-2 break-words px-16">{inputs.location}</h6>
            <p class="px-[25px] text-center break-words px-16">
              {inputs.description}
            </p>

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

            <div class="bg-primary px-3 rounded-3xl text-left p-4 my-32">
              <h6 class="text-Green mb-2 text-bold">Skills</h6>
              <ul class="list-none m-0 p-0 flex flex-wrap">
                <li class="list-style">{inputs.skills}</li>
                <li class="list-style">Front End Development</li>
                <li class="list-style">HTML</li>
                <li class="list-style">CSS</li>
                <li class="list-style">JavaScript</li>
                <li class="list-style">React</li>
                <li class="list-style">Node</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
