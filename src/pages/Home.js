import React from 'react'
import background from "../assets/earth.jpg"
import Navbar  from '../components/navbar'
import Me from "../components/me"
import Work from "../components/work";

const Home = () => {
  return (
    <div>
      <div className='h-screen'>
        <div>
            <img  src={background} alt=""/>
        </div>
        <div className='content absolute lg:text-3xl xl:text-5xl  md:text-lg   sm:text-xl   top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
          <p>Hello</p>
          <p className='pt-2 pb-6 '>Welcome to My Web Page</p>
          <p>On this page, you'll find everything you need to know about me and my work.</p>
        </div>
        <div>
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
