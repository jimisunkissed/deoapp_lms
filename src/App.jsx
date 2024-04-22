import React from 'react'
import {Box} from '@chakra-ui/react'
import WithSideBar from './components/Layouts/WithSideBar'
import WithTopBar from './components/Layouts/WithTopBar'
import MainRouter from './routers/MainRouter'

function App() {
  return (
    <>
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
    </>
  )
}

export default App