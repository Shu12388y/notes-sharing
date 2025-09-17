import { User } from "../schema/auth-schema";
import bcrypt from "bcryptjs";
export class UserController {
  static async SignUp(req, res) {
    try {
      const data = await req.body;
      const { fullname, email, password, contact, yop, branch } = await data;
      if (!fullname || !email || !password || !contact || !yop || !branch) {
        res.status(404).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isUserExists = await User.find({
        email: email,
      });

      if (isUserExists.length > 1) {
        return res.status(401).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const createNewUser = await new User({
        email: email,
        fullname: fullname,
        password: hashedPassword,
        contact: contact,
        yearofPassing: yop,
        branch: branch,
      });
      await createNewUser.save();
      return res.status(201).json({ message: "Success" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async SignIN(req, res) {
    try {
      const data = await req.body;
      const { email, password } = await data;
      if (!email || !password) {
        res.status(404).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isUserExists = await User.find({
        email: email,
      });

      if (!isUserExists || isUserExists.length == 0) {
        return res.status(401).json({ message: "User not exists" });
      }

      const hashedPassword = await bcrypt.compare(
        password,
        isUserExists[0].password
      );

      if (!hashedPassword) {
        return res.json(402).json({ message: "Incorrect password" });
      }

      // send JWT token

      return res.status(201).json({ message: "Success" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async forgetPassword(req, res) {
    try {
      const data = await req.body;
      const { email, password } = await data;
      if (!email || !password) {
        res.status(404).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isUserExists = await User.find({
        email: email,
      });

      if (isUserExists) {
        return res.status(401).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const createNewUser = await new User({
        email: email,
        fullname: fullname,
        password: hashedPassword,
        contact: contact,
        yearofPassing: yop,
        branch: branch,
      });
      await createNewUser.save();
      return res.status(201).json({ message: "Success" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
