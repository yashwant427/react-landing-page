import { useEffect, useState } from "react"
import Background from "./Componetns/Background/background";
import Navbar from "./Componetns/Navbar/Navbar";
import Hero from "./Componetns/Hero/Hero";

function App() {
    let heroData=[
        {text1:"Dive Info",text2:"What you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"Your passions"},
    ]
    const[heroCount,setHeroCount]=useState(0);
    const[playStatus,setPlayStatus]=useState(false);


    useEffect(()=>{
      setInterval(()=>{
           setHeroCount((count)=>{ return count===2? 0:count+1})
      },3000);
    },[]);
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
    </div>
  )
}

export default App
