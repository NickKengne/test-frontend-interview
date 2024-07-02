"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
// import { Facebook } from "lucide-react";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import { User } from "@/app/admin/layout";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type Credentials = {
  email: string;
  password: string;
};

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const router = useRouter();
  const data: Credentials = {
    email: email,
    password: password,
  };

  const userData : User= {
    id:"1",
    firstname:"nicolas",
    lastname:"dibrilain",
    gender:"male",
    phone:"+237691578689"
  }


  const handleCookies = () => {
    setCookie("token", "2132179fasjakdfb21hevi77e092");
    setCookie("user", JSON.stringify(userData))
    router.push("/admin")
  }


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
    handleCookies()
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
            <Input
              id="password"
              placeholder="****"
              type="password"
              defaultValue={""}
              value={password}
              disabled={isLoading}
              className="mb-3 focus-visible:ring-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading} className="text-white">Sign In</Button>
        </div>
      </form>
    </div>
  );
}
