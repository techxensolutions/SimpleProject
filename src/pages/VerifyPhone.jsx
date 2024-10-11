import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import round from "../images/round.png";
import tick from "../images/tick.png";
import { useNavigate } from "react-router-dom";

export default function VerifyPhone() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-[20px]">
      <Header />
      <p className="text-[#6C6C6C] text-[28px] font-[700] text-myFont mt-10">
        Verify your phone number
      </p>
      <p className="text-[12px] font-[400] text-myFont mt-1">
        Enter the code sent to (•••) ••• ••49
      </p>
      <div className="flex items-center justify-center gap-[5px] mt-6">
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
        <div className="h-[50px] w-[50px] border-[1px] border-[#ADADAD] rounded-md text-center text-[#ADADAD] text-[30px]">
          •
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="relative">
          <img src={round} alt="round" className="w-[23px] h-[23px]" />
          <img
            src={tick}
            alt="tick"
            className="absolute inset-0 m-auto w-[12px] h-[9.12px]"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/BillingAddress")}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
