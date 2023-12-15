import { FC } from 'react'
import { useAppSelector } from '../redux/store'
import ItemCard from '../components/ItemCard'
import { TrackedItem } from '../lib/types'

interface ListOfTrackedItemsProps {}

const ListOfTrackedItems: FC<ListOfTrackedItemsProps> = ({}) => {
  const trackedItems = useAppSelector((state) => {
    return state.itemsTracked.value
  })

  return (
    <div className="flex flex-col p-2">
      {trackedItems.length ? (
        trackedItems.map((item: TrackedItem) => (
          <ItemCard key={item.id} trackedItem={item} />
        ))
      ) : (
        <p className="mb-1 text-sm text-gray-600">
          List of Tracked Items is Empty
        </p>
      )}
    </div>
  )
}

export default ListOfTrackedItems
