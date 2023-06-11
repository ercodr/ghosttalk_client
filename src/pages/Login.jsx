import avatar from "../assets/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import request from "../request";
import { useRef, useState } from "react";
import { useSignIn } from "react-auth-kit";

const Login = () => {
  const signIn = useSignIn();
  const formRef = useRef();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = formRef.current;

    request
      .post("/login/", {
        username: formData.username.value,
        password: formData.password.value,
      })
      .then((res) => {
        if (
          signIn({
            token: res.data.access,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { username: formData.username.value },
            refreshToken: res.data.refresh,
          })
        ) {
          localStorage.setItem("user", formData.username.value);
          navigate(`/profile/${formData.username.value}/`);
        }
      })
      .catch((err) => {
        if (err.response) {
          setMsg(() => err.response.data.detail);
        } else {
          setMsg("An error occurred. Please try again later.");
        }
        setError(() => true);
        dismissStatus();
      });
  };

  const dismissStatus = () => {
    setTimeout(() => {
      setError(() => false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <form
        ref={formRef}
        onSubmit={loginHandler}
        className="relative bg-white shadow-lg w-full sm:w-max flex flex-col gap-4 items-center text-center rounded-lg p-8 text-slate-500"
      >
        <div
          className={`text-red-500 animate-bounce transition-opacity duration-1000 ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          {msg}
        </div>
        <div>
          <img src={avatar} className="w-20" alt="" />
        </div>
        <h3 className="text-xl font-medium text-slate-500">Login</h3>
        <div className="[&gt;*]:appearance-none flex flex-col gap-4 [&gt;*]:rounded [&gt;*]:outline-none w-full">
          <input
            required
            name="username"
            className="px-4 py-2 bg-slate-100"
            type="text"
            placeholder="Enter your username"
          />
          <input
            required
            name="password"
            className="px-4 py-2 bg-slate-100"
            type="password"
            placeholder="Enter your password"
          />

          <button className="bg-blue-500 py-2 text-white">Login</button>

          <div className="flex flex-col text-sm gap-2">
            <a href="">Forgot password?</a>
            <div>
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
