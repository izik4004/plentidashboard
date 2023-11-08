import React, { useState } from "react";
import { recentTopUp, brandAmount } from "../_constants/customerData";
import { mtn, airtel, glo, etisalat } from "@/public/customerImages";
type NetworkOption = {
  name: string;
  imgSrc: string;
};

const options:NetworkOption[] = [
  { name: "mtn", imgSrc: mtn }, // replace with your image paths
  { name: "airtel", imgSrc: airtel },
  { name: "glo", imgSrc: glo },
  { name: "9mobile", imgSrc: etisalat },
];
const Airtime = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const selectNetwork = (option:any) => {
    setSelectedNetwork(option);
    setDropdownOpen(false);
  };
  return (
    <div>
      Your recent top-up
      <div className="grid grid-cols-4 gap-4 place-items-center my-[1rem] ">
        {recentTopUp.map((recent, index) => {
          return (
            <div className="my-[1rem] " key={index}>
              <img src={recent.brand.src} alt="" />
              <p className="my-[1rem]">{recent.num}</p>
            </div>
          );
        })}
      </div>
      <section>
        <h2>Select an amount to top up </h2>
        <figure className="grid grid-cols-4">
          {brandAmount.map((amount, index) => {
            return (
              <div
                className="bg-[#F8F8F8] rounded-lg m-[1rem] flex items-center justify-center flex-col py-[2.5rem] p-[1.5rem]"
                key={index}
              >
                <h2 className="text-[#626060] font-bold text-2xl">
                  {" "}
                  &#8358;{amount.price}
                </h2>
                <p className="text-[#ED4249] font-bold">
                  {" "}
                  {amount.points} points
                </p>
              </div>
            );
          })}
        </figure>
        <div className="p-[1.5rem]">
          <figure className="flex items-center justify-center gap-5 mb-[1rem]">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Amount</span>
                <span className="label-text-alt text-[#ED4249]">
                  100 points
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] "
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Phone number</span>
                <span className="label-text-alt text-[#ED4249]">
                  100 points
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-[#F3F3F3] w-full text-[#A09F9F]"
              />
            </div>
          </figure>
          <div className=" relative inline-flex rounded-md bg-[#F3F3F3] w-full px-[1rem] cursor-pointer" onClick={toggleDropdown}>
            <div className="w-full rounded-l-md px-4 py-2">  <span>{selectedNetwork ? selectedNetwork.name : "Network"}</span></div>
            <div className="relative" >
              <button
                type="button"
               
                className=" text-gray-600hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 "
              >
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548c0.436-0.446 1.045-0.481 1.576 0l3.908 3.747 3.908-3.747c0.531-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.217 0.223-0.502 0.335-0.788 0.335s-0.571-0.112-0.788-0.335l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
                </svg>
              </button>
            </div>
          </div>
          <div className=" relative inline-flex rounded-md bg-[#F3F3F3] w-full  my-[0.5rem]">
          {isDropdownOpen && (
            <ul className=" z-10 w-full border mt-1 p-[1rem] rounded-md">
              {options.map((option) => (
                <li
                  key={option.name}
                  className="flex items-center px-4 py-2 hover:bg-[#A09F9F] rouned-md cursor-pointer"
                  onClick={() => selectNetwork(option)}
                >
                  <img src={option.imgSrc.src} alt={option.name} className="h-6 w-6 mr-2" />
                  <span>{option.name}</span>
                </li>
              ))}
            </ul>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Airtime;
