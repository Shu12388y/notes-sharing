import axios from "axios";

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