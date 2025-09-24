import { verifyToken } from "../utils/jwt.config.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const info = await req.cookies;
    // if (!info) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }
    console.log(info);
    // verify cookie

    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
};
