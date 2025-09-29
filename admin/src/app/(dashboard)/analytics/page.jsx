import React from "react";
import { fetchAllUsers } from "@/handlers/analysis.handler";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Users, RefreshCw } from "lucide-react";

async function Page() {
  let users = [];
  let error = null;

  try {
    users = await fetchAllUsers();

    // Validate the response
    if (!users) {
      throw new Error("No data received from server");
    }

    if (!Array.isArray(users)) {
      throw new Error("Invalid data format received");
    }
  } catch (err) {
    error = err;
    console.error("Error fetching users:", err);
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            User Directory
          </h1>
          <p className="text-slate-600">Manage and view all registered users</p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (users.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            User Directory
          </h1>
          <p className="text-slate-600">Manage and view all registered users</p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
          <Users className="w-16 h-16 text-slate-400 mb-4" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-2">
            No Users Found
          </h2>
          <p className="text-slate-500">
            Start by adding your first user to see them here.
          </p>
        </div>
      </div>
    );
  }

  // Success state - render table
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          User Directory
        </h1>
        <p className="text-slate-600">Manage and view all registered users</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableCaption className="py-4 text-slate-500">
              Total {users.length} user{users.length !== 1 ? "s" : ""}{" "}
              registered
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="font-semibold text-slate-700">
                  Name
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Email
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Contact
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Year of Passing
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Branch
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                // Handle invalid user data gracefully
                if (!user || !user._id) {
                  return null;
                }

                return (
                  <TableRow
                    key={user._id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <TableCell className="font-medium text-slate-900">
                      {user.fullname || "—"}
                    </TableCell>
                    <TableCell className="text-slate-700">
                      {user.email || "—"}
                    </TableCell>
                    <TableCell className="text-slate-700">
                      {user?.contact || "—"}
                    </TableCell>
                    <TableCell className="text-slate-700">
                      {user?.yearofPassing || "—"}
                    </TableCell>
                    <TableCell className="text-slate-700">
                      {user?.branch ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {user.branch}
                        </span>
                      ) : (
                        <span className="text-slate-400">N/A</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Page;
