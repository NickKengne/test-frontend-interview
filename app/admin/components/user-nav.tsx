"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOutIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from "../layout";
import { deleteCookie } from "cookies-next";

export function UserNav({userDetails}: {userDetails: User|undefined}) {

  const router = useRouter();

  const logout = () => {
   alert("You are about to logout")
   deleteCookie("token")
   router.refresh()
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHTYbBtKMY2Vg/profile-displayphoto-shrink_200_200/0/1714722950547?e=1725494400&v=beta&t=D2CO9fyo8s7zsWu3QRrU3pBIoXARvfy9fVb5AQXjFZQ" alt="avatar user" />
            <AvatarFallback className="bg-primary text-white">{userDetails?.firstname?.slice(0,1)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userDetails?.firstname}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userDetails?.lastname}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => {
            router.push("/admin/profile")
          }}>
            Profile
            <DropdownMenuShortcut><UserIcon/></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut><LogOutIcon/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
