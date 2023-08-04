import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './User'
import CreateData from './CreateData'
import AlterData from './AlterData'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<User />}></Route>
            <Route path='/create' element={<CreateData />}></Route>
            <Route path='/alter/:id' element={<AlterData />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
