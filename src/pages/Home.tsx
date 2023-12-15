import { LoginForm } from '../components/LoginForm'
import { AuthState } from '../lib/types'
import { useNavigate } from 'react-router'

const Home = () => {
  const authLocalData = JSON.parse(
    localStorage.getItem('userAuth') || '{}'
  ) as AuthState
  const navigate = useNavigate()

  if (authLocalData.isAuth) {
    navigate('/list-of-tracked-items')
  }

  return <LoginForm />
}

export default Home
