import React from "react";
import { MdSecurity, MdSupportAgent } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  const cardDetails = [
    {
      icon: <FaUserSecret />,
      title: "Anonymity",
      content: `Our Anonymous Messaging App comes along with many great features.
                Here we are going to list some of them. Have a look below.`,
    },
    {
      icon: <MdSecurity />,
      title: "Safe & Secure",
      content: `Our platform guarantees your privacy and anonymity when sending
            secret messages, and you have the option to reveal your identity at
            your discretion.`,
    },
    {
      icon: <MdSupportAgent />,
      title: "24/7 Support",
      content: `We're here to help 24/7. Contact us anytime with questions or
            concerns about our anonymous messaging and feedback platform.`,
    },
    {
      icon: <CgMouse />,
      title: "Ease of Use",
      content: ` We're always improving GhostTalk for a user-friendly experience.
            Visit our web and sign up with your username and password to get
            started.`,
    },
  ];
  return (
    <section
      id="get_started"
      className="container mx-auto flex flex-col items-center p-4 md:p-12"
    >
      <h2 className="md:text-3xl text-2xl font-bold mt-8 md:mt-12 text-center">
        Why Choose GhostTalk
      </h2>
      <p className="text-center mt-4">
        Our Anonymous Messaging App comes along with many great features.{" "}
        <br className="hidden lg:block" /> Here we are going to list some of
        them. Have a look below.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {cardDetails.map((detail) => (
          <WhyChooseUsCard
            key={detail.title}
            icon={detail.icon}
            title={detail.title}
            content={detail.content}
          />
        ))}
        {/* <div className="rounded-lg bg-white shadow-lg p-8 transition-all duration-500 hover:-translate-y-2">
          <div className="w-12 h-12 bg-slate-200 rounded mb-4 flex justify-center items-center text-slate-600 text-3xl">
            <FaUserSecret />
          </div>
          <h1 className="font-bold text-lg">Anonymity</h1>
          <p className="text-slate-600">
            Our platform guarantees your privacy and anonymity when sending
            secret messages, and you have the option to reveal your identity at
            your discretion.
          </p>
        </div>
        <div className="rounded-lg bg-white shadow-lg p-8">
          <div className="w-12 h-12 bg-slate-200 rounded mb-4 flex justify-center items-center text-slate-600 text-3xl">
            <MdSecurity />
          </div>
          <h1 className="font-bold text-lg">Safe & Secure</h1>
          <p className="text-slate-600">
            User safety is our top priority. We have reporting systems in place
            to address any inappropriate content and ensure a safe experience
            for everyone.
          </p>
        </div>
        <div className="rounded-lg bg-white shadow-lg p-8">
          <div className="w-12 h-12 bg-slate-200 rounded mb-4 flex justify-center items-center text-slate-600 text-3xl">
            <MdSupportAgent />
          </div>
          <h1 className="font-bold text-lg">24/7 Support</h1>
          <p className="text-slate-600">
            We're here to help 24/7. Contact us anytime with questions or
            concerns about our anonymous messaging and feedback platform.
          </p>
        </div>
        <div className="rounded-lg bg-white shadow-lg p-8">
          <div className="w-12 h-12 bg-slate-200 rounded mb-4 flex justify-center items-center text-slate-600 text-3xl">
            <CgMouse />
          </div>
          <h1 className="font-bold text-lg">Ease of Use</h1>
          <p className="text-slate-600">
            We're always improving GhostTalk for a user-friendly experience.
            Visit our web and sign up with your username and password to get
            started.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
