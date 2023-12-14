import './App.css'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import NavPanel from './components/NavPanel'
import Home from './pages/Home'
import ListOfTrackedItems from './pages/ListOfTrackedItems'
import LogIn from './pages/LogIn'
import Tracker from './pages/Tracker'
import { ReduxProvider } from './redux/provider'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ReduxProvider>
      <NavPanel />
      <MaxWidthWrapper className="flex h-full w-full flex-grow flex-col items-center justify-center py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route
            path="/list-of-tracked-items"
            element={<ListOfTrackedItems />}
          />
        </Routes>
      </MaxWidthWrapper>
    </ReduxProvider>
  )
}

export default App
