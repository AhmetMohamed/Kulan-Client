import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Comment from "./Components/Comment";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import Protect from "./Protect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Pages/Landing";
import { userContext } from "./utils/userContext";
import { useState, useEffect } from "react";
import Main from "./Pages/Main";
import axios from "axios";

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
    setLoading(false);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Protect />}>
            <Route path="home" element={<Main />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
