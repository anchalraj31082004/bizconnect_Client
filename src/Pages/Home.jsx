import React from 'react'
import BizCard from '../components/BizCard'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-16'>
        <section className='flex flex-col gap-5'>
            <h1 className='font-bold text-5xl text-sky-500'>Welcome to BizConnect</h1>
            <p className='font-light max-w-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint consectetur nihil obcaecati iure aliquid expedita porro natus, repudiandae molestiae.</p>
        </section>
        <section className='flex items-center gap-20'>
            <Link to={`/listing/${`volunteers`}`}>
            <BizCard title={`Hire Volunteers`} image={``}/>
            </Link>
            <Link to={`/listing/${`smallBusinesses`}`}>
            <BizCard title={`Show Bussinesses`} image={``}/>
            </Link>
        </section>
    </main>
  )
}

export default Home