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
  const [mobile, setMobile] = useState<string>("");
  

  const handleRegisterSubmit = (responseData:any, email: string, mobile:string) => {
    setRegistrationResponse(responseData);
    setEmail(email);
    setMobile(mobile);
    console.log(email,mobile);
    
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
      {step === 3 && <Registerform onSubmit={handleRegisterSubmit} />}
      {step === 2 && <OtpInput registrationData={registrationResponse} onOtpSubmit={handleOtpSubmit} />}
      {step === 1 && <ProfileInfo onSubmit={handleProfileSubmit} mobile={mobile} email={email} />}
      {step === 4 && <Brands />}
    </div>
  );
};

export default page;
