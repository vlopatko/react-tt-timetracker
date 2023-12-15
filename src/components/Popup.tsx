import { Task, User, TrackedItem } from '../lib/types'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { Button } from './ui/button'

interface PopupProps {
  trackedItem: TrackedItem
  user: User
  task: Task
}

export function Popup({ trackedItem, user, task }: PopupProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{task.name}</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-1 text-sm text-gray-600">
              <strong>Created at:</strong>{' '}
              {new Date(trackedItem.createdAt).toLocaleString()}
            </p>
            <p className="mb-1 text-sm text-gray-600">
              <strong>User:</strong> {user.name}
            </p>
            <p className="mb-1 text-sm text-gray-600">
              <strong>Task:</strong> {task.name}
            </p>
            <p className="mb-1 text-sm text-gray-600">
              <strong>Spent Time:</strong> {trackedItem.time}
            </p>
            <p className="mb-1 text-sm text-gray-600">
              <strong>Note:</strong> {trackedItem.note}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Ok</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
