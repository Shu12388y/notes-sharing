import axios from "axios";
import { cookieAction, getCookieAction } from "@/app/actions/cookieAction";


export const siginHandler = async ({ email, password }) => {
  try {
    const info = {
      email,
      password,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin-signin`,
      info
    );
    const data = await response.data;
    cookieAction({
      token: data.token,
    });
    return data.message;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const verifyHandler = async () => {
  try {
    const token = await getCookieAction();
    return token
  } catch (error) {
    throw new Error(error)
  }
};
