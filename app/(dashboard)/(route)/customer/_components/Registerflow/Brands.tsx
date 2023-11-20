import React from "react";

import { choose_brand } from "../../_constants/customerData";
const Brands = () => {
  return (
    <section className="w-2/5 m-auto text-center h-[80vh] flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold my-[1rem]">
        Pick your favorites store
      </h2>
      <p className="text-gray-400 text-xl">
        You can add as many as you want or do this later
      </p>
      <div className="grid grid-cols-3 my-[3rem] gap-6">
        {choose_brand.map((brand, index) => {
          return (
            <div
              className="h-[140px] p-[1rem] w-[140px] rounded-md border-[1px] border-grey-600"
              key={index}
            >
              <img
                src={brand.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="flex w-3/5 justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        next
      </button>
    </section>
  );
};

export default Brands;
