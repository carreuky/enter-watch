import React from "react";
import RecommendCard from "./RecommendCard";

export default function Recommend({ data }) {
  const result = data.filter((data) => data.isTrending === false);
  return (
    <div>
      <h1 className="text-4xl my-4">Recommended for you.</h1>
      <div className="flex flex-wrap gap-4">
        {result.map((show) => (
          <RecommendCard show={show}/>
        ))}
      </div>
    </div>
  );
}
