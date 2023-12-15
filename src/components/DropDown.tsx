import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

interface DropDownProps {
  onValueChange: (value: string) => void
  shownData: []
  value: string
}

interface IDisplayValue {
  id: string
  name: string
}

export function DropDown({ onValueChange, shownData, value }: DropDownProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {shownData.map((data: IDisplayValue) => {
            return (
              <SelectItem key={data.id} value={data.id.toString()}>
                {data.name}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
