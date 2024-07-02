"use client";

import React, { PropsWithChildren } from "react";
import { Nav } from "./nav";

import {Calendar, LayoutDashboard, LucideHome, Menu } from "lucide-react";
import clsx from "clsx";
import { useCollapableStore } from "@/store/store";
import { usePathname } from "next/navigation";


const SideBar = ({}: PropsWithChildren) => {
    const {isCollapsed , setCollapse}=useCollapableStore()
    const pathname = usePathname();
    const toggleSideBar = () => setCollapse(!isCollapsed);
    // console.log(isCollapsed)

  return (
    <div className="min-h-16 w-full bg-background">
        <div className={clsx(isCollapsed ? "absolute -top-10 -right-10 flex justify-center items-center h-7 w-7 rounded-full bg-black" : "absolute -top-10 -right-10 flex justify-center items-center h-7 w-7 rounded-full bg-black")} onClick={toggleSideBar}>
            <Menu color="white" size={12} className=""/>
        </div>
        
      <Nav
      
        isCollapsed={!isCollapsed}
        links={[
          {
            title: "Home",
            icon: LucideHome,
            variant: pathname === "/" || pathname === "/admin" ? "default" :"ghost",
            href: "/admin",
          },
          {
            title: "Activity",
            icon: Calendar,
            variant: pathname === "/admin/activity" ? "default" :"ghost",
            href: "/admin/activity",
          }
        ]}
      />
    </div>
  );
};

export default SideBar;
