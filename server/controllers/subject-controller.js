import { Subject } from "../schema/resource-schema.js";

export class SubjectController {
  // create subject
  static async createSubject(req, res) {
    try {
      const data = await req.body;
      const { subject } = await data;
      if (!subject) {
        return res.status(404).json({ message: "subject name is requried" });
      }

      const isSubjectExists = await Subject.find({
        name: subject,
      });

      if (isSubjectExists.length == 1) {
        return res.status(402).json({ message: "Subject already exists" });
      }
      const createNewSubject = await new Subject({
        name: subject,
      });

      await createNewSubject.save();
      return res.status(201).json({ message: "Success" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //update subject
  static async updateSubject(req, res) {
    try {
      const data = await req.body;
      const { id, subject } = await data;
      if (!id) {
        return res.status(404).json({ message: "subject id is requried" });
      }

      const isSubjectExists = await Subject.findById(id);

      if (!isSubjectExists) {
        return res.status(402).json({ message: "Subject not exists" });
      }

      await Subject.findByIdAndUpdate(id, {
        name: subject,
      });

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // delete the subject
  static async deleteSubject(req, res) {
    try {
      const params  = await req.params;
      if (!params.id) {
        return res.status(404).json({ message: "subject id is requried" });
      }

      const isSubjectExists = await Subject.findById(params.id);

      if (!isSubjectExists) {
        return res.status(402).json({ message: "Subject not exists" });
      }

      await Subject.findByIdAndDelete(params.id);

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // get all subject
  static async getAllSubjects(_req, res) {
    try {
      const subjects = await Subject.find({});
      if (subjects.length == 0) {
        return res.status(200).json({ message: "Success", data: [] });
      }
      return res.status(200).json({ message: "Success", data: subjects });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //   get the subject
  static async getSubjects(req, res) {
    try {
      const params = await req.params;
      if(!params.id){
        return res.status(404).json({message:"Subject id is required"})
      }
      const subjects = await Subject.findById(params.id);
      if (!subjects) {
        return res.status(200).json({ message: "Success", data: {} });
      }
      return res.status(200).json({ message: "Success", data: subjects });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
