import axios from "axios";

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/analysis`
    );
    const data = await response.data.message;
    return data;
  } catch (error) {
    return error;
  }
};
