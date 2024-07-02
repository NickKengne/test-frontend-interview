"use server"

import React, { Suspense } from "react";
import Loading from "./loading";
import SideBar from "@/components/SideBar";
import NavBarDash from "./components/navbar";
import  {cookies}  from "next/headers";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  gender: string;
  phone: string;
}


const layout = async ({ children }: any) => {
   const cookieUser: string | any = cookies().get("user")?.value;
   const userDetails: User = JSON.parse(cookieUser)
  
  return (
    <Suspense fallback={<Loading />}>
      <>
        <NavBarDash userDetails={userDetails}/>
        <div className="border-r border-t absolute z-50 top-16 min-h-screen flex align-items-center">
          <SideBar />
        </div>
          <div className="w-full min-h-screen pl-[105px] ">
          {children}
          </div>
      </>
    </Suspense>
  );
};

export default layout;
