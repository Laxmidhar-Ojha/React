import InputBox from './components/InputBox';
import './App.css'
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App=()=>{
   const [amount,setAmout]=useState(0);
   const[from,setFrom]=useState("usd");
   const [to,setTo]=useState("inr");
   const [convertedAmount,setConvertedAmout]=useState(0);

   const currencyInfo=useCurrencyInfo(from);

   const options=Object.keys(currencyInfo);

   const swap=()=>{
      setTo(from);
      setFrom(to);
      setConvertedAmout(temp);
      setAmout(convertedAmount);
   }
   const convert=()=>{
      setConvertedAmout(amount*currencyInfo[to]);
   }

   return <div className='w-full h-screen flex flex-col items-center justify-center'>
      <form className='w-2/6' onSubmit={(e)=>{e.preventDefault()
         convert();
      }}>
         <InputBox
          label="From" 
          amount={amount} 
          onAmountChange={(currency)=>setAmout(currency)}
          onCurrencyChange={(currency)=>setFrom(currency)}
          currencyOptions={options}
          selectCurrency={from}
         />
         <button className='px-auto w-full bg-amber-500 rounded-2xl' onClick={swap}>Swap</button>
          <InputBox
          label="To" 
          amount={convertedAmount} 
          onCurrencyChange={(currency)=>setTo(currency)}
          currencyOptions={options}
          selectCurrency={to}
         />
         <button type="submit" className='px-auto w-full bg-blue-500 rounded-2xl'>Convert</button>

      </form>
   </div>
}
   

export default App;