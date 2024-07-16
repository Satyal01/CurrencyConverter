import React from 'react'
import { CiStar } from "react-icons/ci";

const InputBox = ({label, list , setCurrencies, setOption, defaultSelect}) => {

    function handleChnage(e){
        setOption( e.target.value);
    }


  return (
    <div className='flex flex-col w-full gap-2 pt-2 px-2'>
      <label htmlFor="">{label}:</label>
      <select name="" id=""  value={defaultSelect} onChange={handleChnage} className='w-full h-10 bg-gray-200 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-700'> 
        {
            list.map((curr)=>{
                return (<option value={curr} key={curr} >{curr}</option>  )
            })
        }
        <hr />
        
      </select>
    </div>
  )
}

export default InputBox
