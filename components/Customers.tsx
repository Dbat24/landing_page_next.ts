import React from "react";
import Image from "next/image";
import { LuCircleDot } from "react-icons/lu";
import Ratting from "../assets/rating.png";
import c_1 from "../public/assets/images/coustomer/c-1.png";
import c_2 from "../public/assets/images/coustomer/c-2.png";
import c_3 from "../public/assets/images/coustomer/c-3.png";
const Customers = () => {
  return (
    <div className="py-20 shadow container">
      <div className="flex justify-center py-3">
        <LuCircleDot className="text-[#acaa3ea0] w-12 h-12" />
        <div className="pl-5 flex flex-col justify-center items-center">
          <p className="text-[#d8d46f] text-lg font-semibold">
            SATISFIED CUSTOMERS
          </p>
          <h1 className="text-4xl font-bold text-black">Rewarding cases</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="img" src={Ratting} className="h-24 -mb-7 w-24" />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Preminum quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_1}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Mathhew Taylor
                </p>
                <p className="text-lg text-gray-500 font-normal">Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="img" src={Ratting} className="h-24 -mb-7 w-24 " />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Code Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_2}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Shoko Mugikura
                </p>
                <p className="text-lg text-gray-500 font-normal">Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="noimg" src={Ratting} className="h-24 -mb-7 w-24" />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Creative evolution
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_3}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Jacob Kalling
                </p>
                <p className="text-lg text-gray-500 font-normal">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
