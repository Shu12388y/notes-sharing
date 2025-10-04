import { Admin } from "../schema/admin-schema.js";
import { createUserAuthToken, verifyToken } from "../utils/jwt.config.js";
import { connectDB } from "../utils/db.js";
import bcrypt from "bcryptjs";
export class AdminController {
  static async SignUp(req, res) {
    try {
      await connectDB();
      const data = await req.body;
      const { email, password } = await data;
      if (!email || !password) {
        return res.status(400).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isAdminExists = await Admin.find({
        email: email,
      });

      if (isAdminExists.length > 0) {
        return res.status(401).json({ message: "Admin already exists" });
      }

      if (isAdminExists.length == 0) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const createNewUser = await new Admin({
          email: email,
          password: hashedPassword,
        });
        await createNewUser.save();
      }

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
       return res.status(404).json({ message: "All field are required" });
      }

      // check whether user exist or not
      const isAdminExists = await Admin.find({
        email: email,
      });

      if (!isAdminExists || isAdminExists.length == 0) {
        return res.status(401).json({ message: "User not exists" });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        isAdminExists[0].password
      );

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      const info = {
        userid: isAdminExists[0]._id,
        email: isAdminExists[0].email,
      };
      // send JWT token
      const token = await createUserAuthToken({
        info: info,
      });

     
      return res.status(200).json({ message: "Success",token:token });
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
       return res.status(404).json({ message: "All field are required" });
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

  static async VerifyAuth(req,res){
    try {
        
    } catch (error) {
        
    }
  }
}
