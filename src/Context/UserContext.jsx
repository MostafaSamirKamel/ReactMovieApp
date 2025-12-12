import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const user = localStorage.getItem("userData");

    if (token) {
      setUserToken(token);
    }
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  // Login function - save token and user data
  function login(token, user) {
    setUserToken(token);
    setUserData(user);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  // Logout function - clear token and user data
  function logout() {
    setUserToken(null);
    setUserData(null);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  }

  return (
    <UserContext.Provider value={{ userToken, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
