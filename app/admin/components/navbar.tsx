import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import NotificationIcon from './NotificationIcon'
import { UserNav } from './user-nav'
import { User } from '../layout'

export default function NavBarDash({userDetails}: {userDetails: User| undefined}) {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4">
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle className='absolute top-3 right-4'/>
              {/* <Search /> */}
              <NotificationIcon/>
              <UserNav userDetails = {userDetails} />
            </div>
          </div>
        </div>
  )
}
