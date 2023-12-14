import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/slices/auth'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

const NavPanel = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  const user = useAppSelector((state) => state.auth.value)

  return (
    <div className="sticky left-0 top-0 z-10 mx-auto flex items-center justify-between border-b border-zinc-200 bg-[var(--header-background)] px-8 py-4 font-semibold">
      <h1>KGG</h1>
      {user.isAuth && (
        <div>
          <NavLink to={'/tracker'}>
            <Button variant={'ghost'} onClick={handleLogout}>
              Tracker
            </Button>
          </NavLink>
          <NavLink to={'/list-of-tracked-items'}>
            <Button variant={'ghost'} onClick={handleLogout}>
              List of tracked items
            </Button>
          </NavLink>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Button variant={'ghost'} onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  )
}

export default NavPanel
