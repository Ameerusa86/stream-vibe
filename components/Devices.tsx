import React from "react";
import Wrapper from "./Wrapper";
import DeviceCard from "./Cards/DeviceCard";
import { FaMobileScreen, FaTablet, FaTv, FaLaptop } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";

const Devices = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="text-4xl font-bold mb-4">
          We Provide you streaming experience across various devices.{" "}
        </h1>
        <p className="font-normal text-lg">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.{" "}
        </p>
        <div className="mt-20 flex flex-wrap gap-4 w-full">
          <DeviceCard
            deviceType="Smartphone"
            icon={<FaMobileScreen size={20} />}
          />
          <DeviceCard deviceType="Tablet" icon={<FaTablet size={20} />} />
          <DeviceCard deviceType="Smart TV" icon={<FaTv size={20} />} />
          <DeviceCard deviceType="Laptops" icon={<FaLaptop size={20} />} />
          <DeviceCard
            deviceType="Gaming Cpnsoles"
            icon={<IoGameController size={20} />}
          />
          <DeviceCard
            deviceType="VR Headsets"
            icon={<BsHeadsetVr size={20} />}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Devices;
