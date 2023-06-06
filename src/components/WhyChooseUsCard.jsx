import React from "react";

const WhyChooseUsCard = ({ icon, title, content }) => {
  return (
    <div className=" rounded-lg bg-white shadow-lg p-8 transition-all duration-500 hover:-translate-y-2 cursor-default">
      <div className="w-12 h-12 bg-slate-200 rounded mb-4 flex justify-center items-center text-slate-600 text-3xl">
        {icon}
      </div>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-slate-600">{content}</p>
    </div>
  );
};

export default WhyChooseUsCard;
