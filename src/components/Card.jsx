import React from 'react'

const Card = ({item}) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-sky-500 rounded-xl px-16 py-10 mx-16 text-slate-200">
    <h1 className="text-lg font-bold tracking-wide">{item?.name}</h1>
    <p className="text-sm font-medium">{item?.type}</p>
    <p className="text-sm font-medium">{item?.contactPhone}</p>
  </div>
  )
}

export default Card;