import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chat from './pages/chat.jsx'
import Login from './pages/login.jsx'
import { GridBackground } from './components/background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridBackground />
    <App />
  </StrictMode>,
)
