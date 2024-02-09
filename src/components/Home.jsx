import Momo from '../assets/momo.jpg'
import { IoIosArrowForward } from "react-icons/io";
// import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'


function Home() {

  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black '>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full '>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>I&rsquo;m a front-end web Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have one year of experience building and designing software.
            Currently, I love to work on web applications using technologies like .
            <span className='text-xl text-red-600 font-bold'>
              <Typewriter
                words={['HTML', 'CSS', 'JavaScript', 'REACT', 'Tailwindcss']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div>
            <Link to='Portoflio' smooth duration={300} className='group cursor-pointer flex text-white items-center w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <IoIosArrowForward size={20} className="ml-1x" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Momo} alt="My picture" className='rounded-[30px] w-4/6 mx-auto' />
        </div>
      </div>
    </div>
  );
}

export default Home
