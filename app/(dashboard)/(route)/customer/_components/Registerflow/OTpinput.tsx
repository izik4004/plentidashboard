// OtpInput.tsx

import React, { useRef, useState } from "react";

const TOTAL_OTP_NUM = 4;

interface Props {
  onOtpSubmit: (otp: string) => void;
}

const OtpInput: React.FC<Props> = ({ onOtpSubmit }) => {
  const [otp, setOtp] = useState<string[]>(Array(TOTAL_OTP_NUM).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const focusNextInput = (index: number) => {
    if (index < TOTAL_OTP_NUM - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const focusPrevInput = (index: number) => {
    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;
    if (/^[0-9]$/.test(value)) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      focusNextInput(index);
    }
  };

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });
      focusPrevInput(index);
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length === TOTAL_OTP_NUM) {
      onOtpSubmit(otpString);
    } else {
      alert("Please enter all digits of the OTP.");
    }
  };

  return (
    <div className="flex flex-col items-center w-[35%] p-[3rem] m-auto mt-[13rem]">
      <h2 className="font-bold text-2xl">Confirm your phone number</h2>
      <p className="text-center text-grey-600 my-[1rem]">
        Please enter the code that was sent to the phone number ending with{" "}
        <span className="font-bold">3181</span>
      </p>
      <div className="flex mb-4 space-x-2">
        {Array.from({ length: TOTAL_OTP_NUM }).map((_, index) => (
          <input
            key={index}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            maxLength={1}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-10 h-10 text-center border rounded-md"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-white bg-red-500 text-white w-[90%] m-auto my-[1rem] block  text-grey-600 hover:bg-gray-700 hover:text-white text-left py-2 px-4 rounded-full flex items-center justify-center w-64"
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;
