import React, { useState, useEffect } from "react";
import { promotionlady } from "@/public/customerImages/index";
import { offerCard as offerData } from "../../customer/_constants/customerData";
import MorePoints from "../_components/MorePoints";
import OfferCard from "./Offers"; // Replace with the correct path to the OfferCard component

const CashbackPromotions: React.FC = () => {
  return (
    <>
      <div className="my-[1.5rem]">
        <h2 className="text-[20px]">More ways to earn cashback</h2>
        <p className="text-[#A09F9F]">
          Extra cash back for a selected few like you
        </p>
      </div>

      
      <div className="flex overflow-x-auto gap-4">
          {offerData.map((offer) => (
             <div className="md:w-1/3 ">
               <OfferCard offer={offer} key={offer.id} detailsLink={`/customer/hhhh`} />
             </div>
          ))}
        </div>
    
      <MorePoints />
    </>
  );
};

export default CashbackPromotions;
