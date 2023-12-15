import { SyntheticEvent, useState } from 'react'
import { useAppSelector } from '../redux/store'
import { useAppDispatch } from '../lib/hooks'
import { addItem } from '../redux/slices/itemsTracked'

import { ToastContainer, toast } from 'react-toastify'
import { DropDown } from '../components/DropDown'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import 'react-toastify/dist/ReactToastify.css'

interface FormData {
  userId: string
  taskId: string
  time: string
  note: string
}

const Tracker = () => {
  const users = useAppSelector((state) => state.users.value) as []
  const tasks = useAppSelector((state) => state.tasks.value) as []

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    taskId: '',
    time: '',
    note: '',
  })

  const dispatch = useAppDispatch()

  const handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { userId, taskId, time, note } = formData

    dispatch(
      addItem({
        userId: +userId,
        taskId,
        time: +time,
        note,
      })
    )

    setFormData({
      userId: '',
      taskId: '',
      time: '',
      note: '',
    })

    toast.success('Tracked Item was added!', {
      position: 'bottom-right',
      theme: 'light',
      hideProgressBar: true,
    })
  }

  const handleSelectedUserValueChange = (value: string) => {
    setFormData({
      ...formData,
      userId: value,
    })
  }

  const handleSelectedTaskValueChange = (value: string) => {
    setFormData({
      ...formData,
      taskId: value,
    })
  }

  const isSubmitDisabled =
    !formData.taskId.length ||
    !formData.userId.length ||
    !formData.note.length ||
    !formData.time.length

  return (
    <div className="min-w-[640px]">
      <h2 className="mb-8">Tracker Page</h2>
      <form className="flex flex-col gap-2">
        <div>
          <label>Selected user:</label>
          <DropDown
            value={formData.userId}
            onValueChange={handleSelectedUserValueChange}
            shownData={users}
          />
        </div>

        <div>
          <label>Selected task:</label>
          <DropDown
            value={formData.taskId}
            onValueChange={handleSelectedTaskValueChange}
            shownData={tasks}
          />
        </div>

        <div>
          <label htmlFor="timeSpent">Spent Time (hours):</label>
          <Input
            type="number"
            id="timeSpent"
            value={formData.time}
            onChange={(e) => {
              e.preventDefault()
              setFormData({
                ...formData,
                time: e.target.value,
              })
            }}
          />
        </div>

        <div>
          <label htmlFor="projectNote">Project note:</label>
          <Textarea
            id="projectNote"
            placeholder="Type your note here."
            value={formData.note}
            onChange={(e) => {
              e.preventDefault()
              setFormData({
                ...formData,
                note: e.target.value,
              })
            }}
            rows={6}
          />
        </div>

        <Button
          type="submit"
          variant={'default'}
          size={'lg'}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Add tracking item
        </Button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Tracker
