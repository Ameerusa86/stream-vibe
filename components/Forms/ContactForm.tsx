// ContactForm.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
    <div className="bg-black-10 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="w-full">
          <Label htmlFor="firstName" className="text-sm font-semibold mb-1">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter First Name"
            className="bg-black-12 border-none focus:ring-0 text-white w-full"
          />
        </div>

        {/* Last Name */}
        <div className="w-full">
          <Label htmlFor="lastName" className="text-sm font-semibold mb-1">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            className="bg-black-12 border-none focus:ring-0 text-white w-full"
          />
        </div>

        {/* Email */}
        <div className="col-span-1 md:col-span-2 w-full">
          <Label htmlFor="email" className="text-sm font-semibold mb-1">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your Email"
            className="bg-black-12 border-none focus:ring-0 text-white w-full"
          />
        </div>

        {/* Phone Number */}
        <div className="col-span-1 md:col-span-2 flex gap-2 w-full">
          <Label htmlFor="phoneNumber" className="text-sm font-semibold mb-1">
            Phone Number
          </Label>
          <div className="flex items-center gap-2 w-full">
            <Select>
              <SelectTrigger className="bg-black-12 text-white w-20">
                <SelectContent>
                  <SelectItem value="IN">🇮🇳 +91</SelectItem>
                  <SelectItem value="US">🇺🇸 +1</SelectItem>
                  <SelectItem value="GB">🇬🇧 +44</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter Phone Number"
              className="bg-black-12 border-none focus:ring-0 text-white flex-grow w-full"
            />
          </div>
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2 w-full">
          <Label htmlFor="message" className="text-sm font-semibold mb-1">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Enter your Message"
            className="bg-black-12 border-none focus:ring-0 text-white resize-none w-full"
            rows={4}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-2 w-full">
          <Checkbox id="terms" className="bg-black-12 border-none" />
          <Label htmlFor="terms" className="text-sm text-gray-400">
            I agree with Terms of Use and Privacy Policy
          </Label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center md:justify-end mt-4">
        <Button className="bg-red-600 hover:bg-red-500 px-6 py-3 text-white rounded-md w-full md:w-auto">
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
