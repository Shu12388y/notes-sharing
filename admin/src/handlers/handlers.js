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

export const addSubject = async ({ subject }) => {
  try {
    if (!subject || subject.length == 0) {
      return "Subject is required";
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/subject`,
      {
        subject: subject,
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const updateSubject = async ({ subject, subjectid }) => {
  try {
    if (!subject || subject.length == 0) {
      return "Subject is required";
    }
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/subject`,
      { id: subjectid, subject: subject }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteSubject = async ({ subjectid }) => {
  try {
    if (!subjectid || subjectid.length == 0) {
      return "Subject is required";
    }
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/subject/${subjectid}`
    );
    const data = await response.data;
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

export const addResource = async ({ resource, subjectid }) => {
  try {
    if (!resource || subjectid == 0) {
      return "Resource and subjectid is required";
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/resource`,
      {
        resource: resource,
        subjectid: subjectid,
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const updateResource = async ({ resource, resourceid }) => {
  try {
    if (!resource || resourceid == 0) {
      return "Resource and resource id is required";
    }
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/resource`,
      {
        resource: resource,
        id: resourceid,
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteResource = async ({ resourceid }) => {
  try {
    if (!resourceid) {
      return "Resource id is required";
    }
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/resource/${resourceid}`
    );
    const data = await response.data;
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

export const addContent = async ({
  title,
  description,
  links,
  content,
  resourcesid,
}) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("links", links);
    formData.append("content", content);
    formData.append("resourcesid", resourcesid);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/content`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
