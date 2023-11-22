import React from "react";

const Data = () => {
  const dataDeals = [
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
    {
      days: 1,
      balance: "100 MB",
      points: 5,
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-4 gap-8">
        {dataDeals.map((data, index) => {
          return (
            <div
              className="bg-[#F8F8F8] rounded-[12px] max-md:w-[68px]  flex items-center justify-between md:min-w-[130px] flex-col"
              key={index}
            >
              <p className="bg-[#FCF0EB] text-[#FF6F33] max-md:text-[10px] text-center p-[0.5rem] rounded-t-[12px] w-full">
                {" "}
                1 Day
              </p>
              <div>
                <p className="md:p-[1rem] p-[0.5rem] max-md:text-[12px]  ">100 MB</p>
                <p className="text-[#ED4249] px-[1rem] max-md:text-[10px] pb-[1.2rem]">5 point</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="form-control w-full  my-[3rem]">
        <label className="label">
          <span className="label-text">Phone Number</span>
          <span className="label-text-alt text-[#ED4249]">100 points</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] "
        />
       
      </div>
    </>
  );
};

export default Data;
