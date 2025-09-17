import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
  timestamps:true
});

export const Admin =
  mongoose.models.admins || mongoose.model("admin", adminSchema);
