import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark lg:ml-24 lg:mr-4 lg:mt-8  font-sans">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<MainContainer/>} />

      </Routes>
    </BrowserRouter>
   
        
    </div>
  )
}

export default App
