
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { GridBackground } from './components/background'
import Hero from './section/hero'
import Chat from './section/chat'
function App() {

  return (
    <>
    <GridBackground />
    <Header />
    <Hero  />
    <Chat className='' />

      
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4">
        <div className="flex gap-4 mb-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-16" alt="React logo" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
