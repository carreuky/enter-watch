import React,{useState} from "react";

export default function TrendingCrad({ data,inputText }) {
    
  const result = data.filter(data => data.isTrending === true);

  const filteredData =result.filter((el) => {
    if (inputText === '') {
        return el;
    } else {
        return el.title.toLowerCase().includes(inputText)
    }
})

  return (
    <>
          <h1 className='text-4xl '>{filteredData.length === 0 ?'':'Trending' }</h1>
    <div
    id="scrollContainer"
    class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 gap-8  scrollbar-hide"
  >
{filteredData.map((show) => (
  <div class="flex flex-col w-full max-w-sm mx-auto">

  <div class="w-[380px] mt-6 overflow-hidden bg-cover bg-center bg-white rounded-lg shadow-lg " style={{backgroundImage:`url(${show.thumbnail.trending.large})`}}>
      <div className="box-border sm:w-[117px] sm:min-h-[48px] mx-auto sm:mt-[40px] mt-0 min-h-[40px] w-[100px] cursor-pointer flex gap-3 opacity-0 hover:opacity-100 hover:bg-opacity-30 rounded-3xl bg-white justify-center items-center">
            <div>
                <img src="/assets/icon-play.svg" alt=""/>
            </div>
            <span>Play</span>
        </div>
        <div className="flex flex-col mb-0 h-full  pl-3">
            <div className="flex mb-0">
                <p className="text-[12px] mr-3">{show.year}</p>
                <div className="flex w-3 h-3">
                    <img 
                        src={show.category==='Movie' 
                        ? "/assets/icon-category-movie.svg"
                        : "/assets/icon-category-tv.svg"
                        } 
                        alt=""
                    />
                </div>
                <p className="text-[12px] pb-0 mx-3">{show.category}</p>   
                <p className="text-[12px] pb-0">{show.rating}</p>  
            </div>
            <p className="text-[14px] md:text-[18px]">{show.title}</p>   
        </div>
      
  </div>
 
</div>
))}
</div>
</>

  );
}
