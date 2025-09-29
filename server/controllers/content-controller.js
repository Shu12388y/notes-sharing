import { Content } from "../schema/resource-schema.js";
import { uploadHelper } from "../utils/imagekit.config.js";
import axios from "axios";

export class ContentController {
  static async createContent(req, res) {
    try {
      const data = await req.body;
      const file = await req.files;
      const { title, description, links, resourcesid } = data;
      const { content } = file;
      if (!title || !description || !content || !resourcesid) {
        return res.status(404).json({ message: "Requried field are empty" });
      }

      const timeStamp = new Date().toLocaleDateString().toString();

      const info = await uploadHelper({
        file: content.data,
        filename: content.name,
      });

      const createNewContent = await new Content({
        title: title,
        description: description,
        time: timeStamp,
        links: links.length === 0 ? "" : links,
        content: info,
        resourcesID: resourcesid,
      });

      await createNewContent.save();

      return res.status(201).json({ message: "Success" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //update subject
  static async updateContent(req, res) {
    try {
      const data = await req.body;
      const file = await req.files;
      const { id, title, description, links, prevContent } = data;
      const { content } = file;
      if (!title || !description || !content || !id) {
        return res.status(404).json({ message: "Requried field are empty" });
      }

      const isContentExists = await Content.findById(id);

      if (!isContentExists) {
        return res.status(402).json({ message: "Subject not exists" });
      }

      if (prevContent) {
        await Content.findByIdAndUpdate(id, {
          title,
          description,
          links,
          content: prevContent,
        });
      } else {
        const info = await uploadHelper({
          file: content.data,
          filename: content.name,
        });

        await Content.findByIdAndUpdate(id, {
          title,
          description,
          links,
          content: info,
        });
      }

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // delete the subject
  static async deleteContent(req, res) {
    try {
      const params = await req.params;
      if (!params.id) {
        return res.status(404).json({ message: "subject id is requried" });
      }

      const isContentExists = await Content.findById(params.id);

      if (!isContentExists) {
        return res.status(402).json({ message: "Subject not exists" });
      }

      await Content.findByIdAndDelete(params.id);

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // get all subject
  static async getAllContents(_req, res) {
    try {
      const contents = await Content.find({});
      if (contents.length == 0) {
        return res.status(200).json({ message: "Success", data: [] });
      }
      return res.status(200).json({ message: "Success", data: contents });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  //   get the subject
  static async getContent(req, res) {
    try {
      const params = await req.params;
      if (!params.id) {
        return res.status(404).json({ message: "Subject id is required" });
      }
      const contents = await Content.findById(params.id);
      if (!contents) {
        return res.status(200).json({ message: "Success", data: {} });
      }
      return res.status(200).json({ message: "Success", data: contents });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getContentsByResource(req, res) {
    try {
      const params = await req.params;
      const { id } = await params;
      const contents = await Content.find({
        resourcesID: id,
      });
      if (contents.length == 0) {
        return res.status(200).json({ message: "Success", data: [] });
      }
      return res.status(200).json({ message: "Success", data: contents });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  static async downloadContent(req, res) {
    try {

      // get the content info
      const contentId = await req.params;
      const {id} = await contentId;
      if(!id){
        return res.status(401).json({message:"resource id is required"});
      }

      const isContentExists = await Content.findById(id)
      
      if(!isContentExists){
        return res.status(404).json({message:"Content not exists"});
      }

      const response = await axios({
        url: isContentExists.content,
        method: "GET",
        responseType: "stream",
      });

      res.setHeader("Content-Disposition", "attachment; filename=resource.pdf");
      return response.data.pipe(res);
    } catch (error) {
      return res.status(500).json({message:"Internal Server Error"})
    }
  }
}
