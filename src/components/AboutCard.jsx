import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border-2 border-yellow-400 rounded-tl-3xl rounded-br-3xl py-12 px-8 text-left hover:scale-105 duration-500">
      <div>
        <div className="grd inline-flex p-3 rounded-full">
          {props.icon}
        </div>
        <h3 className="text-2xl font-bold mt-3">
          {props.heading}
        </h3>
        <p className="text-slate-300 mt-4">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
