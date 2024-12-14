import React from "react";

const CircleStep = ({ id, label, active }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row gap-2">
      <span
          className={`font-bold text-sm mb-1 ${
            active ? "text-blue-500" : "text-gray-400"
          }`}
        >
          0{id}
        </span>

        <p
        className={`text-sm ${
          active ? "text-black font-semibold" : "text-gray-400"
        }`}
      >
        {label}
      </p>

      </div>
      <div 
      className={`w-8 h-8 rounded-full flex flex-row ${
            active ? "bg-blue-500" : "bg-gray-200"
          }`}
        >
          {active && <span className="text-white text-lg">&#10003;</span>}
      </div>

    </div>
  );
};

export default CircleStep;