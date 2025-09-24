"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siginHandler } from "@/handlers/auth-handler";
import { toast } from "sonner";

export function LoginForm({ className, ...props }) {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const loginHelper = async () => {
    try {
      setLoading(true);
      const data = await siginHandler({
        email: info.email,
        password: info.password,
      });
      console.log(data)
      if (data.message == "Success") {
        toast("Login Successfully");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
            onChange={(e) =>
              setInfo({
                ...info,
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
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            onChange={(e) =>
              setInfo({
                ...info,
                password: e.target.value,
              })
            }
            id="password"
            type="password"
            required
          />
        </div>
        <Button onClick={loginHelper} disabled={loading} className="w-full">
          {loading ? "Authorizing.." : "Login"}
        </Button>
      </div>
    </div>
  );
}
