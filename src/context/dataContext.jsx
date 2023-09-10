import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io();

export const dataContext = createContext()

const DataProvider = ({children}) => {

  const [data, setData] = useState();

  const fetchData = async () => {
    const resp = await fetch("http://localhost:8000/api");
    // console.log(resp);
    const result =  await resp.json()
    // console.log(result);
    setData(result)
  }

useEffect(()=>{
  try {
    fetchData()
  } catch (error) {
    console.log(error.message);
  }
},[])


  return (
    <>
      <dataContext.Provider value={{data, socket}}>
        {children}
      </dataContext.Provider>
    </>
  )
}

export default DataProvider