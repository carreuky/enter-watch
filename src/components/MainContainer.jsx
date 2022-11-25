import InputSearch from "./InputSearch";
import Recommend from "./Recommend";
import Trending from "./Trending";

export default function MainContainer({data,inputText,setInputText}) {

    
  return (
    <div className="font-poppins md:mx-8 text-white  ">
      <InputSearch setInputText={setInputText}/>
            <Trending data={data} inputText={inputText}/>
      <Recommend data={data} inputText={inputText}/>
    </div>
  );
}
