import React from "react";
import { Link } from "react-router-dom";
import image1 from "../img/Image4@2x.png";
import image2 from "../img/Image6@2x.png";

const ZopperPlan = (props) => {
  const { label, link, text, price, coupons, color } = props;
  return (
    <div className="relative w-96 h-100 sm:w-96 md:w-96 lg:w-96 xl:w-96">
      <div
        className={`border-2 border-${color}-400 p-5 flex flex-col items-center space-y-12`}
      >
        <div className="flex flex-row items-baseline justify-center">
          <div
            className={
              label === "Basic"
                ? `absolute -top-15 left-30 md:left-30 lg:left-30 xl:left-30 w-4.5 overflow-hidden inline-block`
                : `absolute -top-15 left-25 w-4.5 overflow-hidden inline-block`
            }
          >
            <div
              className={`h-16 bg-${color}-600 rotate-45 transform origin-bottom-left`}
            ></div>
          </div>

          <div
            className={`absolute -top-4.5 text-white text-2xl bg-${color}-400 p-7 pt-3 pb-3 rounded-b-lg`}
          >
            {label}
          </div>
          <div
            className={
              label === "Basic"
                ? `absolute -top-15 right-30 sm:right-30 lg:right- xl:right-30 w-4.5 overflow-hidden inline-block`
                : `absolute -top-15 right-25 lg:right-25 w-4.5 overflow-hidden inline-block`
            }
          >
            <div
              className={`h-16 bg-${color}-600 -rotate-45 transform origin-bottom-right`}
            ></div>
          </div>
        </div>

        <div className="flex items-center border-b-2 border-gray-200 w-full justify-center pb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`text-2xl text-${color}-400 h-8 w-8`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className={`text-4xl text-${color}-400 font-bold pr-2`}>{price}</p>
          <p className="">{coupons}</p>
        </div>
        <div className="flex flex-col items-center justify-evenly h-32">
          <div className="flex justify-center pb-4 ">
            {label === "Standard" ? (
              <img className="h-24" src={image1} alt="image1" />
            ) : null}
            {label === "Premium" ? (
              <div className="flex items-center ">
                <img className="h-24" src={image2} alt="image2" />
                <img className="h-24" src={image1} alt="image1" />
              </div>
            ) : null}
          </div>
          <p className="w-full text-center">{text}</p>
        </div>
        <Link
          className="border-2 p-1 w-32 text-center rounded-lg hover:bg-blue-200"
          to={`/plans/${link}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ZopperPlan;
