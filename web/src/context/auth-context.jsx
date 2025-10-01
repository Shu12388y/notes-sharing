import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  handleIslogin:()=>{}
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context is required");
  }
  return context;
};
