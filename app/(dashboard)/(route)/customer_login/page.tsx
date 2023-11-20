"use client";

import React, { useState } from "react";
import Brands from "../customer/_components/Registerflow/Brands";
import OtpInput from "../customer/_components/Registerflow/OTpinput";
import ProfileInfo from "../customer/_components/Registerflow/ProfileInfo";
import Registerform from "../customer/_components/Registerflow/Registerform";

const page = () => {
  const [step, setStep] = useState(1);
  const [registrationResponse, setRegistrationResponse] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  

  const handleRegisterSubmit = (responseData:any, email: string) => {
    setRegistrationResponse(responseData);
    setEmail(email);
    console.log(email);
    setStep(2);
  };

  const handleOtpSubmit = () => {
    setStep(3);
  };
  const handleProfileSubmit = () => {
    setStep(4);
  };

  return (
    <div>
      {step === 1 && <Registerform onSubmit={handleRegisterSubmit} />}
      {step === 2 && <OtpInput registrationData={registrationResponse} onOtpSubmit={handleOtpSubmit} />}
      {step === 3 && <ProfileInfo onSubmit={handleProfileSubmit} email={email} />}
      {step === 4 && <Brands />}
    </div>
  );
};

export default page;
