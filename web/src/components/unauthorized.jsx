import { Lock, ShieldAlert } from "lucide-react";
import Link from "next/link";
export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-black">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-black p-4 rounded-full">
              <ShieldAlert className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Error Code */}
          <div className="text-center mb-4">
            <h1 className="text-7xl font-bold text-black">401</h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-black text-center mb-3">
            Unauthorized Access
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-center mb-8 leading-relaxed">
            You don't have permission to access this resource. Please log in
            with valid credentials to continue.
          </p>

          {/* Login Button */}
          <Link
            href={"/signin"}
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Lock className="w-5 h-5" />
            Log In to Continue
          </Link>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Need help?{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-center mt-6 text-sm">
          Protected Resource • Secure Access Required
        </p>
      </div>
    </div>
  );
}
