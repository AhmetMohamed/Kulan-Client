import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../utils/userContext";
import login from "../Assets/login.svg";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/user/login", inputs);
      localStorage.setItem("token", res.data.token);
      navigate("/account/home");
      setUser(true);
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
  return (
    // <div className="w-full h-screen p-3 bg-primary text-slate-500 ">
    //   <div className="mt-40">
    //     <div>
    //       <h3 className="mt-2 text-2xl uppercase text-white font-poppins  font-bold text-center">
    //         WELCOME BACK MAN
    //       </h3>
    //       <p className="mt-2 text-xs text-body font-poppins font-medium leading-5 text-center">
    //         There are many variations of passages of Lorem <br /> don't look
    //         even believable.
    //       </p>
    //     </div>

    //     <div className="flex m-auto justify-center">
    //       <div>
    //         <div className="flex flex-col gap-4 mt-5 text-white">
    //           <input
    //             className="bg-Tertairy text-xs font-poppins font-medium w-64 h-8 outline-none p-2 rounded-md"
    //             type="text"
    //             placeholder="Email / username"
    //             onChange={(e) =>
    //               setInputs({ ...inputs, email: e.target.value })
    //             }
    //           />
    //           <input
    //             className="bg-Tertairy text-xs font-poppins font-medium w-64 h-8 outline-none p-2 rounded-md"
    //             type="password"
    //             placeholder="Password"
    //             onChange={(e) =>
    //               setInputs({ ...inputs, password: e.target.value })
    //             }
    //           />
    //         </div>

    //         <div className="flex mt-3 justify-between text-xs font-poppins font-medium">
    //           <p>Remember</p>
    //           <p className="text-white">Forgot Password</p>
    //         </div>

    //         <div className="bg-Green p-2 mt-6 text-center rounded-md text-white font-poppins font-medium text-sm">
    //           <button onClick={handleOnSubmit}>Confirm</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-fit p-3 bg-primary text-slate-500 ">
      <div class="my-24 mx-auto h-[620px] w-[900px] border-[1px] mb-[146px] border-body rounded-md bg-primary pt-10">
        <div class="flex justify-between">
          <div class="">
            <img src={login} alt="images" class="h-[550px] ml-10" />
          </div>

          <div class="mx-auto mt-16 flex flex-col items-center justify-center">
            <div class="mt-8 text-center">
              <h1 class="font-poppins text-xl font-extrabold text-white">
                WELCOME BACK
              </h1>
              <p class="text-md mt-5 font-poppins text-xs font-medium text-body">
                There are many variations of passages of
                <br />
                Lorem don't look even believable.
              </p>
            </div>
            <div class="mt-10 flex flex-col items-center">
              <div class="mb-5 flex flex-col gap-5">
                <input
                  type="text"
                  class="h-10 w-64 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Email"
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  class="h-10 w-64 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Password"
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div class="flex items-center justify-between gap-x-16">
                <div className="flex gap-2">
                  <input type="checkbox" class="accent-body" />
                  <label class="font-poppins text-xs text-white">
                    Remember
                  </label>
                </div>
                <div>
                  <p class="font-poppins text-xs text-white">Forget Password</p>
                </div>
              </div>
              <button
                class="my-5 w-full rounded-md bg-Green text-black py-3 px-4 font-poppins outline-none"
                onClick={handleOnSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div class="mr-4 -mt-4 h-5 w-5 cursor-pointer rounded-full bg-Green">
            <Link to="/">
              <h1 class="-mt-1 flex items-center justify-center text-black text-center font-bold">
                x
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
