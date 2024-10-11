import React, { useState } from "react";
import Header from "../components/Header";
import round from "../images/round.png";
import tick from "../images/tick.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useFormData } from "../context/FormContext"; // Importing the useFormData hook

export default function BillingAddress() {
  const { formData, setFormData } = useFormData(); // Accessing form data and setter
  const [address, setAddress] = useState({
    fullName: formData.fullName || "",
    country: formData.country || "",
    address1: formData.address1 || "",
    address2: formData.address2 || "",
    city: formData.city || "",
    zip: formData.zip || "",
    state: formData.state || "",
  });

  const [errors, setErrors] = useState({}); // State for form validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!address.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!address.country) newErrors.country = "Please select a country.";
    if (!address.address1.trim())
      newErrors.address1 = "Address Line 1 is required.";
    if (!address.city.trim()) newErrors.city = "City is required.";
    if (!address.zip.trim()) newErrors.zip = "ZIP code is required.";
    if (!address.state) newErrors.state = "Please select a state.";
    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setFormData({ ...formData, ...address }); // Save the form data if no errors
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-[10px] mt-[50px]">
      <Header />
      <p className="text-[#6C6C6C] text-[28px] font-[700] text-myFont mt-10">
        Add a billing address
      </p>
      <div className="relative">
        <input
          type="text"
          name="fullName"
          value={address.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={`border rounded-lg py-2 px-4 pr-10 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            errors.fullName
              ? "border-red-500"
              : "focus:ring-2 focus:ring-green-500"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[25px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        <img
          src={tick}
          alt="tick"
          className="absolute right-[18px] top-[25px] transform -translate-y-1/2 w-[12px] h-[9.12px]"
        />
      </div>
      <select
        name="country"
        value={address.country}
        onChange={handleChange}
        className={`border rounded-lg py-2 px-4 mt-2 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
          errors.country
            ? "border-red-500"
            : "focus:ring-2 focus:ring-green-500"
        }`}
      >
        <option value="">Country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="China">China</option>
        <option value="Turkey">Turkey</option>
        <option value="Japan">Japan</option>
      </select>
      {errors.country && (
        <p className="text-red-500 text-sm">{errors.country}</p>
      )}
      <div className="relative">
        <input
          type="text"
          name="address1"
          value={address.address1}
          onChange={handleChange}
          placeholder="Address Line 1"
          className={`border rounded-lg py-2 px-4 pr-10 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            errors.address1
              ? "border-red-500"
              : "focus:ring-2 focus:ring-green-500"
          }`}
        />
        {errors.address1 && (
          <p className="text-red-500 text-sm">{errors.address1}</p>
        )}
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[25px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        <img
          src={tick}
          alt="tick"
          className="absolute right-[18px] top-[25px] transform -translate-y-1/2 w-[12px] h-[9.12px]"
        />
      </div>
      <div className="relative">
        <input
          type="text"
          name="address2"
          value={address.address2}
          onChange={handleChange}
          placeholder="Address Line 2"
          className="border rounded-lg py-2 px-4 pr-10 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <img
          src={round}
          alt="round"
          className="absolute right-3 top-[25px] transform -translate-y-1/2 w-[23px] h-[23px]"
        />
        <img
          src={tick}
          alt="tick"
          className="absolute right-[18px] top-[25px] transform -translate-y-1/2 w-[12px] h-[9.12px]"
        />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="City"
          className={`border rounded-lg py-2 px-4 pr-10 w-[160px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
            errors.city ? "border-red-500" : "focus:ring-2 focus:ring-green-500"
          }`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

        <div className="relative">
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleChange}
            placeholder="ZIP"
            className={`border rounded-lg py-2 px-4 pr-10 w-[160px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
              errors.zip
                ? "border-red-500"
                : "focus:ring-2 focus:ring-green-500"
            }`}
          />
          {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
        </div>
      </div>
      <select
        name="state"
        value={address.state}
        onChange={handleChange}
        className={`border rounded-lg py-2 px-4 mt-2 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none ${
          errors.state ? "border-red-500" : "focus:ring-2 focus:ring-green-500"
        }`}
      >
        <option value="">State</option>
        <option value="Sindh">Sindh</option>
        <option value="Punjab">Punjab</option>
        <option value="KPK">KPK</option>
        <option value="Balochistan">Balochistan</option>
      </select>
      {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      <Button
        text="Next"
        to={Object.keys(errors).length === 0 ? "/paymentMethod" : "#"}
        onClick={handleNext}
      />
      <Footer />
    </div>
  );
}
