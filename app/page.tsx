"use client"

import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import {getCookie, setCookie} from "cookies-next"
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { User } from "./admin/layout";

export default function Page() {

  const token = getCookie("token");
  const router =  useRouter()
  useEffect(() => {
    if (token) {
      redirect("/admin");
    }
  },[token])


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

  const handleRedirectToLogin = () => {
    router.push("/auth/authentication")
  }

  return (
    <main className="w-full">
      <ThemeToggle className="absolute right-3 top-4"/>
      <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
        <Button onClick={handleCookies}>
          View dashboard
        </Button>
        <Button onClick={handleRedirectToLogin}>
          View auth
        </Button>
      </div>
    </main>
  );
}
