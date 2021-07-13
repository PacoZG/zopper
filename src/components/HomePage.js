import React from "react";
import RewardBanner from "./RewardBanner";
import ZopperPlan from "./ZopperPlan";
import Bar1 from "../img/Group4750@2x.png";

const HomePage = () => {
  return (
    <div>
      <RewardBanner />
      <div className="flex flex-col items-center pb-10">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold p-4 pb-2">
          Zopper Plans
        </h1>
        <img
          className="flex justify-center p-4 pt-2 w-72 sm:w-100"
          src={Bar1}
          alt="Bar1"
        />
      </div>

      <div className="flex flex-col items-center space-y-8 xl:space-x-6 xl:flex-row xl:space-y-0 lg:pl-6 lg:pr-6 justify-center">
        <ZopperPlan
          label="Basic"
          price="249"
          coupons=" + coupons"
          text="Including Group Personal Accident Policy"
          link="basic"
          color="blue"
        />
        <ZopperPlan
          label="Standard"
          price="499"
          coupons=" + 5X coupons"
          text="Including Group Personal Accident Policy & Group Terms Life "
          link="standard"
          color="yellow"
        />
        <ZopperPlan
          label="Premium"
          price="999"
          coupons=" + 10X coupons"
          text="Including Group Personal Accident Policy, Group Terms Life & Hospicash"
          link="premium"
          color="green"
        />
      </div>
    </div>
  );
};

export default HomePage;
