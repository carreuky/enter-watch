import React from "react";
import RecommendCard from "./RecommendCard";

export default function Recommend({ data,inputText}) {
  const result = data.filter((data) => data.isTrending === false);
  const filteredData =result.filter((el) => {
    if (inputText === '') {
        return el;
    } else {
        return el.title.toLowerCase().includes(inputText)
    }
})
  return (
    <div>
      <h1 className="text-4xl lg:my-4 my-2">{filteredData.length === 0 ?'':'Recommended for you.' }</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
        {filteredData.map((show) => (
          <RecommendCard show={show}/>
        ))}
      </div>
    </div>
  );
}
