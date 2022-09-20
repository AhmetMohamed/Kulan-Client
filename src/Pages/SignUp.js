import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import github from "../Assets/GitHub.svg";
import linkedin from "../Assets/LinkedIn.svg";
import Website from "../Assets/Website.svg";
import login from "../Assets/login.svg";
import { useContext } from "react";
import { userContext } from "../utils/userContext";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();
  async function handleOnSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("email", inputs.email);
      formData.append("username", inputs.username);
      formData.append("password", inputs.password);
      formData.append("confirmPassword", inputs.confirmPassword);
      formData.append("skills", inputs.skills);
      formData.append("description", inputs.description);
      formData.append("location", inputs.location);
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
      setUser(true);
      navigate("/account/home");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="w-full h-fit p-10 bg-primary text-slate-500 ">
      <div class="my-10 mx-auto h-[620px] w-[1100px] border-[1px] mb-[146px]  border-body rounded-md bg-primary pt-10">
        <div class="flex justify-between">
          <div class="">
            <img src={login} alt="images" class="h-[550px] ml-10" />
          </div>

          <div class="mx-auto">
            <div class="mt-3 text-center">
              <h1 class="font-poppins text-xl font-extrabold text-white">
                CREATE NEW ACCOUNT
              </h1>
              <p class="text-md mt-5 font-poppins text-xs font-medium text-body">
                There are many variations of passages of
                <br />
                Lorem don't look even believable.
              </p>
            </div>

            <div class="mt-10 flex flex-col items-center">
              <div class="mb-5 grid grid-cols-2 gap-3">
                <input
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Full Name"
                  onChange={(e) =>
                    setInputs({ ...inputs, name: [e.target.value] })
                  }
                />
                <input
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Email"
                  onChange={(e) =>
                    setInputs({ ...inputs, email: [e.target.value] })
                  }
                />
              </div>
              <div class="mb-5 grid grid-cols-2 gap-3">
                <input
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Username"
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
                <input
                  type="password"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Password"
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div class="mb-5 grid grid-cols-2 gap-3">
                <input
                  type="password"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
                <input
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Skills"
                  onChange={(e) =>
                    setInputs({ ...inputs, skills: e.target.value })
                  }
                />
              </div>
              <div class="mb-5 grid grid-cols-2 gap-3">
                <textarea
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Description"
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                ></textarea>
                <input
                  type="text"
                  class="h-10 w-56 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="location"
                  onChange={(e) =>
                    setInputs({ ...inputs, location: e.target.value })
                  }
                />
              </div>
              <div class="mb-5 grid grid-cols-3 gap-4">
                <input
                  type="text"
                  class="h-10 w-36 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Github"
                  onChange={(e) =>
                    setInputs({ ...inputs, github: e.target.value })
                  }
                />
                <input
                  type="text"
                  class="h-10 w-36 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Linkedin"
                  onChange={(e) =>
                    setInputs({ ...inputs, linkedin: e.target.value })
                  }
                />
                <input
                  type="text"
                  class="h-10 w-36 rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Portofolio"
                  onChange={(e) =>
                    setInputs({ ...inputs, portfolio: e.target.value })
                  }
                />
              </div>
              <div class="w-full">
                <input
                  type="file"
                  class="h-10 w-full rounded-md bg-Tertairy p-2 font-poppins text-xs font-medium text-body outline-none"
                  placeholder="Upload image"
                  onChange={(e) =>
                    setInputs({ ...inputs, image: e.target.files[0] })
                  }
                />
              </div>
              <button
                class="my-5 w-full rounded-md text-black bg-Green py-3 px-4 font-poppins outline-none"
                onClick={handleOnSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div class="h-5 w-5 rounded-full bg-Green mr-5 -mt-4 cursor-pointer">
            <Link to="/">
              <h1 class="-mt-1 font-bold flex items-center text-black justify-center text-center">
                x
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
