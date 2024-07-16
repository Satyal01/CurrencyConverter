import React, { useEffect, useState } from 'react'
import InputBox from "./InputBox.jsx";
import { IoIosSwap } from "react-icons/io";
import AmoundSelect from './AmountSelect.jsx';


const App = () => {
  const [ Amount, setAmount] = useState(1);
  const [Currencies , setCurrencies] = useState([]);
  const [From, setFrom] = useState("USD");
  const [To, setTo ] = useState("INR")
  const [Result, setResult ] = useState("");
  const [isLoading , setisLoading ] = useState(false);

  useEffect(()=>{
    fetch("https://api.frankfurter.app/currencies").then(
      (res)=> res.json()
    ).then((data )=> {
      setCurrencies(Object.keys(data))
    }).catch(
      (err)=> console.log(err.message)
    )

    
    // console.log(Currencies);
  },[])
  
  function handleSwap(){
    setTo(From);
    setFrom(To);

  }

  const handleConvert =  ()=> {
    // https://api.frankfurter.app/latest?amoutn=1&from=USD&to=INR 
    if(!Result) setisLoading( (perv ) => !perv)
    fetch(`https://api.frankfurter.app/latest?amount=1&from=${From}&to=${To}`).then(
      (res)=> res.json()
    ).then((data)=> {
      // console.log(data?.rates?.[To]+To);
      setResult((data?.rates?.[To] * Amount)+" " + To)
      // console.log(Result , "resutl");
    }).catch(
      (err) => console.log(err.message)
    )
    setisLoading((perv)=> !perv)
  }
  
  return (
    <div className='h-screen bg-slate-200 text-white flex flex-col justify-center items-center '>
      <div className='h-auto w-5/12 bg-white rounded-lg shadow-gray-400 shadow-md text-black pt-3 px-3' 
       >
        <h1 className='text-3xl  font-pop mb-5'>Currency Converter</h1>
        <div className=' grid grid-cols-1 place-items-center justify-center gap-4 sm:grid-cols-3'>
          <InputBox label="From" list={Currencies} setCurrencies={setCurrencies} setOption={setFrom} defaultSelect={From} />
          <IoIosSwap onClick={handleSwap} size={38} className='bg-slate-200 rounded-full self-end p-2 hover:bg-slate-300' />    
          <InputBox label="To" list={Currencies} setCurrencies={setCurrencies} setOption={setTo}  defaultSelect={To} />
        </div>
        <AmoundSelect amount={Amount} setAmount={setAmount} />  
        <div className='m-5   flex flex-col gap-2  items-end'>
          <button onClick={handleConvert} className={` w-24 h-10 rounded-lg bg-indigo-500  text-white  hover:bg-indigo-700 ${ isLoading ? "animate-pulse " : ""} `}>Convert</button>
          {
            Result &&
            <div className='text-green-400 font-pop text-md '> Converted Amount : { Result} </div>
          }
          {/* { isLoading ? <p>Result : {Result * Amount}</p> : <p></p>  } */}
        </div>

      </div>
      
    </div>
  )
}

export default App
