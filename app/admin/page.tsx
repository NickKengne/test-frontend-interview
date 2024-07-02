"use server";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { DollarSign, ShoppingBag, User } from "lucide-react";


export default async function Home() {
  return (
    <div className="flex-col md:flex z-10 p-6">
     <div className="flex flex-wrap gap-4 items-center justify-center w-[90%] h-auto max-w-[800px]">
     <div className="flex justify-between items-center h-[100px] border w-[250px] rounded-xl">
       <div className="w-[20%] h-full bg-primary flex justify-center items-center">
       <DollarSign color="white"/>
       </div>
        <div className="w-[80%] px-4">
          <p className="font-bold text-xl">Total earns</p>
          <p>$100</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-[100px] border w-[250px] rounded-xl">
       <div className="w-[20%] h-full bg-primary flex justify-center items-center" >
       <User color="white"/>
       </div>
        <div className="w-[80%] px-4">
          <p className="font-bold text-xl">Total Users</p>
          <p>200</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-[100px] border w-[250px] rounded-xl">
       <div className="w-[20%] h-full bg-primary flex justify-center items-center" >
       <ShoppingBag color="white"/>
       </div>
        <div className="w-[80%] px-4">
          <p className="font-bold text-xl">Total sells</p>
          <p>$20.89</p>
        </div>
      </div>
     </div>
    </div>
  );
}
