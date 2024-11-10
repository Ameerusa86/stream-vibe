import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

interface ReviewCardProps {
  profileImage: string;
  username: string;
  rating: number;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  profileImage,
  username,
  rating,
  reviewText,
}) => {
  return (
    <div className="bg-black-12 p-6 rounded-xl shadow-md w-full max-w-md mx-auto text-white">
      {/* Profile and Username */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={profileImage}
          width={50}
          height={50}
          alt={`${username}'s profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{username}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <HiStar
                key={index}
                className={index < rating ? "text-yellow-400" : "text-gray-400"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm leading-relaxed">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
