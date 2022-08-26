import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../utils/userContext";

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
    <div className="w-full h-screen p-3 bg-primary text-slate-500 ">
      <div className="mt-40">
        <div>
          <h3 className="mt-2 text-2xl uppercase text-white font-poppins  font-bold text-center">
            WELCOME BACK MAN
          </h3>
          <p className="mt-2 text-xs text-body font-poppins font-medium leading-5 text-center">
            There are many variations of passages of Lorem <br /> don't look
            even believable.
          </p>
        </div>

        <div className="flex m-auto justify-center">
          <div>
            <div className="flex flex-col gap-4 mt-5 text-white">
              <input
                className="bg-Tertairy text-xs font-poppins font-medium w-64 h-8 outline-none p-2 rounded-md"
                type="text"
                placeholder="Email / username"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
              <input
                className="bg-Tertairy text-xs font-poppins font-medium w-64 h-8 outline-none p-2 rounded-md"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div className="flex mt-3 justify-between text-xs font-poppins font-medium">
              <p>Remember</p>
              <p className="text-white">Forgot Password</p>
            </div>

            <div className="bg-Green p-2 mt-6 text-center rounded-md text-white font-poppins font-medium text-sm">
              <button onClick={handleOnSubmit}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
