import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
      
      </Routes>
    </BrowserRouter>
   
        
    </div>
  )
}

export default App
