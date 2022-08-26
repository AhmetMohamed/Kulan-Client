import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
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
      navigate("/account/home");
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="w-full h-screen p-3 bg-primary text-slate-500 ">
      {/* Sign Up Form */}
      <div className="flex justify-start px-20">
        <div className="mt-20">
          <div>
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
                      setInputs({ ...inputs, name: e.target.value })
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
                  <textarea
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="text"
                    placeholder="Skills"
                    onChange={(e) =>
                      setInputs({ ...inputs, skills: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
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
                  <input
                    className="bg-Tertairy text-xs font-poppins font-medium w-48 h-8 outline-none p-2 rounded-md"
                    type="file"
                    placeholder="Profile Image"
                    onChange={(e) =>
                      setInputs({ ...inputs, image: e.target.files[0] })
                    }
                  />
                </div>
              </div>

              <div className="bg-Green p-2 mt-6 text-center rounded-md text-white font-poppins font-medium text-sm">
                <button onClick={handleOnSubmit}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
