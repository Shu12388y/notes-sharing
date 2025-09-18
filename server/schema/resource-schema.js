import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const resourcesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subjectID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
    },
  },
  {
    timestamps: true,
  }
);

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    time: {
      type: String,
    },
    description: {
      type: String,
    },
    links: {
      type: String,
    },
    content: {
      type: String,
    },
    resourcesID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "resources",
    },
  },
  {
    timestamps: true,
  }
);

export const Subject =
  mongoose.models.subjects || mongoose.model("subject", subjectSchema);
export const Resource =
  mongoose.models.resources || mongoose.model("resource", resourcesSchema);
export const Content =
  mongoose.models.contents || mongoose.model("content", contentSchema);
