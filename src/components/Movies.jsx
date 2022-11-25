import React from 'react'
import InputSearch from './InputSearch';
import RecommendCard from './RecommendCard';

export default function Movies ({data,inputText,setInputText}) {
    console.log(inputText)
    const result = data.filter(data => data.category === 'Movie');

    const filteredData =result.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.title.toLowerCase().includes(inputText)
        }
    })
    return (
        <div className="font-poppins md:mx-8 text-white  ">
            <InputSearch setInputText={setInputText}/>

            <h1 className="text-4xl my-4">{filteredData.length === 0 ?'No Movie Found.':`${inputText ? `Result for ${inputText}`:'' }`}</h1>


            <div className="flex flex-wrap gap-4 mt-3 cursor-pointer">
        {filteredData.map((show) => (
          <RecommendCard show={show}/>
        ))}
      </div>
        </div>
    )
}
