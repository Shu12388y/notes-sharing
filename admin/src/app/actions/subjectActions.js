"use server";

import { revalidatePath } from "next/cache";
import { addSubject, updateSubject, deleteSubject } from "@/handlers/handlers";

export async function addSubjectAction(formData) {
  try {
    const subject = await formData.get("subject");
    if (!subject) {
      throw new Error("Subject is required");
    }
    await addSubject({
      subject: subject,
    });
    revalidatePath("/resources");
  } catch (error) {
    console.log(error);
  }
}

export async function updateSubjectAction(formData) {
  try {
    const subject = await formData.get("usubject");
    const subjectid = await formData.get("subjectid");
    if (!subject || !subjectid) {
      throw new Error("Subject is required");
    }
    await updateSubject({
      subject: subject,
      subjectid: subjectid,
    });
    revalidatePath("/resources");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSubjectAction(formData) {
  try {
    const subjectid = await formData.get("subjectid");
    if (!subjectid) {
      throw new Error("Subject is required");
    }
    await deleteSubject({
      subjectid: subjectid,
    });
    revalidatePath("/resources");
  } catch (error) {
    console.log(error);
  }
}
