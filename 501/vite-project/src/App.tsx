import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './class2/A01028774/loginPage.tsx'
import Button from './class2/A01028774/button.tsx'

const App = () => {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`Vite + React`}</h1>

      {/* Arrow functions */}
      <div>
        <Button label="Login" onClick={() => setShowLogin(true)} />
        <Button label="Exit" onClick={() => setShowLogin(false)} />
      </div>
      {showLogin && <Login />}
      <div className="card">
        {/* Arrow functions */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          {`count is ${count}`}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App