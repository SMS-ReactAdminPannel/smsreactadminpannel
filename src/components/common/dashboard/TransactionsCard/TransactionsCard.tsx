import React from "react";
import { FONTS } from "../../../../constants/uiConstants";

type Props = {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  title: string;
  value: number;
  color?: string; // e.g., "text-green-600"
};
//i need to put green and red for icons


// format for india time Zone
const getIndiaDateTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
};

export const TransactionCard: React.FC<Props> = ({
  title,
  icon1,
  icon2,
  value,
  color = "text-green-600", // default if not passed
}) => {
  return (
    <div>
      <div className="flex hover:font-bold hover:rounded-xl hover:mt-2 ">
        <div className="flex bg-[#FAF3EB] w-full rounded-xl shadow-md p-2 justify-between mt-2 ">
          <div className="w-10 h-10 rounded-md flex items-center mr-2 justify-center text-xl">
            {icon1}
          </div>
          <div className="w-full">
            <p className="" style={{...FONTS.cardSubHeader}}>{title}</p>
            <p className=" mt-1" style={{...FONTS.description}}>{getIndiaDateTime()}</p>
          </div>
          <div className={`flex items-center justify-center space-x-1 ${color}`}>
            <div className="text-xl">{icon2}</div>
            <div className="text-lg">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
