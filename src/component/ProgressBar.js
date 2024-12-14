import React from "react";

const ProgressBar = () => {
  const steps = [
    { id: 1, label: "Preliminary", completed: true },
    { id: 2, label: "Your Details", completed: true },
    { id: 3, label: "KYC", completed: true },
    { id: 4, label: "Parties", completed: false, time: "Approx 5 Min" },
    { id: 5, label: "Claim", completed: false, time: "Approx 5 Min" },
    { id: 6, label: "Review", completed: false, time: "Approx 5 Min" },
    { id: 7, label: "Payment", completed: false, time: "Approx 5 Min" },
  ];

  return (
    <div className="flex items-center justify-between bg-none  sm:px-10 space-x-2 sm:space-x-4 h-[12%]">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center justify-center">
          {/* Step Circle with Label and Time */}
          <div className="flex flex-col items-center">
            {/* Label Above Circle */}
            <span
              className={`text-xs mb-1 ${step.completed ? "text-black font-semibold" : "text-gray-600"}`}
            >
              {"0"}{step.id} {" "}{step.label}
            </span>

            {/* Circle */}
            <div
              className={`w-5 h-5 flex items-center text-white justify-center rounded-full ${
                step.completed
                  ? "bg-blue-500 text-white"
                  : "border-2 border-gray-300 bg-white text-gray-400"
              }`}
            >
              {step.completed ? "✔" : ""}
            </div>

            {/* Time Below Circle */}
            {step.time && !step.completed && (
              <span className="text-xs text-gray-400 mt-1">{step.time}</span>
            )}
          </div>

          {/* Progress Line */}
          {index < steps.length - 1 && (
            <div
              className={`${
                steps[index + 1].completed
                  ? "bg-blue-500"
                  : index === 2
                  ? "border-t-2 border-dotted border-gray-400"
                  : "bg-blue-500"
              }`}
              style={{
                width: "30px",  // Further reduced line width
                height: "2px",
                marginTop: "-8px", // Reduced gap between circles and lines
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
