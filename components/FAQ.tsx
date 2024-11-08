import React from "react";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { leftFAQ, rightFAQ } from "@/constants/FAQs";

const FAQ = () => {
  return (
    <Wrapper>
      {/* Top Container */}
      <div className="flex items-end justify-between mb-8">
        {/* Text Container */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-normal text-lg text-gray-400">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        {/* Button Container */}
        <div>
          <Button className="bg-red-45 px-6 py-4">Ask a question</Button>
        </div>
      </div>
      {/* FAQ Container */}
      <div className="flex gap-10 w-full">
        {/* Left Accordion */}
        <div className="w-full">
          {leftFAQ.map((faq, index) => (
            <Accordion
              type="single"
              collapsible
              key={index}
              className="border-b border-gray-700"
            >
              <AccordionItem
                value={`item-${index}`}
                className="flex items-center gap-4 p-4"
              >
                {/* Numbered Square Indicator */}
                <div className="w-10 h-10 bg-black-12 flex items-center justify-center rounded-md text-white font-bold">
                  {faq.id}
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="text-left w-full text-lg font-semibold text-white flex justify-between">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 mt-2  text-sm">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* Right Accordion */}
        <div className="w-full">
          {rightFAQ.map((faq, index) => (
            <Accordion
              type="single"
              collapsible
              key={index}
              className="border-b border-gray-700"
            >
              <AccordionItem
                value={`item-${index}`}
                className="flex items-center gap-4 p-4"
              >
                {/* Numbered Square Indicator */}
                <div className="w-10 h-10 bg-black-12 flex items-center justify-center rounded-md text-white font-bold">
                  {faq.id}{" "}
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="text-left w-full text-lg font-semibold text-white flex justify-between">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 mt-2 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQ;
