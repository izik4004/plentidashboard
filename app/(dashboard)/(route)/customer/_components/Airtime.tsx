import React, { useState } from "react";
import { recentTopUp, brandAmount } from "../_constants/customerData";
import { mtn, airtel, glo, etisalat } from "@/public/customerImages";
import usePostRequest from "@/app/hooks/usepostRequest";

type NetworkOption = {
  name: string;
  imgSrc: { src: string };
};

const options: NetworkOption[] = [
  { name: "mtn", imgSrc: mtn },
  { name: "airtel", imgSrc: airtel },
  { name: "glo", imgSrc: glo },
  { name: "9mobile", imgSrc: etisalat },
];
const Airtime = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption | null>(
    null
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");

  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const postRequest = usePostRequest();
  const payload = {
    amount: parseInt(amount),
    network: selectedNetwork?.name.toUpperCase(),
    paymentcode: "1", // This is a placeholder, replace with actual code if necessary
    mobile: mobile,
    reward: 1,
  };
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleAmountClick = (selectedAmount: string) => {
    setAmount(selectedAmount);
  };
  const selectNetwork = (option: any) => {
    setSelectedNetwork(option);
    setDropdownOpen(false);
  };

  const { mutate, isError, error, isPending } = postRequest(
    `${url}/user/bills/buy-airtime`,
    (responseData) => {
      console.log("niceinfo", responseData);
    },
    (error) => {
      console.error(error);
    }
  );
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNetwork || !amount || !mobile) {
      alert("Please fill in all fields");
      return;
    }
    mutate(payload);
  };

  console.log("info", payload);

  return (
    <div>
      Your recent top-up
      <div className="grid grid-cols-4 gap-4 place-items-center my-[1rem] ">
        {recentTopUp.map((recent, index) => {
          return (
            <div className="my-[1rem] " key={index}>
              <img src={recent.brand.src} className='md:h-[80px] md:w-[80px] w-[60px] h-[60px] rounded-full' alt="" />
              <p className="my-[1rem] max-md:text-[12px]">{recent.num}</p>
            </div>
          );
        })}
      </div>
      <section>
        <h2>Select an amount to top up </h2>
        <figure className="grid grid-cols-4">
          {brandAmount.map((brandAmount, index) => {
            const isSelected = amount === brandAmount?.price;
            return (
              <div
                className={`bg-[#F8F8F8] rounded-lg m-[1rem] max-md:w-[68px] place-items-center flex items-center justify-center flex-col md:py-[2.5rem] p-[0.5rem] md:p-[1.5rem] cursor-pointer ${
                  isSelected ? "border-2 border-blue-500" : ""
                }`}
                key={index}
                onClick={() => handleAmountClick(brandAmount.price)}
              >
                <h2 className="text-[#626060] font-bold md:text-2xl">
                  {" "}
                  &#8358;{brandAmount.price}
                </h2>
                <p className="text-[#ED4249] max-md:text-[10px] font-bold">
                  {" "}
                  {brandAmount.points} points
                </p>
              </div>
            );
          })}
        </figure>
        <div className="p-[1.5rem]">
          <figure className="md:flex items-center justify-center gap-5 mb-[1rem]">
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
                value={amount}
                className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] "
                onChange={(e) => setAmount(e.target.value)}
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
                value={mobile}
                className="input input-bordered bg-[#F3F3F3] w-full text-[#A09F9F]"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </figure>
          <div
            className=" relative inline-flex rounded-md bg-[#F3F3F3] w-full px-[1rem] cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-full rounded-l-md px-4 py-2">
              {" "}
              <span>{selectedNetwork ? selectedNetwork.name : "Network"}</span>
            </div>
            <div className="relative">
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
                    <img
                      src={option.imgSrc.src}
                      alt={option.name}
                      className="h-6 w-6 mr-2"
                    />
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-red-600 max-md:w-full max-md:mb-[4rem] rounded-full md:mx-4 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Airtime;
