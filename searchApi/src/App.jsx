import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/globals.css'
import Search from './components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Search></Search>
    </>
  )
}

export default App
