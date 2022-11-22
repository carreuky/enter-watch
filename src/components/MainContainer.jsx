import React,{useEffect,useState} from "react";
import Trending from "./Trending";

export default function MainContainer() {
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
    <div className="md:mx-8 text-white  ">
      <form className="flex grow pb-6 md:pb-4 lg:mt-9  ">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
            fill="#FFF"
          />
        </svg>
        <input
          className="bg-[#10141e] text-white  md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none hover:border-b border-app-dark-blue bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </form>
      <Trending data={data}/>
    </div>
  );
}
