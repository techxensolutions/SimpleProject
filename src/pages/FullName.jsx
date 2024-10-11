import React, { useEffect, useState } from "react";
import round from "../images/round.png";
import tick from "../images/tick.png";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useFormData } from "../context/FormContext";

export default function FullName() {
  const { formData, updateFormData } = useFormData(); // Accessing form data and setter
  const [fullName, setFullName] = useState(formData.fullName || "");
  const [isValidName, setIsValidName] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (validateName(fullName)) {
      setIsValidName(true);
    }
  }, [fullName]);

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only alphabets and spaces
    return name.trim().length > 0 && nameRegex.test(name); // Check if the name is not empty and contains only alphabets
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (validateName(value)) {
      setIsValidName(true);
      setError("");
    } else {
      setIsValidName(false);
      setError("Please enter your full legal name.");
    }
    // Update the global form data using updateFormData
    updateFormData({ fullName: value });
  };

  const handleNext = () => {
    if (isValidName) {
      updateFormData({ fullName }); // Update full name in the form data
    } else {
      setError("Please enter your full legal name before proceeding.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-[20px]">
      <Header />
      <p className="text-[#6C6C6C] text-[28px] font-[700] text-myFont mt-10">
        Enter your full name
      </p>
      <p className="text-[12px] font-[400] text-myFont mt-3">
        For account security, please use your full legal name.
      </p>
      <div className="relative">
        <input
          type="text"
          value={fullName}
          onChange={handleNameChange}
          placeholder="Full Name"
          className={`border rounded-lg py-2 px-4 pr-10 mt-5 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            isValidName ? "focus:ring-2 focus:ring-green-500" : "border"
          }`}
          required
        />
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[45px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        {isValidName && (
          <img
            src={tick}
            alt="tick"
            className="absolute right-[18px] top-[45px] transform -translate-y-1/2 w-[12px] h-[9.12px]"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Button
        text="Next"
        to={isValidName ? "/verifyPhone" : "#"}
        onClick={handleNext}
      />
      <Footer />
    </div>
  );
}
