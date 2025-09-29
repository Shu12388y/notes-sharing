"use server";

import { revalidatePath } from "next/cache";
import { addContent, deleteContent, updateContent } from "@/handlers/handlers";

export async function addContentAction(formData) {
  try {
    const title = formData.get("name");
    const description = formData.get("description");
    const link = formData.get("link");
    const content = formData.get("content");
    const resourceid = formData.get("resourceid");

    await addContent({
      title: title,
      description: description,
      links: link,
      content: content,
      resourcesid: resourceid,
    });
    revalidatePath("/content");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add content. Please try again.");
  }
}

export async function updateContentAction(formData) {
  try {
    const id = formData.get("id");
    const title = formData.get("name");
    const description = formData.get("description");
    const link = formData.get("link");
    const content = formData.get("content");
    const prevContent = formData.get("prevContent");

    await updateContent({
      contentid: id,
      content: content,
      description: description,
      links: link,
      title: title,
      prevContent: prevContent,
    });
    revalidatePath("/content")
  } catch (error) {
    throw new Error(error.toString())
  }
}

export async function deleteContentAction(formData) {
  try {
    const contentid = formData.get("contentid");
    await deleteContent({
      contentid: contentid,
    });
    revalidatePath("/content");
  } catch (error) {
    throw new Error("Failed to add content. Please try again.");
  }
}
