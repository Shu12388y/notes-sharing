import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "@/app/actions/action";

export const fetchSubjects = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects`
    );
    const data = await response.data.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchResources = async ({ subjectid }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/resources/${subjectid}`
    );
    const data = await response.data.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchContents = async ({ resourceid }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/contents/${resourceid}`
    );
    const data = await response.data.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const signUpHandler = async ({ userinfo }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signup`,
      userinfo
    );
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signInHandler = async ({ userinfo }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signin`,
      userinfo
    );
    const data = await response.data;
    await setCookie({
      key: "usertoken",
      value: data.token,
    });
    return data.message;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const checkUserisLoggedIN = async () => {
  try {
    const info = await getCookie({ key: "usertoken" });
    if (info) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const downloadContents = async ({ id }) => {
  try {
    const getUserHeader = await getCookie({
      key: "usertoken",
    });
    if (!getUserHeader) {
      throw new Error("UnAuthorized");
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/download/${id}`,
      {
        headers: {
          Authorization: getUserHeader,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const loggOutUser = async () => {
  try {
    const isUserAuthorized = await getCookie({
      key: "usertoken",
    });
    if (!isUserAuthorized) {
      return;
    }
    await deleteCookie({
      key: "usertoken",
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
