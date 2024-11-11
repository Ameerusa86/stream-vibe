// Support.tsx
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/Forms/ContactForm";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section with Image and Text */}
        <div className="">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Welcome to our support page!
            </h1>
            <p className="text-lg font-medium text-gray-300">
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </div>

          {/* Image with Gradient Overlay */}
          <div className="relative mt-6">
            <Image
              src={"/images/cta.png"}
              alt="support image"
              width={500}
              height={500}
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-08 via-black-06 to-transparent opacity-75 z-10 pointer-events-none rounded-xl" />
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="col-span-2 sm:ml-16">
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <FAQ />
      </div>
    </Wrapper>
  );
};

export default Support;
