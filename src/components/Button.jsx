import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ text, to, type = "button" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className="bg-[#00F04F] text-white rounded-3xl w-[331px] h-[50px] text-[18px] text-[700] font-myFont"
    >
      {text}
    </button>
  );
}
