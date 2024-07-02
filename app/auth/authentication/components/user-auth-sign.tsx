"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
// import { Facebook } from "lucide-react";
import { toast } from "sonner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type Credentials = {
  email: string;
  password: string;
};

export function UserAuthSign({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const router = useRouter();
  const data: Credentials = {
    email: email,
    password: password,
  };


  function checkCredentialAreEmpty (data: Credentials) {
    if (data.email === "" || data.password === "") {
      toast("Please fill all the fields");
      return true;
    }
    return false;
  }
  
  async function onLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    if(checkCredentialAreEmpty(data)) {
      setIsLoading(false);
      return;
    }
    //console.log(data);
  }

  return (
    <div className={cn("grid gap-6 w-full", className)} {...props}>
      <form onSubmit={onLogin}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              disabled={isLoading}
              className="mb-3 focus-visible:ring-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <Button disabled={isLoading} className="text-white">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
