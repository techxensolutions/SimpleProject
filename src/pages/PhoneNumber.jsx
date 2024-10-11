import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import round from "../images/round.png";
import tick from "../images/tick.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useFormData } from "../context/FormContext"; // Importing useFormData hook

export default function PhoneNumber() {
  const { formData, updateFormData } = useFormData(); // Accessing form data and setter
  const [phone, setPhone] = useState(formData.phone || "");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (validatePhone(phone)) {
      setIsValidPhone(true);
    }
  }, [phone]);

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Example regex for valid phone numbers
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (validatePhone(value)) {
      setIsValidPhone(true);
      setError("");
    } else {
      setIsValidPhone(false);
      setError("Please enter a valid phone number (10-15 digits).");
    }
    // Update the global form data using updateFormData
    updateFormData({ phone: value });
  };

  const handleNext = () => {
    if (isValidPhone) {
      updateFormData({ phone }); // Update phone number in form data
    } else {
      setError("Please enter a valid phone number before proceeding.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-[20px]">
      <Header />
      <p className="text-[#6C6C6C] text-[28px] font-[700] text-myFont mt-10">
        Enter your phone number
      </p>
      <p className="text-[12px] font-[400] text-myFont mt-3">
        We’ll only use this to securely log you in and manage your account.
      </p>
      <div className="relative">
        <input
          type="number"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
          className={`border rounded-lg py-2 px-4 pr-10 mt-5 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            isValidPhone ? "focus:ring-2 focus:ring-green-500" : "border"
          }`}
        />
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[45px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        {isValidPhone && (
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
        to={isValidPhone ? "/name" : "#"}
        onClick={handleNext}
      />{" "}
      <Footer />
    </div>
  );
}
