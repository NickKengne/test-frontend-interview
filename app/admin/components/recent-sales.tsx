import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          {/* <AvatarImage src="/avatars/02.png" alt="Avatar" /> */}
          <AvatarFallback className="bg-red-300 text-primary-foreground">NK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Nick kengne</p>
          <p className="text-sm text-muted-foreground">nickdk294@gmail.com</p>
        </div>
        <div className="ml-auto font-medium"> <span style={{
                        color: 'green'
                      }}>+$2050</span></div>
      </div>
    </div>
  )
}
