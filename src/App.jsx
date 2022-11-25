import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainContainer from './components/MainContainer';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar'
import Series from "./components/Series";

function App() {
  const [data,SetData]=useState([])
  const [inputText, setInputText] = useState("");

  console.log(inputText)

  useEffect(() => {
    fetch("https://carreuky.github.io/data/shows.json").then((r) => {
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
      <Route path="/" element={<MainContainer data={data} inputText={inputText} setInputText={setInputText}/>} />
      <Route path="/movies" element={<Movies data={data} inputText={inputText} setInputText={setInputText} />} />
      <Route path="/tv" element={<Series data={data} inputText={inputText} setInputText={setInputText}/>} />

      </Routes>
    </BrowserRouter>
   
        
    </div>
  )
}

export default App
