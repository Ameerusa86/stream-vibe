// components/PricingTable.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";

const PricingTable = () => {
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full bg-black-10 border border-black-20 rounded-lg">
        <thead className=" bg-black-06">
          <tr>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300">
              Features
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">
              Basic
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white relative">
              Standard
              <div className="absolute -top-3 -right-2">
                <Badge variant="destructive" className="text-xs px-2 py-1 mt-5">
                  Popular
                </Badge>
              </div>
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">
              Premium
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-center">
          <tr className="border-t border-gray-700">
            <td className="px-4 py-3 text-gray-400">Price</td>
            <td className="px-4 py-3 text-white">$9.99/Month</td>
            <td className="px-4 py-3 text-white">$12.99/Month</td>
            <td className="px-4 py-3 text-white">$14.99/Month</td>
          </tr>

          {/* Other rows */}
          <tr className="border-t border-gray-700">
            <td className="px-4 py-3 text-gray-400">Content</td>
            <td className="px-4 py-3 text-gray-300">
              Access to a wide selection of movies and shows, including some new
              releases.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Access to the widest selection of movies and shows, including all
              new releases and Offline Viewing.
            </td>
          </tr>

          <tr className="border-t border-gray-700">
            <td className="px-4 py-3 text-gray-400">Devices</td>
            <td className="px-4 py-3 italic text-gray-400">
              Watch on one device simultaneously
            </td>
            <td className="px-4 py-3 italic text-gray-400">
              Watch on two devices simultaneously
            </td>
            <td className="px-4 py-3 italic text-gray-400">
              Watch on four devices simultaneously
            </td>
          </tr>

          <tr className="border-t border-gray-700">
            <td className="px-4 py-3 text-gray-400">Free Trial</td>
            <td className="px-4 py-3 text-white">7 Days</td>
            <td className="px-4 py-3 text-white">7 Days</td>
            <td className="px-4 py-3 text-white">7 Days</td>
          </tr>

          {/* Additional rows */}
          <tr className="border-t border-gray-700">
            <td className="px-4 py-3 text-gray-400">Cancel Anytime</td>
            <td className="px-4 py-3 text-white">Yes</td>
            <td className="px-4 py-3 text-white">Yes</td>
            <td className="px-4 py-3 text-white">Yes</td>
          </tr>

          {/* Complete the remaining rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
