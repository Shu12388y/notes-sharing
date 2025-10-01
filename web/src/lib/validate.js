import toast from "react-hot-toast";

export const checkUserInfo = ({ userinfo }) => {
  if (
    !userinfo ||
    !userinfo.email ||
    userinfo.email.trim().length === 0 ||
    !userinfo.email.includes("@")
  ) {
    toast.error("Invalid email");
    return false;
  }

  if (!userinfo || !userinfo.password || userinfo.password.trim().length < 9) {
    toast.error("Password must be at least 9 characters long");
    return false;
  }

  if (!userinfo || !userinfo.branch || userinfo.branch.trim().length === 0) {
    toast.error("Invalid college branch");
    return false;
  }

  if (!userinfo || !userinfo.yop || userinfo.yop.trim().length !== 4) {
    toast.error("Invalid Year of Passout");
    return false;
  }

  if (!userinfo || !userinfo.contact || userinfo.contact.trim().length !== 10) {
    toast.error("Invalid Contact Number");
    return false;
  }

  return true;
};
