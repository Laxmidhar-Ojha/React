import { useState , useEffect,useRef} from 'react';
import './App.css'

function App() {
  let [length,setLength]= useState("8");
  let [ifNumber,setIfNumber]=useState(false);
  let [ifChar,setIfChar]=useState(false);
  let [passWord,setPassWord]=useState("");
  
  const passWordRef=useRef(null);

  let getPassWord=()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(ifNumber)str+="0123456789";
    if(ifChar)str+="!@#$%^&*()-+:;',.><?/{}[]`~="
    for(let i=0;i<length;i++){
      let idx=Math.floor(Math.random()*str.length);
      pass+=str.charAt(idx);
    }
    setPassWord(pass);
  };
  useEffect(()=>{
    getPassWord()
  },[ifNumber,ifChar,length]);

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(passWord);
    passWordRef.current?.select();
  }

  return (
   <div className='w-full h-screen bg-emerald-600 '>
    <div className='w-2/4 bg-gray-700 absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
      <h1 className='text-white text-3xl'>Password Generator</h1>
      <div className=' my-10 flex justify-center'>
        <input type="text" ref={passWordRef} defaultValue={passWord} className='passwordField w-2/3 bg-white text-2xl outline-none rounded-sm px-5'/>
        <button className='bg-blue-500 rounded-sm text-2xl hover:bg-blue-700' onClick={copyPassword}>COPY</button>
      </div>
      <div className='my-10 flex justify-center'>
          <input type="range" min="8" max="100" defaultValue={8} onChange={(e)=>{setLength(e.target.value)}} />
          <p className='text-white m-2'>Length({length})</p>
          <input type="checkbox" className="text-white mx-" onChange={()=>setIfNumber(prev=>!prev)}/>
          <p className='text-white m-2'>Number</p>
          <input type="checkbox" className="text-white mx-" onChange={()=>setIfChar(prev=>!prev)}/>
          <p className='text-white m-2'>Character</p>
      </div>
    </div>

   </div>
  )
}

export default App
