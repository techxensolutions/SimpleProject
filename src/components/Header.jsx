import React from "react";
import arrow from "../images/arrow-right-bold.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={arrow}
        alt="back arrow"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
    </div>
  );
}
