import React, { useState, useEffect } from "react";
import { mtn, airtel, glo, etisalat } from "@/public/customerImages";
import { Select, Space } from "antd";

const { Option } = Select;
const optionsWithImages = [
  { value: "GLO", label: "GLO", image: glo },
  { value: "MTN", label: "MTN", image: mtn },
  { value: "AIRTEL", label: "AIRTEL", image: airtel },
  { value: "9MOBILE", label: "9MOBILE", image: etisalat },
];

const Data = () => {
  const [selectedValue, setSelectedValue] = useState({
    amount: "",
    mobile: "",
    dataplan: "",
    network: "",
    reward: 1,
    paymentcode: "",
    showNetworkSelect: false,
    showPackageSelect: false,
    showAmountField: false,
  });
  const determineNetwork = (mobileNumber: any) => {
    const prefix = mobileNumber.substring(0, 4);
    if (
      [
        "0703",
        "0706",
        "0803",
        "0806",
        "0810",
        "0813",
        "0816",
        "0814",
        "0903",
        "0906",
        "0913",
        "0916",
        "0704",
      ].includes(prefix)
    ) {
      return "MTN";
    } else if (
      ["0815", "0811", "0805", "0807", "0705", "0905", "0915"].includes(prefix)
    ) {
      return "GLO";
    } else if (
      [
        "0701",
        "0708",
        "0812",
        "0802",
        "0808",
        "0902",
        "0901",
        "0904",
        "0907",
        "0912",
      ].includes(prefix)
    ) {
      return "AIRTEL";
    } else if (["0809", "0818", "0817", "0909", "0908"].includes(prefix)) {
      return "9MOBILE";
    } else {
      return "";
    }
  };
  useEffect(() => {
    const network = determineNetwork(selectedValue.mobile);
    if (selectedValue.mobile.length >= 10) {
      setSelectedValue((prev) => ({
        ...prev,
        network,
        showNetworkSelect: true,
        showPackageSelect: true,
      }));
    } else if (selectedValue.showPackageSelect) {
      setSelectedValue((prev) => ({
        ...prev,
      }));
    } else {
      setSelectedValue((prev) => ({
        ...prev,
        showNetworkSelect: false,
        showPackageSelect: false,
      }));
    }
  }, [selectedValue.mobile]);

  const handleNetworkChange = (value: string) => {
    setSelectedValue((prev) => ({
      ...prev,
      network: value,
      showPackageSelect: true,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target
      ? e.target
      : { name: e.name, value: e.value };
    setSelectedValue((prev) => ({ ...prev, [name]: value }));
    if (name === "dataplan" && value) {
      setSelectedValue((prev) => ({ ...prev, showAmountField: true }));
    }
    console.log(selectedValue);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(selectedValue);
  };
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
              className="bg-[#F8F8F8] rounded-[12px] max-md:w-[75px]  flex items-center justify-between md:min-w-[130px] flex-col"
              key={index}
            >
              <p className="bg-[#FCF0EB] text-[#FF6F33] max-md:text-[10px] text-center p-[0.5rem] rounded-t-[12px] w-full">
                {" "}
                1 Day
              </p>
              <div>
                <p className="md:p-[1rem] p-[0.5rem] max-md:text-[12px]">
                  100 MB
                </p>
                <p className="text-[#ED4249] px-[1rem] max-md:text-[10px] pb-[1.2rem]">
                  5 point
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="form-control w-full  my-[3rem]">
          <label className="label">
            <span className="label-text">Phone Number</span>
            <span className="label-text-alt text-[#ED4249]">100 points</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] "
            name="mobile"
            value={selectedValue.mobile}
            onChange={handleChange}
          />

          {selectedValue.showNetworkSelect && (
            <figure className="my-[1rem]">
              <label className="label-text">Network</label>
              <Select
                value={selectedValue.network}
                className="bg-[#F3F3F3] w-full cursor-pointer h-[45px]"
                onChange={handleNetworkChange}
              >
                {optionsWithImages.map((option) => (
                  <Option
                    key={option.value}
                    value={option.value}
                    className="bg-[#F3F3F3]"
                  >
                    <li className="flex items-center bg-[#F3F3F3] text-[17px]">
                      <img
                        src={option.image.src}
                        alt={option.label}
                        className="w-[35px] px-[10px]"
                      />
                      {option.label}
                    </li>
                  </Option>
                ))}
              </Select>
            </figure>
          )}

          {selectedValue.showPackageSelect && (
            <figure className="my-[1rem]">
              <label className="label-text">Package</label>
              <Select
                value={selectedValue.dataplan}
                className="w-full h-[45px]"
                onChange={(value) => handleChange({ name: "dataplan", value })}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </figure>
          )}
          {selectedValue.showAmountField && (
            <>
              <label className="label">
                <span className="label-text block">Amount</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] block "
                name="amount"
                value={selectedValue.amount}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Data;
