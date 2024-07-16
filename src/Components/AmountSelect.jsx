import React from 'react'

const AmoundSelect = ({amount , setAmount}) => {
  return (
    <div className='flex flex-col mt-5 gap-2 px-2'>
      <label htmlFor="">Amount:</label>
      <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className='h-10  p-2 rounded-lg text-bold  border-2 border-gray-500  focus:outline-indigo-700 ' />
    </div>
  )
}

export default AmoundSelect
