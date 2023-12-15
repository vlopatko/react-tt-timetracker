import { AuthState } from '../lib/types'
import { Button } from './ui/button'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavPanel = () => {
  const navigate = useNavigate()
  const authLocalData = JSON.parse(
    localStorage.getItem('userAuth') || '{}'
  ) as AuthState

  const handleLogout = () => {
    localStorage.removeItem('userAuth')
    navigate('/log-in')
  }

  return (
    <div className="sticky left-0 top-0 z-10 mx-auto flex items-center justify-between border-b border-zinc-200 bg-[var(--header-background)] px-8 py-4 font-semibold">
      <Button variant={'ghost'} size={'lg'}>
        <Link to={'/'}>KGG</Link>
      </Button>
      {authLocalData.isAuth && (
        <div>
          <NavLink to={'/tracker'}>
            <Button variant={'ghost'}>Tracker</Button>
          </NavLink>
          <NavLink to={'/list-of-tracked-items'}>
            <Button variant={'ghost'}>List of tracked items</Button>
          </NavLink>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Button variant={'outline'} onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  )
}

export default NavPanel
