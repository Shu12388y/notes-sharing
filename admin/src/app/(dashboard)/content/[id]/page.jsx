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
import {
  addContentAction,
  deleteContentAction,
  updateContentAction,
} from "@/app/actions/contentAction";
import Link from "next/link";

async function Page({ params }) {
  try {
    const { id } = await params;
    const contents = await fetchContents({
      resourceid: id,
    });

    if (contents.length == 0) {
      return (
        <>
          <div>
            <div className="flex flex-row items-center justify-between mb-10">
              <Link href={"/resources"}>Go Back</Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Add new content</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Content</DialogTitle>
                    <DialogDescription>
                      Add new content&apos;s according to your need
                    </DialogDescription>
                  </DialogHeader>

                  {/* ✅ form inside DialogContent */}
                  <form action={addContentAction} className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Computer Network"
                      />
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        name="description"
                        required
                        placeholder="Computer Network"
                      />
                      <Label htmlFor="link">Link</Label>
                      <Input
                        id="link"
                        name="link"
                        placeholder="Computer Network"
                      />
                      <Label htmlFor="content">Content*</Label>
                      <div>
                        <Input
                          className="h-32"
                          id="content"
                          name="content"
                          required
                          type="file"
                        />
                      </div>
                      <Label htmlFor="resourceid"></Label>
                      <Input
                        id="resourceid"
                        name="resourceid"
                        required
                        type="hidden"
                        defaultValue={id}
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
            <div className="text-center font-bold">No content is present</div>
          </div>
        </>
      );
    }

    return (
      <div>
        <div className="flex flex-row items-center justify-between mb-10">
          <Link href={`/resources`}>Go Back</Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add new content</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Content</DialogTitle>
                <DialogDescription>
                  Add new content&apos;s according to your need
                </DialogDescription>
              </DialogHeader>

              {/* ✅ form inside DialogContent */}
              <form action={addContentAction} className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Computer Network"
                  />
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    name="description"
                    required
                    placeholder="Computer Network"
                  />
                  <Label htmlFor="link">Link</Label>
                  <Input id="link" name="link" placeholder="Computer Network" />
                  <Label htmlFor="content">Content*</Label>
                  <div>
                    <Input
                      className="h-32"
                      id="content"
                      name="content"
                      required
                      type="file"
                    />
                  </div>
                  <Label htmlFor="resourceid"></Label>
                  <Input
                    id="resourceid"
                    name="resourceid"
                    required
                    type="hidden"
                    defaultValue={id}
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
              <TableHead>Name</TableHead>
              <TableHead className="">Description</TableHead>
              <TableHead className="">Links</TableHead>
              <TableHead className="">Content</TableHead>
              <TableHead className="">Time</TableHead>
              <TableHead className=""></TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contents.map((content) => (
              <TableRow key={content._id} className="flex justify-between ">
                <TableCell className="font-medium text-center">
                  {content.title}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {content.description}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {content?.links.slice(0, 20) + "...." || "NONE"}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {content?.content.slice(0, 20) + "...."}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {content?.time}
                </TableCell>

                <TableCell className="flex gap-2">
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Update content</Button>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Update Content</DialogTitle>
                          <DialogDescription>
                            Update content&apos;s according to your need
                          </DialogDescription>
                        </DialogHeader>

                        {/* ✅ form inside DialogContent */}
                        <form
                          action={updateContentAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="id"></Label>
                            <Input
                              id="id"
                              name="id"
                              required
                              defaultValue={content._id}
                              placeholder="Computer Network"
                            />

                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              required
                              defaultValue={content.title}
                              placeholder="Computer Network"
                            />
                            <Label htmlFor="description">Description</Label>
                            <Input
                              id="description"
                              name="description"
                              required
                              defaultValue={content.description}
                              placeholder="Computer Network"
                            />
                            <Label htmlFor="link">Link</Label>
                            <Input
                              id="link"
                              name="link"
                              defaultValue={content.links}
                              placeholder="Computer Network"
                            />
                            <Label htmlFor="prevContent"></Label>
                            <Input
                              id="prevContent"
                              name="prevContent"
                              type={"hidden"}
                              defaultValue={content.content}
                            />
                            <Label htmlFor="content">Content*</Label>
                            <div>
                              <a
                                className="text-red-400 underline"
                                href={content.content}
                                target="_blank"
                              >
                                Preview Content{" "}
                              </a>
                              <Input
                                className="h-32"
                                id="content"
                                name="content"
                                type="file"
                              />
                            </div>
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
                        Delete Content
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
                          action={deleteContentAction}
                          className="grid gap-4"
                        >
                          <div className="grid gap-3">
                            <Label htmlFor="contentid"></Label>
                            <Input
                              id="contentid"
                              name="contentid"
                              required
                              defaultValue={content._id}
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
