import React from "react";
import { Link } from "react-router-dom";

const TryIt = () => {
  return (
    <section className="bg-gradient-to-br from-[#BB33C2] to-blue-500 mt-16 text-white p-4 md:p-8 pb-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mt-12">
          Try GhostTalk Today!
        </h3>
        <p className="text-center mt-4">
          Experience the user-friendly and enjoyable GhostTalk platform! Embark on your GhostTalk journey by accessing our website effortlessly. 
          <br className="hidden lg:block"/> Take the first step by creating an account, and don't forget to share your unique profile link with friends to commence the excitement. 
          <br className="hidden lg:block"/> Immerse yourself in a world of anonymous online messages from your loved ones.
        </p>
        <Link to="/register">
          <button className="bg-white px-8 py-2 rounded transition-all mt-8 shadow text-slate-900 font-medium border hover:text-white hover:bg-transparent">
            Create Account
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TryIt;
