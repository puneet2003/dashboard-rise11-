import React from "react";
import logo from "../assets/Photos/logo.jpg";
import image from "../assets/Photos/images.png";

const Sidebar = () => {
  return (
    <div className="w-56 h-[100%] bg-white shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="px-6 pt-4 pb-2 h-[15%]">
        <div className="flex items-center space-x-2">
          <div className="w-16">
            <img src={logo} alt="Logo" />
          </div>
          <h1 className="text-xl font-bold text-black">Jur</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white px-6 py-2 pl-8 flex-grow">
        <ul className="space-y-5">
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Dashboard
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-briefcase"></i>
            </span>
            My Cases
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-chart-line"></i>
            </span>
            Activities
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-calendar"></i>
            </span>
            Calendar
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-folder"></i>
            </span>
            Files
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 mr-4">
              <i className="fas fa-gavel"></i>
            </span>
            Open a Dispute
          </li>
        </ul>
      </nav>

      {/* Promo Section */}
      <div className="m-4 bg-blue-300 rounded-lg flex-grow">
        <div className="p-4 rounded-lg text-center">
          <p className="font-medium">Get Justice on every Claim</p>
          <div className="bg-blue-300 rounded-lg mx-auto w-fit">
            <img
              src={image}
              alt="Justice"
              className=" mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
