import React from "react";
import HeroLogo from "../assets/hero.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-12 [&>*]:transition-all [&>*]:duration-1000"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center p-4 py-12">
        <div className="text-slate-100">
          <h1 className="lg:text-6xl font-bold text-3xl">
            Share and recieve innermost desires from your family and friends.
          </h1>
          <p className="my-6">
            Our web app allows you to share your profile link and receive honest feedback from your
            friends without revealing your identity. With our anonymous feedback
            feature, you can provide constructive criticism, praise, or any
            thoughts you have in a safe and secure environment.
          </p>
          <a
            href="#get_started"
            className="bg-slate-100 lg:py-3 lg:px-12 rounded text-slate-900 font-medium lg:text-xl px-10 py-2 shadow hover:bg-transparent hover:text-white border-2 transition-all"
          >
            Get Started
          </a>
        </div>
        <div>
          <img src={HeroLogo} alt="" className="hidden md:flex" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
