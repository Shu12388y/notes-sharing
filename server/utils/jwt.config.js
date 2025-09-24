import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import jwt from "jsonwebtoken";

export const createUserAuthToken = async ({ info }) => {
  try {
    const token = await jwt.sign(info, process.env.USER_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    if (!token) {
      return "Failed to generate token";
    }
    return token;
  } catch (error) {
    return error;
  }
};

export const verifyToken = async ({ token }) => {
  try {
    const decode = await jwt.verify(token, process.env.USER_SECRET);
    return decode
  } catch (error) {
    console.log(error);
    return error;
  }
};
