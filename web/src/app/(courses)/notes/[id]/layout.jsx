"use client";
import React from "react";
import { useAuth } from "@/context/auth-context";
import UnauthorizedPage from "@/components/unauthorized";

function layout({ children }) {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? children : <UnauthorizedPage />}</>;
}

export default layout;
