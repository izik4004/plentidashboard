import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import path
import { choose_brand } from "../../_constants/customerData";

const Brands = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const router = useRouter();

  const handleBrandChange = (brandIdentifier: string) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandIdentifier)) {
        return prevSelectedBrands.filter((brand) => brand !== brandIdentifier);
      } else {
        return [...prevSelectedBrands, brandIdentifier];
      }
    });
  };

  const handleSubmit = () => {
    console.log("Selected Brands: ", selectedBrands);
    router.push("/customer");
  };

  return (
    <section className="w-2/5 m-auto text-center h-[80vh] flex items-center justify-center flex-col">
      {/* ... */}
      <div className="grid grid-cols-3 my-[3rem] gap-6">
        {choose_brand.map((brand, index) => {
          // Use the image src or the index as the brand identifier
          const brandIdentifier = brand.src || `brand-${index}`;
          return (
            <div key={index} className="...">
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brandIdentifier)}
                  onChange={() => handleBrandChange(brandIdentifier)}
                />
                <img src={brand.src} alt={`Brand ${index}`} className="..." />
              </label>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="flex w-3/5 justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Next
      </button>
    </section>
  );
};

export default Brands;
