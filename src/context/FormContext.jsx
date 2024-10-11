import React, { createContext, useContext, useState } from "react";

// Creating the FormContext
const FormContext = createContext();

// Custom hook to use the FormContext
export const useFormData = () => useContext(FormContext);

// Provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    paymentDetails: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
    nickname: "",
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const clearFormData = () => {
    setFormData({
      email: "",
      phone: "",
      fullName: "",
      paymentDetails: "",
      cardNumber: "",
      expiration: "",
      cvc: "",
      nickname: "",
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};
