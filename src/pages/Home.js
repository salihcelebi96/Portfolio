import React from 'react'
import background from "../assets/earth.jpg"
import Navbar  from '../components/navbar'
import Me from "../components/me"
import Work from "../components/work";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <div className='h-full  '>
        <div>
        <div className=''>
            <img className='topping' src={background} alt=""/>
        </div>
        <div className='content absolute  sm:text-4xl  md:text-4xl   top-1/3 left-1/2   transform -translate-x-1/2 -translate-y-1/2   text-center  text-white '>
          <p className='hello '>Hello</p>
          <p className='pt-2 pb-6 welcome'>Welcome to My Web Page</p>
          <p className='bolder upword'>On this page, you'll find everything you need to know about me and my work.</p>
        </div>
        </div>
        
        <div className=' sticky top-0 z-10'>
          <Navbar/>
        </div>
        <div>
          <Me/>
        </div>
        <div>
          <Work/>
        </div>

      </div>
    </div>
  )
}

export default Home
