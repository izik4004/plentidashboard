"use client";
import React from "react";
import Airtime from "../../../_components/Airtime";
import Tabs from "../../../_components/Tabs";

const page = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs m-[1rem]">
        <ul>
          <li>Other Services</li>
          <li>Airtime</li>
        </ul>
      </div>
      <div className="md:p-4 p-2">
        <Tabs
          tabData={[{ label: "Buy Airtiem" }, { label: "Buy Data Bundles " }]}
        >
          <div>
            <Airtime />
          </div>
          <div>for you</div>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
