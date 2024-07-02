import { Button } from '@/components/ui/button'
import { Bell, NotebookIcon, UserCheck } from 'lucide-react'
import React from 'react'

export default function NotificationIcon() {
  return (
    <Button variant="ghost" size="sm" className='relative'>
     <Bell/>
      <span className="absolute top-0 right-2 h-4 w-4 bg-blue-800 text-white text-xs rounded-full flex items-center justify-center">
        2
      </span>
    </Button>
  )
}
