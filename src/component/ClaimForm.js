import React from "react";

const ClaimForm = () => {
  return (
    <div className="bg-gray-50 md:px-8 rounded-lg shadow-md h-[88%]">
      {/* Header */}
      <div className="font-semibold text-gray-700 pt-4">
        <span className="text-base"> File your Claim. </span>{" "}
        <span className="text-gray-400 text-xs">(Approx 5 Minutes)</span>
      </div>
      <div className="w-full h-0.5 bg-gray-300 mt-1 relative ">
        {/* Blue part of the line */}
        <div className="absolute top-0 left-1/4 w-1/5 h-0.5 bg-blue-500"></div>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Claim Value Section */}

        <div className="pt-2 px-2 ">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500 ">
              <i class="fa-solid fa-calculator fa-2x"></i>
            </span>
            <h3 className=" text-base font-semibold  text-gray-700 pl-2">
              Claim Value
            </h3>
          </div>

          <div className="space-y-3 ml-8 px-2">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Contract Value
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="10,00,00"
                />
                <span className="text-gray-600">USD</span>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Claim Value
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="15,00,00"
                />
                <span className="text-gray-600">USD</span>
              </div>
              <span className="text-orange-500 text-xs">
                150% of Contract Value
              </span>
            </div>
          </div>
        </div>

        {/* Place Section */}
        <div className="pt-2 px-2">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-map-marker-alt fa-2x"></i>
            </span>
            <h3 className="font-semibold text-base text-gray-700">Place</h3>
          </div>
          <div className="px-2 ml-4 ">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Select the Place for proceedings"
            />
          </div>
          <p className="text-xs text-gray-500 mt-8 ml-6">
            Is the place for the proceedings the one mentioned in the agreement?
          </p>
          <div className="flex space-x-4 mt-2 ml-6">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="place"
                className="focus:ring-blue-400"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="place"
                className="focus:ring-blue-400"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div className="pt-2 px-2">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-language fa-2x"></i>
            </span>
            <h3 className="font-semibold text-gray-700 text-base">Language</h3>
          </div>
          <div className="ml-10 p-2 ">
            <input
              type="text"
              className="w-56 border border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Select the language for proceedings"
            />
          </div>
          <p className="text-xs text-gray-500 mt-8 ml-12">
            Is the language for the proceedings the one mentioned in the
            agreement?
          </p>
          <div className="flex space-x-4 mt-2 ml-12">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="language"
                className="focus:ring-blue-400"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="language"
                className="focus:ring-blue-400"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full h-0.5 bg-gray-300 relative "></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 ">
        {/* Statement Section */}
        <div className="">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-file-alt"></i>
            </span>
            <h3 className="font-semibold text-gray-900">Statement</h3>
          </div>
          <div className="rounded-md p-8 ml-6  w-56 text-center text-xs text-gray-500 bg-blue-100 ">
            Write your Statement Here <br /> or <br />
            <button className="mt-2 text-blue-500 ">
              <span>
                <i class="fa-solid fa-cloud-arrow-up"></i>
                {"  "}
              </span>
              Upload a PDF
            </button>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-file-contract"></i>
            </span>
            <h3 className="font-semibold text-gray-700">
              Agreement under Disputes
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="border-dashed border-2 border-blue-400 rounded-md text-center text-xs text-gray-500 bg-blue-100 py-8 px-4">
              <span>
                <i class="fa-solid fa-cloud-arrow-up fa-2x text-blue-500"></i>
              </span>
              <br />
                Upload the Contract
              <br />
              <span className="text-gray-400">Max 2MB, PDF</span>
            </div>
            <div className="border-dashed border-2 border-blue-400 rounded-md p-4 text-center text-xs text-gray-500 bg-blue-100">
              <span>
                <i class="fa-solid fa-cloud-arrow-up fa-2x text-blue-500"></i>
              </span>
              <br />
              Arbitration Agreement
              <br />
              <span className="text-gray-400">Max 2MB, PDF</span>
            </div>
          </div>
        </div>

        {/* Additional Documentation Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-folder-open"></i>
            </span>
            <h3 className="font-semibold text-gray-700">
              Additional Documentation
            </h3>
          </div>
          <div className="flex gap-6 text-center text-xs text-gray-500">
            <div className="border-dashed border-2 border-blue-400 rounded-md py-8 px-4 bg-blue-100">
              <span>
                <i class="fa-solid fa-cloud-arrow-up fa-2x text-blue-500"></i>
              </span>
              <br />
              Upload the contract
              <br />
              <span className="text-gray-400">Max 2MB, PDF</span>
            </div>
            <div className="py-8 px-4">
              <button className="mt-2 text-blue-500 ">
              <i class="fa-solid fa-circle-plus fa-3x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
