"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpHandler } from "@/handlers/handlers";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { checkUserInfo } from "@/lib/validate";
import toast from "react-hot-toast";


export function SignUpForm({ className, ...props }) {
  const router = useRouter();
  const [userinfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    contact: "",
    branch: "",
    yop: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleUserSignup() {
    try {
      setLoading(true);
      if (checkUserInfo({ userinfo: userinfo })) {
        const info = await signUpHandler({
          userinfo: userinfo,
        });
        if (info.message == "Success") {
          router.push("/signin");
        }
        setLoading(false);
      }
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
        <h1 className="text-2xl font-bold">Create to your new account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your following details below to create to your new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                fullname: e.target.value,
              })
            }
            id="fullname"
            type="text"
            placeholder="Ankit"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="college">College*</Label>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                branch: e.target.value,
              })
            }
            id="college"
            type="text"
            placeholder="IIT BHU"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="yop">Year of Pass Out</Label>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                yop: e.target.value,
              })
            }
            id="text"
            type="text"
            placeholder="2024"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="phonenumber">Phone Number</Label>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                contact: e.target.value,
              })
            }
            id="phonenumber"
            type="tel"
            placeholder="+91 8956234509"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                email: e.target.value,
              })
            }
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            onChange={(e) =>
              setUserInfo({
                ...userinfo,
                password: e.target.value,
              })
            }
            id="password"
            type="password"
            required
          />
        </div>
        <Button
          onClick={handleUserSignup}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Loading..." : "Create a new account"}
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/signin" className="underline underline-offset-4">
          Sign In
        </Link>
      </div>
    </div>
  );
}
