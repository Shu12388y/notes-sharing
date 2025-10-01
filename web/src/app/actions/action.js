"use server";
import { cookies } from "next/headers";

export const setCookie = async ({ key, value }) => {
  try {
    const cookie = await new cookies();
    await cookie.set(key, value);
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const getCookie = async ({ key }) => {
  try {
    const cookie = await new cookies();
    const info = await cookie.get(key);
    return info;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const deleteCookie = async ({ key }) => {
  try {
    const cookie = await new cookies();
    await cookie.delete(key);
  } catch (error) {
    throw new Error(error.toString());
  }
};
