import { Resource } from "../schema/resource-schema.js";

export class ResourceController {
  static async createResource(req, res) {
    try {
      const data = await req.body;
      const { resource, subjectid } = await data;
      if (!resource || !subjectid) {
        return res
          .status(404)
          .json({ message: "Resource and subject id is required" });
      }

      const isResourceExists = await Resource.find({
        name: resource,
      });

      if (isResourceExists.length == 1) {
        return res.status(404).json({ message: "Resource already exists" });
      }

      const createNewResource = await new Resource({
        name: resource,
        subjectID: subjectid,
      });

      await createNewResource.save();
      return res.status(201).json({ message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  }

  static async updateResource(req, res) {
    try {
      const data = await req.body;
      const { resource, id } = await data;
      if (!resource || !id) {
        return res.status(404).json({ message: "Resource  is required" });
      }

      const isResourceExists = await Resource.findById(id);

      if (!isResourceExists) {
        return res.status(404).json({ message: "Resource not exists" });
      }

      await Resource.findByIdAndUpdate(id, {
        name: resource,
      });

      return res.status(201).json({ message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  }

  static async deleteResource(req, res) {
    try {
      const params = await req.params;
      const { id } = await params;
      if (!id) {
        return res.status(404).json({ message: "Resource id is required" });
      }

      const isResourceExists = await Resource.findById(id);

      if (!isResourceExists) {
        return res.status(404).json({ message: "Resource not exists" });
      }

      await Resource.findByIdAndDelete(id);
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  }

  static async getAllResource(_req, res) {
    try {
      const resources = await Resource.find({});
      if (resources.length == 0) {
        return res.status(200).json({ message: "success", data: [] });
      }
      return res.status(200).json({ message: "success", data: resources });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  }

  static async getResource(req, res) {
    try {
      const params = await req.params;
      const { id } = await params;
      const resources = await Resource.findById(id);
      if (resources.length == 0) {
        return res.status(200).json({ message: "success", data: {} });
      }
      return res.status(200).json({ message: "success", data: resources });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  }

  static async getResourceBySubjectID(req, res) {
    try {
      const params = await req.params;
      const { id } = await params;
      if (!id) {
        return res.status(404).json({ message: "Subject ID is required" });
      }
      const resources = await Resource.find({
        subjectID: id,
      });

      if (resources.length == 0) {
        return res.status(200).json({ message: "success", data: [] });
      }
      return res.status(200).json({ message: "success", data: resources });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
