import { verifyToken } from "../utils/jwt.config.js";
import { User } from "../schema/auth-schema.js";
import { connectDB } from "../utils/db.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    await connectDB();
    const info = await req.cookies;
    // if (!info) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }
    console.log(info);
    // verify cookie

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const userMiddleware = async (req, res, next) => {
  try {
    await connectDB()
    const authHeader = await req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userInfo = await verifyToken({
      token: authHeader,
    });

    if (!userInfo) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const isUserExist = await User.findById(userInfo.userid);
    if (!isUserExist) {
      return res.status(401).json({ message: "UNAUTHORIZED" });
    }
    req.userInfo = userInfo;
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.toString() });
  }
};
