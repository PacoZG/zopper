import React from "react";
import Logo from "../img/Logo@2x.png";
import Group1 from "../img/Group4759@2x.png";

const HomePage = () => {
  return (
    <div className="bg-blue-50 border-b-2 border-gray-300 min-w-screen">
      <div className="flex items-center justify-center space-x-10 p-16 lg:p-20">
        <img
          className="h-20 sm:h-32 md:h-42 lg:h-52 xl:h-68"
          src={Logo}
          alt="pic1"
        />
        <img
          className="h-20 sm:h-32 md:h-42 lg:h-52 xl:h-68"
          src={Group1}
          alt="group1"
        />
      </div>
    </div>
  );
};

export default HomePage;
