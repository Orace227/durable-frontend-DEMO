// UserContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a context provider
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    websiteType: "Business",
    businessDescription:
      "Explanation:\nloadingStates: Defines an array of loading steps, each with a text property indicating what each step represents.\nloading: Controls whether the loader is active (true) or not (false).\nduration: Optional prop to adjust how long each step remains visible before moving to the next step.\nloop: Optional prop to determine whether the loader should continuously loop through the steps (true) or stop after reaching the last step (false).",
    businessName: "GlitchAstra",
    logo: {},
  });
  console.log(formData);
  const updateCustomer = (newUserData) => {
    setFormData((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ formData, updateCustomer }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the context
export const useFormData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }

  return context;
};
