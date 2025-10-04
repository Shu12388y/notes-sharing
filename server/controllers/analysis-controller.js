import { User } from "../schema/auth-schema.js";
import { connectDB } from "../utils/db.js";
export class AnalysisController {
  static async getAllUsers(req, res) {
    try {
      await connectDB();

      const isUsersExists = await User.find({}).select(
        "email fullname contact yearofPassing branch"
      );

      return res.status(200).json({ message: isUsersExists });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
