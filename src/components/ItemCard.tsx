import { Task, User, TrackedItem } from '../lib/types'
import { useAppSelector } from '../redux/store'
import { Popup } from './Popup'

interface ItemCardProps {
  trackedItem: TrackedItem
}

const ItemCard = ({ trackedItem }: ItemCardProps) => {
  const allUsers = useAppSelector((state) => state.users.value)
  const allTasks = useAppSelector((state) => state.tasks.value)

  const shownUser = allUsers.find(
    (user) => user.id === trackedItem.userId
  ) as User
  const shownTask = allTasks.find(
    (task) => task.id === trackedItem.taskId
  ) as Task

  return (
    <div className="mb-4 transform cursor-pointer rounded-lg bg-white p-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-2 text-lg font-semibold">{`${shownUser?.name} added spent time on the task ${shownTask?.name}`}</h3>
      <Popup trackedItem={trackedItem} user={shownUser} task={shownTask} />
    </div>
  )
}

export default ItemCard
