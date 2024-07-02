import { Input } from "../../../components/ui/input"

export function Search({placeholder}:{placeholder: string}) {
  return (
    <div>
      <Input
        type="search"
        placeholder={placeholder}
        className="focus-visible:ring-0"
      />
    </div>
  )
}
