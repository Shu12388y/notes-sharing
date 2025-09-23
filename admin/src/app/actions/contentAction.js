"use server";

import { revalidatePath } from "next/cache";
import { addContent } from "@/handlers/handlers";

export async function addContentAction(formData) {
  try {
    const title = formData.get("name");
    const description = formData.get("description");
    const link = formData.get("link");
    const content = formData.get("content");
    const resourceid = formData.get("resourceid");

    console.log(name, description, link, content, resourceid);

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
