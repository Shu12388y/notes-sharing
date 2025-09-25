"use client";

import { AuthContext } from "@/context/auth-context";
import { useState, useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // fetch the user info and check it verified or not

  let info = {
    isLoggedIn,
  };

  return (
    <>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </>
  );
};
