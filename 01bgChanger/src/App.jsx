import { useState } from "react";
const App=()=> {
  const [color,setColor]=useState('black');
  return  (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="flex flex-wrap h-10 fixed bottom-12 justify-center 
      inset-x-0 px-2 rounded-2xl ">
        <div className="bg-white rounded-3xl flex flex-wrap gap-5 px-3 py-3 justify-center">
          <button className="bg-red-500 text-white text-2xl px-5 py-2 rounded-2xl "
          onClick={()=>setColor('red')}>red</button>
          <button className="bg-green-500 text-white text-2xl px-5 py-2 rounded-2xl "
          onClick={()=>setColor('green')}>green</button>
          <button className="bg-blue-500 text-white text-2xl px-5 py-2 rounded-2xl "
          onClick={()=>setColor('blue')}>blue</button>
          
        </div>
      </div>
    </div>
  )
}
  

export default App