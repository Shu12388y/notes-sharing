"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signInHandler } from "@/handlers/handlers";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/context/auth-context";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const {handleIslogin} = useAuth();
  const [loading, setLoading] = useState(false);

  async function userSignInHandler() {
    try {
      setLoading(true);
      const info = await signInHandler({ userinfo: userInfo });
      if (info  == "Success") {
        handleIslogin();
        router.push("/subjects");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.toString());
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                email: e.target.value,
              });
            }}
            id="email"
            type="email"
            placeholder="sm@iitb.ac.in"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgetpassword"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                password: e.target.value,
              });
            }}
            id="password"
            type="password"
            required
          />
        </div>
        <Button
          disabled={loading}
          onClick={userSignInHandler}
          className="w-full"
        >
          {loading ? "Loading...." : "Login"}
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  );
}
