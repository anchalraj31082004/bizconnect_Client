import React from 'react'

const BizCard = ({image, title}) => {
  return (
    <div className='h-36 w-80 text-center '>
        <h1 className='text-2xl font-bold text-slate-200 tracking-wider bg-sky-400 shadow-md shadow-black hover:shadow-sky-500 hover:shadow-2xl duration-300 hover:bg-slate-700 transition-all  p-20 rounded-lg '>{title}</h1>
    </div>
  )
}

export default BizCard