"use server";
import { cookies } from "next/headers";

export const cookieAction = async ({ token }) => {
  const cookie = await new cookies();
  await cookie.set("admintoken", token);
};

export const getCookieAction = async () => {
  const cookie = await new cookies();
  const token = await cookie.get("admintoken");
  return token ? token : "";
};
