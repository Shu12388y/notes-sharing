import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchContents } from "@/handlers/handlers";
import Link from "next/link";
import {
  addSubjectAction,
  deleteSubjectAction,
  updateSubjectAction,
} from "@/app/actions/subjectActions";

async function Page({ params }) {
  try {
    const { id } = await params;
    const contents = await fetchContents({
      resourceid: id,
    });

    if (contents.length == 0) {
      return (
        <>
          <div>No resource is present</div>
        </>
      );
    }

    return (
      <div>
        <div className="flex flex-row items-center justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add new resource</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Resource</DialogTitle>
                <DialogDescription>
                  Add new resource&apos;s according to your need
                </DialogDescription>
              </DialogHeader>

              {/* ✅ form inside DialogContent */}
              <form action={addSubjectAction} className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="subject">Name</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Computer Network"
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Add</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableCaption>A list of your contents.</TableCaption>
          <TableHeader>
            <TableRow className="flex justify-between">
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>
                <TableHead className="w-[100px]">Resources</TableHead>
                <TableHead className="text-right">Update</TableHead>
                <TableHead className="text-right">Delete</TableHead>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contents.map((content) => (
              <TableRow key={content._id} className="flex justify-between">
                <TableCell className="font-medium">{content.title}</TableCell>
                <TableCell className="font-medium">
                  {content.description}
                </TableCell>
                <TableCell className="font-medium">
                  {content?.links || "NONE"}
                </TableCell>
                <TableCell className="font-medium">
                  {content?.content}
                </TableCell>
                <TableCell className="font-medium">{content?.time}</TableCell>

                <TableCell className="flex gap-2">
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Update resource</Button>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Update Subject</DialogTitle>
                          <DialogDescription>
                            Update resource&apos;s according to your need
                          </DialogDescription>
                        </DialogHeader>

                        <form
                          action={updateSubjectAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="usubject">Name</Label>
                            <Input
                              id="usubject"
                              name="usubject"
                              required
                            //   defaultValue={resource.name}
                            />
                            <Label htmlFor="subjectid"></Label>
                            <Input
                              id="subjectid"
                              name="subjectid"
                              required
                            //   defaultValue={resource._id}
                              type={"hidden"}
                            />
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button type="submit">Update</Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger className="bg-red-500 p-2 text-white rounded-md">
                        Delete Subject
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <form
                          action={deleteSubjectAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="subjectid"></Label>
                            <Input
                              id="subjectid"
                              name="subjectid"
                              required
                            //   defaultValue={resource._id}
                              type={"hidden"}
                            />
                          </div>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>
                              <Button type="submit">Continue</Button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
}

export default Page;
