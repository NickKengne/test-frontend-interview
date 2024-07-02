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
    redirect("/auth/authentication")
  },[token])


  

  return (
    <main className="w-full">
      {/* <ThemeToggle className="absolute right-3 top-4"/> */}
      <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      </div>
    </main>
  );
}
