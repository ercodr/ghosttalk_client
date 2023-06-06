import avatar from "../assets/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import request from "../request";
import { useRef, useState } from "react";

const Register = () => {
  const formRef = useRef();
  const [found, setFound] = useState(false);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const formData = formRef.current;

    formData.password.value === formData.password2.value
      ? request
          .post("/add/", {
            username: formData.username.value,
            password: formData.password.value,
          })
          .then((res) => {
            if (res.status === 201) {
              alert(`Account ( ${res.data.username} ) has been created!`);
              formData.reset();
              navigate("/login");
            }
          })
          .catch((err) => {
            if (err.response.status === 302) {
              setFound(true);
              dismissStatus();
            }
          })
      : alert(
          "Password does not match, Please check your password and try again!"
        );

    const dismissStatus = () => {
      setTimeout(() => {
        setFound(() => false);
      }, 3000);
    };
  };

  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <form
        ref={formRef}
        onSubmit={formHandler}
        className="bg-white shadow-lg w-full sm:w-max md:max-w-sm flex flex-col gap-4 items-center text-center rounded-lg p-8 [&>*]:text-slate-500"
      >
        <div>
          <img src={avatar} className="w-20" alt="" />
        </div>
        <h3 className="text-xl font-medium text-slate-500">Register</h3>
        <div
          className={`[&>*]:appearance-none flex flex-col gap-4 [&>*]:rounded [&>*]:outline-none w-full`}
        >
          <input
            maxLength={10}
            name="username"
            className={`${found ? "border-red-500" : ""} px-4 py-2 bg-white`}
            type="text"
            placeholder="Enter your username"
            required
          />
          {found ? (
            <div className="text-red-500 text-xs absolute ml-36 -mt-2 bg-white px-2">
              username not available
            </div>
          ) : null}
          <input
            required
            name="password"
            className="px-4 py-2 bg-white"
            type="password"
            placeholder="Enter your password"
          />
          <input
            required
            name="password2"
            className="px-4 py-2 bg-white"
            type="password"
            placeholder="Confirm password"
          />
          <button className="bg-blue-500 py-2 text-white">
            Create Account
          </button>
          <div className="flex flex-col text-sm gap-2">
            <div>
              Already Have an Account?{" "}
              <Link className="font-medium" to="/login">
                Login
              </Link>
            </div>
            <p className="text-slate-400 text-xs">
              Usage of this service requires agreement to our Privacy Policy,
              Terms of Service, and related policies. See the Disclaimer for
              more information.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
