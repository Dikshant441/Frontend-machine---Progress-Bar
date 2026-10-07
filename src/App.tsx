// import { useState } from "react";

import { useEffect, useState } from "react";

//  width: `${animatedProgress}%`, => this is not good way if we focus oin performancer becaise it rebder the compemnent and rpaint again and agin  


export const Progressbar = ({ progress } : { progress : number}) => {

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 1000);
  }, [progress]);

  return (
    <div className=" border border-black w-[40%] rounded-2xl overflow-hidden">
      <div
        className={`pl-4 flex justify-end bg-green-500 rounded-2xl
          transition-[width] duration-500 ease-in-out
          ${progress > 4 ? "text-white" : "text-black"}`}
        style={{
          width: `${animatedProgress}%`,
        }}
      >
        <span className="ml-4">{animatedProgress}%</span>
      </div>
    </div>
  )
};


function App() {
  

  const value : number[] = [2,3, 4,  5, 20, 30, 55, 70, 85, 90, 100]

  return (
  <div className="flex flex-col items-center gap-4 mt-10">
    <h1> Progress bar </h1>
    {
      value.map((v) => (
        <Progressbar key={v} progress={v}/>
      ))
    }
  </div>
  )
}

export default App
