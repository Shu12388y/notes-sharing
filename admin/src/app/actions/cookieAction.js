"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const cookieAction = async ({ token }) => {
  const cookie = await new cookies();
  await cookie.set("admintoken", token);
};

export const getCookieAction = async () => {
  try {
    const cookie = await new cookies();
    const token = await cookie.get("admintoken");
    await new Promise((resolve, reject) => {
      if (token.value) {
        const res = jwt.verify(
          token.value,
          process.env.JWT_SECRET
        );
        resolve(res);
      } else {
        reject("Failed");
      }
    });
    return true;
  } catch (error) {
    throw new Error(error.toString());
  }
};
