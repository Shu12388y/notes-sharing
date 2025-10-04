import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Book, ArrowRight, AlertCircle, Search, ChevronLeft } from "lucide-react";
import { fetchSubjects } from "@/handlers/handlers";
import Link from "next/link";
export const revalidate = 10; 

export default async function Page() {
  let subjects = [];

  try {
    subjects = await fetchSubjects();
  } catch (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We encountered an error while loading the subjects. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!subjects || subjects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              No Subjects Found
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              There are currently no subjects available. Check back later for updates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Go Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
              Go Back
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Browse Subjects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of educational resources across various subjects
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Card
              key={subject._id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {subject.name}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Explore resources and materials
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Link
                  href={`/resources/${subject._id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group-hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Resources
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
            <Book className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              {subjects.length} Subject{subjects.length !== 1 ? 's' : ''} Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}