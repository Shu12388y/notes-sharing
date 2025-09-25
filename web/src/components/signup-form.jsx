import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignUpForm({ className, ...props }) {
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
          <Label htmlFor="email">Full Name</Label>
          <Input id="email" type="email" placeholder="Ankit" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">College</Label>
          <Input id="email" type="email" placeholder="IIT BHU" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Year of Pass Out</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Phone Number</Label>
          <Input
            id="email"
            type="email"
            placeholder="+91 8956234509"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Create a new account
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
