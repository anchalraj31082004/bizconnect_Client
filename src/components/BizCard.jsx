import React from 'react'

const BizCard = ({image, title}) => {
  return (
    <div className='h-36 w-60 text-center'>
        <h1 className='text-2xl font-bold text-slate-200 tracking-wider bg-sky-400 p-20 rounded-lg'>{title}</h1>
    </div>
  )
}

export default BizCard