import React from 'react'

const Card = ({item}) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-sky-500 shadow-md hover:scale-110 hover:shadow-lg hover:shadow-black transition-all duration-300 shadow-black rounded-xl px-16 py-10 mx-16 text-slate-200">
    <h1 className="text-lg text-slate-700 font-bold tracking-wide">{item?.name}</h1>
    <p className="text-sm font-semibold">{item?.type}</p>
    <p className="text-sm font-semibold">{item?.contactPhone}</p>
  </div>
  )
}

export default Card;