import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import round from "../images/round.png";
import tick from "../images/tick.png";
import rectangle from "../images/rectangle.png";
import smallTick from "../images/smallTick.png";

export default function PaymentMethod() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const [nickname, setNickname] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Basic validation
    if (!cardNumber) validationErrors.cardNumber = "Card number is required.";
    if (!expiration)
      validationErrors.expiration = "Expiration date is required.";
    if (!cvc) validationErrors.cvc = "CVC is required.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      console.log("Card Details Submitted", {
        cardNumber,
        expiration,
        cvc,
        nickname,
      });

      // Clear the form fields
      setCardNumber("");
      setExpiration("");
      setCvc("");
      setNickname("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-[50px]">
      <Header />
      <p className="text-[#6C6C6C] text-[28px] font-[700] text-myFont mt-10 mb-5">
        Add a payment method
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="relative mb-0">
          <input
            type="text"
            placeholder="Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className={`border rounded-t-lg py-2 px-4 pr-10 w-[331px] h-[50px] text-[16px] text-[400] text-[#6C6C6C] focus:outline-none focus:ring-2 ${
              errors.cardNumber ? "border-red-500" : "focus:ring-green-500"
            }`}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber}</p>
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
        <div className="grid grid-cols-2 mb-2 border rounded-b-lg w-[331px] h-[50px]">
          <input
            type="text"
            placeholder="Expiration"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            className={`border-r-[1px] py-2 px-4 text-[#6C6C6C] focus:outline-none focus:ring-2 ${
              errors.expiration ? "border-red-500" : "focus:ring-green-500"
            }`}
          />
          {errors.expiration && (
            <p className="text-red-500 text-sm">{errors.expiration}</p>
          )}
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className={`py-2 px-4 text-[#6C6C6C] focus:outline-none focus:ring-2 ${
              errors.cvc ? "border-red-500" : "focus:ring-green-500"
            }`}
          />
          {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
        </div>

        <div className="relative text-end">
          <img
            src={rectangle}
            alt="rectangle"
            className="absolute right-[88px] top-[9px] transform -translate-y-1/2 w-[11px] h-[11px]"
          />
          <img
            src={smallTick}
            alt="tick"
            className="absolute right-[90px] top-[9px] transform -translate-y-1/2 w-[6px] h-[5px]"
          />
          <p className="text-[#000000] text-[12px] font-[700] text-myFont mb-2">
            Save as default
          </p>
        </div>

        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Nickname (optional)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
        <Button text="Save card" to="/congrats" type="submit" />
      </form>
      <Footer />
    </div>
  );
}
