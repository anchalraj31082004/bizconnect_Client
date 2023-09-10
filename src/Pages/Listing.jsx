import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

const Listing = () => {
  const { category } = useParams();
  const { data } = useContext(dataContext);
  const resultData = data && data[category];

  console.log(data);
  return (
    <main id="listing" className="flex flex-col items-center gap-20 py-20">
      <div className="flex flex-col gap-5 items-center ">
        <h1 className="text-5xl text-slate-700 font-bold">{category}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          tempore, vero sint atque veniam dolor?
        </p>
      </div>
      <section className="grid grid-cols-3 grid-rows-3 px-16 gap-10">
        {resultData?.map((item) => (
         <Link to={`/listing/${category}/${item.id}`} key={item?.id}>
          <Card item={item}/>
         </Link>
        ))}
      </section>
    </main>
  );
};

export default Listing;
