import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex flex-col justify-center items-center p-4 pt-12">
      <h1 className="text-8xl font-black text-slate-100">404</h1>
      <p className="text-slate-200 text-3xl font-bold">Not Found!</p>
      <Link
        className="bg-slate-900 px-4 py-2 rounded text-slate-100 mt-4"
        to="/"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
