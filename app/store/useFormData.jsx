// UserContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a context provider
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
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
