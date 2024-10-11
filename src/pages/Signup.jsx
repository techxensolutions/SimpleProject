import React, { useState, useEffect } from "react";
import { useFormData } from "../context/FormContext"; // Updated to use updateFormData
import logo from "../images/logo.png";
import registered from "../images/registered.png";
import round from "../images/round.png";
import tick from "../images/tick.png";
import Button from "../components/Button";

export default function Signup() {
  const { formData, updateFormData } = useFormData(); // Destructure updateFormData from context
  const [email, setEmail] = useState(formData.email || ""); // Initialize with existing data if present
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [error, setError] = useState("");

  // On component load, set the email validity if there's already an email in formData
  useEffect(() => {
    if (validateEmail(email)) {
      setIsValidEmail(true);
    }
  }, [email]);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim().length > 0 && emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Correctly set email value
    if (validateEmail(value)) {
      setIsValidEmail(true);
      setError("");
    } else {
      setIsValidEmail(false);
      setError("Please enter a valid email address");
    }
    // Update the global form data using updateFormData
    updateFormData({ email: value });
  };

  // Handle Signup button click
  const handleSignup = () => {
    if (!email.trim()) {
      setError("Please enter an email address.");
      setIsValidEmail(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address before proceeding.");
      setIsValidEmail(false);
      return;
    }

    setError(""); // Clear any previous errors
    updateFormData({ email }); // Persist email in form data globally
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-[20px]">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="inline-block" />
        <img src={registered} alt="" className="inline-block" />
      </div>
      <p className="text-[#00F04F] text-[28px] font-[700] text-myFont mt-5">
        Welcome to Simple
      </p>
      <p className="text-[12px] font-[400] text-myFont">
        Log in or sign up to get started
      </p>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className={`border rounded-lg py-2 px-4 pr-10 mt-5 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            isValidEmail ? "focus:ring-2 focus:ring-green-500" : "border"
          }`}
        />
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[45px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        {isValidEmail && (
          <img
            src={tick}
            alt="tick"
            className="absolute right-[18px] top-[45px] transform -translate-y-1/2 w-[12px] h-[9.12px]"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Button
        text="Sign up"
        to={isValidEmail ? "/phone" : "#"}
        onClick={handleSignup}
      />
    </div>
  );
}
