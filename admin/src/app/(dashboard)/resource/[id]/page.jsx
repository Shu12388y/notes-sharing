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
import { fetchResources } from "@/handlers/handlers";
import Link from "next/link";
import {
  addSubjectAction,
  deleteSubjectAction,
  updateSubjectAction,
} from "@/app/actions/subjectActions";

import {
  addResourceAction,
  deleteResourceAction,
  updateResourceAction,
} from "@/app/actions/resourceAction";

async function Page({ params }) {
  try {
    const { id } = await params;
    const resources = await fetchResources({
      subjectid: id,
    });

    if (resources.length == 0) {
      return (
        <>
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
                  <form action={addResourceAction} className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="resource">Name</Label>
                      <Input
                        id="resource"
                        name="resource"
                        required
                        placeholder="DPPs"
                      />

                      <Label htmlFor="subjectid"></Label>
                      <Input
                        id="subjectid"
                        name="subjectid"
                        required
                        type={"hidden"}
                        defaultValue={id}
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
            <div className="text-center font-bold">No resource is present</div>
          </div>
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
              <form action={addResourceAction} className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="resource">Name</Label>
                  <Input
                    id="resource"
                    name="resource"
                    required
                    placeholder="DPPs"
                  />

                  <Label htmlFor="subjectid"></Label>
                  <Input
                    id="subjectid"
                    name="subjectid"
                    required
                    type={"hidden"}
                    defaultValue={id}
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
          <TableCaption>A list of your resources.</TableCaption>
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
            {resources.map((resource) => (
              <TableRow key={resource._id} className="flex justify-between">
                <TableCell className="font-medium">{resource.name}</TableCell>
                <TableCell className="flex gap-2">
                  <Link href={`/content/${resource._id}`}>
                    <TableCell asChild className="text-right">
                      Add Content
                    </TableCell>
                  </Link>
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
                          action={updateResourceAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="resource">Name</Label>
                            <Input
                              id="resource"
                              name="resource"
                              required
                              defaultValue={resource.name}
                            />
                            <Label htmlFor="resourceid"></Label>
                            <Input
                              id="resourceid"
                              name="resourceid"
                              required
                              defaultValue={resource._id}
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
                        Delete Resource
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
                          action={deleteResourceAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="resourceid"></Label>
                            <Input
                              id="resourceid"
                              name="resourceid"
                              required
                              defaultValue={resource._id}
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
