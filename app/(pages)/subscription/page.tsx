"use client";

import PriceCard from "@/components/Cards/PriceCard";
import PricingTable from "@/components/Subscriptions/PricingTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Wrapper from "@/components/Wrapper";
import { monthlyPlanPrice, yearlyPlanPrice } from "@/constants/PlanPrices";
import React, { useState } from "react";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };
  return (
    <Wrapper>
      {/* TOP Section */}
      <div className="mb-12">
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
          {(selectedPlan === "monthly"
            ? monthlyPlanPrice
            : yearlyPlanPrice
          ).map((plan) => (
            <PriceCard
              key={plan.title}
              title={plan.title}
              desc={plan.desc}
              price={plan.price}
            />
          ))}
        </div>
      </div>
      {/* Bottom Section */}
      <div>
        {/* Text Container */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Compare our plans and find the right one for you
          </h1>
          <p className="font-normal text-lg text-gray-400">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.{" "}
          </p>
        </div>
        {/* Table */}
        <div>
          <PricingTable />
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscription;
