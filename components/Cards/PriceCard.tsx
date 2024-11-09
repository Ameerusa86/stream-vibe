"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { monthlyPlanPrice } from "@/constants/PlanPrices";

interface PriceCardProps {
  title: string;
  desc: string;
  price: number;
}

const PriceCard = ({ title, desc, price }: PriceCardProps) => {
  return (
    <div className="w-[512px] h-[425px] flex flex-col rounded-xl bg-black-10 ring-1 ring-black-15 p-12">
      {/* Plan Header */}
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-bold text-2xl">{title}</h1>

        {/* Plan desc */}
        <p className="text-lg mb-12">{desc}</p>
      </div>

      {/* Plan Price */}
      <div className="font-semibold text-[40px]">
        ${price} <span className="font-medium text-lg">/month</span>
      </div>
      {/* Buttons */}
      <div className="mt-12 flex items-center justify-center gap-3">
        <Button className="px-6 py-4 w-full bg-black-08">
          Start Free Trial
        </Button>
        <Button className="px-6 py-4 w-full bg-red-45">Choose Plan</Button>
      </div>
    </div>
  );
};

export default PriceCard;
