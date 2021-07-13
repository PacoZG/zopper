import React from "react";
import bar2 from "../img/Group4749@2x.png";
import { useHistory } from "react-router";

const Plan = (props) => {
  const { plan } = props;
  const history = useHistory();

  return (
    <div className="p-10 border-12 border-blue-100">
      <h1 className="pl-3 text-xl font-semibold">
        {plan} <span>ZRP Plans</span>
      </h1>
      <img className="w-72 mt-5 mb-5" src={bar2} alt="bar2" />
      <div className="ml-3 border-2 border-gray-200 rounded-md">
        <h1 className="bg-gray-300 rounded-sm p-2 pl-3">
          JsonPlacerHolder Post
        </h1>
        <div className="p-4">
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4 items-center justify-around p-4">
            <input
              className="border-2 border-gray-200 p-2 rounded-md w-full"
              placeholder="Title"
            />
            <input
              className="border-2 border-gray-200 p-2 rounded-md w-full"
              placeholder="Body"
            />
            <input
              className="border-2 border-gray-200 p-2 rounded-md w-full"
              placeholder="UserId"
            />
          </div>
          <div className="flex items-center justify-center space-x-5">
            <button className="text-white bg-black w-40 rounded-md p-1">
              Submit
            </button>
            <button
              className="text-white bg-black w-40 rounded-md p-1"
              onClick={() => history.push("/home")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
