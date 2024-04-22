import React from 'react'
import {Box} from '@chakra-ui/react'
import WithSideBar from './components/Layouts/WithSideBar'
import WithTopBar from './components/Layouts/WithTopBar'
import MainRouter from './routers/MainRouter'

function App() {
  return (
    <>
<<<<<<< HEAD
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      //tes commit
      </p>
=======
    <Box display={{base:'none', md:'flex'}}>
      <WithSideBar>
        <MainRouter />
      </WithSideBar>
    </Box>
    <Box display={{base:'flex', md:'none'}}>
      <WithTopBar>
        <MainRouter />
      </WithTopBar>
    </Box>
>>>>>>> 3ad539ce8c0c62d367b133e80981486c1b5adf8d
    </>
  )
}

export default App