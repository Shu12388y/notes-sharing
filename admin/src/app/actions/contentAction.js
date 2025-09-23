"use server";

import { revalidatePath } from "next/cache";
import { addContent } from "@/handlers/handlers";

export async function addContentAction(formData) {
  try {
    const name = await formData.get("name");
    const description = await formData.get("description");
    const link = await formData.get("link");
    const content = await formData.get("content");
    const resourceid = await formData.get("resourceid");

    console.log(name,description,link,content,resourceid)
    
    await addContent({
        title:name,
        description:description,
        links:link,
        content:content,
        resourcesid:resourceid
    });
    revalidatePath("/content");
  } catch (error) {
    console.log(error);
  }
}
