import React from 'react'

export default function RecommendCard({show}) {
  
  return (
<div className="rounded-md ">
            <img
              src={show.thumbnail.regular.large}
              alt={show.title}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg lg:w-[362px] h-[200px] md:w-[280px]"
            />
            {/* <div className="px-4 py-2 box-border sm:w-[117px] sm:min-h-[48px] mx-auto sm:mt-[40px] mt-0 min-h-[40px] w-[100px] cursor-pointer flex gap-3 opacity-0 hover:opacity-100 hover:bg-opacity-30 rounded-3xl bg-white justify-center items-center">
            <div>
                <img src="/assets/icon-play.svg" alt=""/>
            </div>
            <span>Play</span>
        </div> */}
            <div>
              <span className="flex font-light opacity-80 text-md text-sm md:text-md lg:text-lg">
                {show.year} &#8226;
                <div className=" w-6 h-6 mt-2 ml-2">
                  <img
                    src={
                      show.category === "Movie"
                        ? "/assets/icon-category-movie.svg"
                        : "/assets/icon-category-tv.svg"
                    }
                    alt=""
                  />
                </div>
                {show.category} &#8226; {show.rating}
              </span>
              <p className="text-sm md:text-xl lg:text-2xl">{show.title}</p>
            </div>
          </div>  )
}
