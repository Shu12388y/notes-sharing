"use server";

import { revalidatePath } from "next/cache";
import {
  addResource,
  updateResource,
  deleteResource,
} from "@/handlers/handlers";

export async function addResourceAction(formData) {
  try {
    const resource = await formData.get("resource");
    const subjectid = await formData.get("subjectid");
    if (!resource || !subjectid) {
      throw new Error("resource and subject id is required");
    }
    await addResource({
      resource: resource,
      subjectid: subjectid,
    });
    revalidatePath("/resource");
  } catch (error) {
    console.log(error);
  }
}

export async function updateResourceAction(formData) {
  try {
    const resource = await formData.get("resource");
    const resourceid = await formData.get("resourceid");

    if (!resource || !resourceid) {
      throw new Error("Resource and Id is required");
    }
    await updateResource({
      resource: resource,
      resourceid: resourceid,
    });
    revalidatePath("/resource");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteResourceAction(formData) {
  try {
    const resourceid  = await formData.get("resourceid");
    if (!resourceid) {
      throw new Error("Resource ID is required");
    }
    await deleteResource({
      resourceid: resourceid,
    });
    revalidatePath("/resource");
  } catch (error) {
    console.log(error);
  }
}
