import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import './styles/globals.css'
import App from './App'
import { ReduxProvider } from './redux/provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </Router>
)
