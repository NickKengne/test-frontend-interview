"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UserAuthForm } from "@/app/auth/authentication/components/user-auth-form";
import { ImagesSliderDemo } from "@/components/loginSLider";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";
import { useTriggerSet } from "@/store/store";
import { UserAuthSign } from "./components/user-auth-sign";
import logo from "@/public/logo.png"

export default function AuthenticationPage() {
  const token = getCookie("token");
  const trigger = useTriggerSet((state: any) => state.trigger);
  const setTrigger = useTriggerSet((state: any) => state.setTrigger);

  const onClick = (value: string) => {
    setTrigger(value);
  };

  if (token) {
    redirect("/admin");
  }

  return (
    <div className="container relative grid min-h-screen flex-col items-center justify-center sm:grid md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="lg:p-7  border-gray md:border-none sm:border-backgound lg:border-r flex flex-col">
      
        <Image src={logo} width={200} height={100} alt={"logo"} className="mx-auto relative -top-[50px]"/>
        <div className="mx-auto flex flex-col space-y-6 w-[350px] lg:w-[524px]">
          <div className="flex flex-col space-y-2 mb-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in
            </h1>

            <div>
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-background p-1 mb-3  text-muted-foreground">
                <div
                  className={
                    trigger === "signin"
                      ? "inline-flex items-center justify-center whitespace-nowrap  px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white  border-b-2 border-blue-700"
                      : "inline-flex items-center justify-center whitespace-nowrap  px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer"
                  }
                  onClick={() => onClick("signin")}
                  id="signin"
                >
                  Employee & staff login
                </div>
                <div
                  className={
                    trigger === "signup"
                      ? "inline-flex items-center justify-center whitespace-nowrap  px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white border-b-2 border-blue-700"
                      : "inline-flex items-center justify-center whitespace-nowrap  px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                  }
                  onClick={() => onClick("signup")}
                  id="signup"
                >
                  Admin login
                </div>
              </div>
              {trigger === "signin" ? (
                <UserAuthForm />
              ) : trigger === "signup" ? (
                <UserAuthSign />
              ) : (
                <></>
              )}
            </div>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="hidden lg:flex md:hidden">
        <ImagesSliderDemo />
      </div>
    </div>
  );
}
