import { FC, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useAppDispatch } from '../lib/hooks'
import { addUser } from '../redux/slices/users'
import { AuthState, User } from '../lib/types'
import { logIn } from '../redux/slices/auth'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const localData = JSON.parse(
    localStorage.getItem('userAuth') || ''
  ) as AuthState

  const userAdmin = useAppSelector((state) => state.auth.value)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.data.forEach((user: User) => {
        dispatch(addUser(user))
      })
    })
  }, [])

  useEffect(() => {
    if (localData.isAuth && !userAdmin.isAuth) {
      dispatch(logIn(localData))
    } else {
      if (!userAdmin.isAuth) {
        navigate('/log-in')
      }
      localStorage.setItem('userAuth', JSON.stringify(userAdmin))
    }
  }, [userAdmin])

  return <div className="flex flex-col justify-center p-2">Home Page</div>
}

export default Home
