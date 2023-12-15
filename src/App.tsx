import MaxWidthWrapper from './components/MaxWidthWrapper'
import NavPanel from './components/NavPanel'
import { AuthState, User } from './lib/types'
import Home from './pages/Home'
import ListOfTrackedItems from './pages/ListOfTrackedItems'
import Tracker from './pages/Tracker'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useAppSelector } from './redux/store'
import { useAppDispatch } from './lib/hooks'
import { useEffect } from 'react'
import axios from 'axios'
import { addUser } from './redux/slices/users'

function App() {
  const authLocalData = JSON.parse(
    localStorage.getItem('userAuth') || '{}'
  ) as AuthState
  const users = useAppSelector((state) => state.users.value)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!authLocalData.isAuth) {
      navigate('/log-in')
    }
    if (!users.length) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          response.data.forEach((user: User) => {
            dispatch(addUser(user))
          })
        })
    }
  }, [])

  return (
    <>
      <NavPanel />
      <MaxWidthWrapper className="flex h-full w-full flex-grow flex-col items-center justify-center py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route
            path="/list-of-tracked-items"
            element={<ListOfTrackedItems />}
          />
        </Routes>
      </MaxWidthWrapper>
    </>
  )
}

export default App
