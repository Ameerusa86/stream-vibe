import React from "react";

interface DeviceCardProps {
  deviceType: string;
  icon: React.ReactNode;
}

const DeviceCard = ({ deviceType, icon }: DeviceCardProps) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[513px] lg:h-full bg-gradient-to-tr from-black-12 from-10% via-red-45 via-30% to-black-15 to-50% rounded-xl ring-black-15 ring-2 p-12 relative">
      <div className="flex items-center justify-start gap-3">
        <div>{icon}</div>
        <h1>{deviceType}</h1>
      </div>
      <p className="mt-5">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
};

export default DeviceCard;
