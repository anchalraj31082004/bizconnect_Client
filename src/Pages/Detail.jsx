import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { dataContext } from "../context/dataContext";
import ChatPage from "../components/ChatPage";

const Detail = () => {
  const urlSplit = useLocation().pathname.split("/");
  // const listing = urlSplit[1]
  const category = urlSplit[2];
  const id = urlSplit[3];

  const { data, socket } = useContext(dataContext);

  const volunteer =
    data && data[category].find((volunteer) => volunteer.id === parseInt(id));
  console.log(volunteer);

  return (
    <main className="grid grid-cols-3 min-h-screen">
      <section className="col-span-1 flex flex-col items-start gap-1">
        <div className="ml-5 mt-4">
          <img
            src={volunteer?.image}
            className="rounded-2xl  drop-shadow-lg h-44 w-52 object-cover object-center"
            alt="image"
          />
        </div>
        <div className="flex flex-col items-start gap-10 mt-12 bg-slate-700 text-white w-full h-full pl-5 pt-4">
          <h2 className="text-3xl font-extrabold tracking-wider">
            {volunteer?.name}
          </h2>
          <div className="flex flex-col items-start gap-5 text-base font-light tracking-wider">
            <p>{volunteer?.bio}</p>
            <p>{volunteer?.expertise}</p>
            <p>{volunteer?.contactEmail}</p>
            <p>{volunteer?.contactPhone}</p>
            <p>{volunteer?.location}</p>
          </div>
        </div>
      </section>
      <section className="col-span-2 bg-slate-200 text-slate-100">
        <ChatPage socket={socket}/>
      </section>
    </main>
  );
};

export default Detail;
