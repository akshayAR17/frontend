// LoginDetailsProvider.jsx
import React, { createContext, useState } from "react";

export const LoginDetailsContext = createContext(null);

const LoginDetailsProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);

  return (
    <LoginDetailsContext.Provider
      value={{ loginData, setLoginData, employeeData, setEmployeeData }}
    >
      {children}
    </LoginDetailsContext.Provider>
  );
};

export default LoginDetailsProvider;
