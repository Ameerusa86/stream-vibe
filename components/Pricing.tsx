"use client";

import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceCard from "./Cards/PriceCard";
import { monthlyPlanPrice, yearlyPlanPrice } from "@/constants/PlanPrices";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <Wrapper>
      {/* TOP Section */}
      <div className="flex items-center justify-between mb-8">
        {/* Text Container */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Choose the plan that's right for you{" "}
          </h1>
          <p className="font-normal text-lg text-gray-400">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!{" "}
          </p>
        </div>

        {/* Tabs for Monthly/Yearly selection */}
        <Tabs
          defaultValue="monthly"
          className="flex items-center justify-center w-[237px] h-[57px] bg-black-06 rounded-lg ring-2 ring-black-12"
        >
          <TabsList className="flex w-full bg-black-06 rounded-lg">
            <TabsTrigger
              value="monthly"
              className="w-1/2 text-center px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-200 data-[state=active]:bg-black-12 data-[state=active]:text-white data-[state=inactive]:text-gray-400"
              onClick={() => handlePlanChange("monthly")}
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="w-1/2 text-center px-6 py-3 rounded-lg text-gray-400 font-semibold transition-colors duration-200 data-[state=active]:bg-black-12 data-[state=active]:text-white data-[state=inactive]:text-gray-400"
              onClick={() => handlePlanChange("yearly")}
            >
              Yearly
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pricing Cards */}
      <div className="flex items-center justify-center gap-5 w-full">
        {(selectedPlan === "monthly" ? monthlyPlanPrice : yearlyPlanPrice).map(
          (plan) => (
            <PriceCard
              key={plan.title}
              title={plan.title}
              desc={plan.desc}
              price={plan.price}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Pricing;
