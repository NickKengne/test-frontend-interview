"use server";

import React from "react";
import { Separator } from "@/components/ui/separator";


export default async function Home() {
  return (
    <div className="flex-col md:flex z-10">
      <div className="flex-1 space-y-4 px-9 pb-2 z-10 lg:px-11 mb-5 pt-[2.7rem] flex-col relative">
        <div className="flex items-center justify-between space-y-2 z-10">
          <p className="lg:text-5xl md:text-4xl text-2xl font-bold light:text-slate-800 z-10">
            Hello , nicolas
          </p>
        </div>
      </div>
      <div className="px-9 mt-6 grid lg:grid-cols-2">
        <Separator />
      </div>
    </div>
  );
}
