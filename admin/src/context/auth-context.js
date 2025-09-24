"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { verifyHandler } from "@/handlers/auth-handler";

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [checkingAuthorization, setCheckingAuthorization] = useState(true);

  useEffect(() => {
    async function handleAuth() {
      const info = await verifyHandler();
    }
    handleAuth();
  }, []);

  return (
    <>
      <Suspense fallback={<>Loading</>}>
        {checkingAuthorization ? children : "UnAuthorized"}
      </Suspense>
    </>
  );
};
