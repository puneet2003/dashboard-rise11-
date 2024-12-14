import Sidebar from "./component/Sidebar";
import ProgressBar from "./component/ProgressBar";
import ClaimForm from "./component/ClaimForm";
import "./App.css"

function App() {
  return (
    <div className="bg-blue-600 min-h-screen top-0">
      <div className=" dashboard fixed flex flex-col md:flex-row mx-28 my-10 h-[90%] ">  {/* Set h-full to the container */}
        {/* Sidebar */}
        <Sidebar className="" /> {/* Ensure Sidebar takes full height */}

        {/* Main Content */}
        <div className="main-content bg-white flex-1 mt-4 md:mt-0 h-[100%]"> {/* Set h-full to make it fill the available height */}
          <div className="bg-white h-[10%] w-full flex justify-end items-center px-4 md:px-8 mr-16 ">
            <div className="flex space-x-4">
              <i className="fa-solid fa-bell text-xl text-gray-600"></i>{" "}
              {/* Notification Icon */}
              <i className="fa-solid fa-user text-xl text-gray-600"></i>{" "}
              {/* Profile Icon */}
            </div>
          </div>
          <div className="p-4 h-[90%]  bg-gray-200 rounded-2xl ">
            <ProgressBar />
            <ClaimForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
