import React from "react";

export default function Recommend({ data }) {

    const result = data.filter(data => data.isTrending === false);
 console.log(result)
  return (
    <div>
      <h1 className="text-4xl">Recommended for you.</h1>
      {result.map((show) => (

      <div className="flex flex-col relative rounded-md ">
        <div className="group flex items-center justify-center absolute z-50 w-6 h-6 bg-black/75 rounded-full m-1 left-32 md:left-52 lg:left-64 hover:bg-white cursor-pointer">
          <div className="flex w-3 h-3">
            <img src="/static/icon-bookmark-empty.svg" alt="" />
          </div>
        </div>
        <div className="group w-40 md:w-60 lg:w-72">
          <div
            className="absolute bg-black/40 z-30 flex flex-1 justify-center items-center w-full opacity-0 group-hover:opacity-100 box-content pb-1 md:py-1 lg:py-3 ${
           h-24 md:h-36 lg:h-40"
          >
            <div className="box-border sm:w-[117px] sm:min-h-[48px] mx-auto sm:mt-[40px] mt-0 min-h-[40px] w-[100px] cursor-pointer flex gap-3 opacity-0 hover:opacity-100 hover:bg-opacity-30 rounded-3xl bg-white justify-center items-center">
              <div>
                <img src="/assets/icon-play.svg" alt="" />
              </div>
              <span>Play</span>
            </div>
          </div>
          <img
            src={show.thumbnail.regular.medium}
            alt={show.title}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg w-[280px] h-[174px]"
          />
        </div>

        <div>
          <span className="font-light opacity-80 text-md text-sm md:text-md lg:text-lg">
            {show.year} &#8226;{" "}
            <div className="flex w-3 h-3">
              <img
                src={
                  show.category === "Movie"
                    ? "/assets/icon-category-movie.svg"
                    : "/assets/icon-category-tv.svg"
                }
                alt=""
              />
            </div>{" "}
            {show.category} &#8226; {show.rating}
          </span>
          <p className="text-sm md:text-xl lg:text-2xl">{show.title}</p>
        </div>
      </div>
      ))}
    </div>
  );
}
