"use client";

import { AuthContext } from "@/context/auth-context";
import { useState, useEffect } from "react";
import { checkUserisLoggedIN } from "@/handlers/handlers";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true); // track loading
  const router = useRouter();

  useEffect(() => {
    async function checkUserLogINInfo() {
      try {
        const info = await checkUserisLoggedIN();
        setIsLoggedIn(!!info);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setChecking(false);
      }
    }
    checkUserLogINInfo();
  }, [router]);

  const handleIslogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const info = { isLoggedIn, handleIslogin };

  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
