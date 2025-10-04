import { User } from "../schema/auth-schema.js";
import { createUserAuthToken } from "../utils/jwt.config.js";
import bcrypt from "bcryptjs";
import { connectDB } from "../utils/db.js";
export class UserController {
  static async SignUp(req, res) {
    try {
      await connectDB();
      const data = await req.body;
      const { fullname, email, password, contact, yop, branch } = await data;
      if (!fullname || !email || !password || !contact || !yop || !branch) {
        res.status(404).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isUserExists = await User.find({
        email: email,
      });

      if (isUserExists.length >= 1) {
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
      await connectDB();
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
        return res.status(401).json({ message: "Incorrect password" });
      }

      const info = {
        userid: isUserExists[0]._id,
        email: isUserExists[0].email,
      };
      // send JWT token
      const token = await createUserAuthToken({
        info: info,
      });

      return res.status(201).json({ message: "Success",token:token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async forgetPassword(req, res) {
    try {
      await connectDB();
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

