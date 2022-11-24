import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainContainer from './components/MainContainer';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar'
import Series from "./components/Series";

function App() {
  const [data,SetData]=useState([])
  useEffect(() => {
    fetch("http://localhost:3000/shows").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          SetData(data);
        });
      }
    });
  }, []);

  return (
    <div className="bg-dark lg:ml-24 lg:mr-4 lg:mt-8  font-sans">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<MainContainer data={data}/>} />
      <Route path="/movies" element={<Movies data={data}/>} />
      <Route path="/tv" element={<Series data={data}/>} />

      </Routes>
    </BrowserRouter>
   
        
    </div>
  )
}

export default App
