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
          GhostTalk is easy to use, and fun to play with! Simply visit our
          website and get started with GhostTalk now.
          <br className="hidden lg:block" /> After you visit the site, easily
          create your account and share the profile link with friends to get
          going.
          <br className="hidden lg:block" /> Receive anonymous messages from
          friends and family online!
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
