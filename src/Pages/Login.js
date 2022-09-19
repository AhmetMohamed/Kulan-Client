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
      const res = await axios.post(
        "https://kulan-back-end.onrender.com/user/login",
        inputs
      );
      localStorage.setItem("token", res.data.token);
      navigate("/account/home");
      setUser(true);
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
  return (
    <div className="w-full h-fit p-3 bg-primary text-slate-500 ">
      <div class="my-16 mx-auto h-[620px] w-[900px] border-[1px]  border-body rounded-md bg-primary pt-10">
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
