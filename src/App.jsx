import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>JCD ARMAZÉM</h1>
      </div>
      <p className="read-the-docs">
        Vai dar certo em nome de Jesus!
      </p>
    </>
  )
}

export default App
