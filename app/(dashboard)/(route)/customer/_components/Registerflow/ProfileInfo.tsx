import { loginimg } from "@/public/customerImages";
import React from "react";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';


interface profileProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const onDate: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date ? date.format() : null, dateString);
};
const ProfileInfo: React.FC<profileProps> = ({ onSubmit }) => {
  const DatePickerAny: any = DatePicker;

  
  return (
    <div className="flex justify-between my-[5rem]">
      <form action="" className="ml-[4rem]" onSubmit={onSubmit}>
        <h2 className="text-2xl"> Profile information </h2>
        <p className="text-gray-600 my-[1rem]">
          To continue, add your profile details. This information would help us
          to provide offers that are unique to you
        </p>

        <div>
          <label
            htmlFor="f_name"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="f_name"
              name="fname"
              type="text"
              autoComplete=""
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="l_name"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            last name
          </label>
          <div className="mt-2">
            <input
              id="l_name"
              name="lname"
              type="text"
              autoComplete=""
              placeholder="e.g Romeoscript chukwuemeka"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Gender
          </label>
          <div className="mt-2">
            <input
              id="gender"
              name="gender"
              type="text"
              autoComplete=""
              placeholder="e.g male"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="dob"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Date of Birth
          </label>
          <DatePickerAny onChange={onDate}  className="bg-[#f3f3f3] border-none w-full p-[0.5rem] mt-2" />
        </div>

        <div className="my-[1.5rem]">
          <label
            htmlFor="state"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="state"
              name="state"
              type="text"
              autoComplete=""
              placeholder="e.g Enugu"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="state"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="state"
              name="state"
              type="text"
              autoComplete=""
              placeholder="e.g Enugu"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="my-[1rem]">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Residential Address
            </label>
          </div>
          <div className="mt-2">
            <input
              id="address"
              name="address"
              type="text"
              placeholder="your home address"
              required
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-[3rem]">
          <button
            type="submit"
            className="flex w-3/5 justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
      <img src={loginimg.src} alt="" />
    </div>
  );
};

export default ProfileInfo;
