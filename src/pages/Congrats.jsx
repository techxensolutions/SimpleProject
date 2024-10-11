import React from "react";
import background from "../images/CompleteBackground.svg";
import bigRound from "../images/bigRound.png";
import Button from "../components/Button";
import autofill from "../images/autofill.png";
export default function Congrats() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative text-end">
        <img
          src={bigRound}
          alt="rectangle"
          className="absolute right-[50px] top-[9px] transform -translate-y-1/2 w-[56.5px] h-[56.5px]"
        />

        <p className="text-[#00F04F] text-[28px] font-[400] text-myFont mt-14">
          You’re all set
        </p>
      </div>
      <p className="text-[#000000] text-[18px] font-[400] text-myFont mt-14 mb-10">
        You can now pay with 1-click wherever you see the <br /> Simple logo
        across thousands of online businesses.
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Email"
          className="border rounded-lg bg-[#F5F5F5] py-2 px-4 pr-10 mb-20 mt-5 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <img
          src={autofill}
          alt="round"
          className="absolute right-3 top-[45px] transform -translate-y-1/2 w-[87px] h-[24px]"
        />
      </div>

      <Button text="Done" to="#" />
    </div>
  );
}
