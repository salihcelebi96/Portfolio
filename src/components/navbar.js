import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='h-16 flex items-center    bg-gray-200 text-black text-2xl'>
      <ul className='flex gap-10   h-full'>
        <li className='h-full'>
          <Link className='hover:bg-gray-600  hover:text-white flex items-center px-4 h-full' to="/">Home</Link>
        </li>
        <li className='h-full'>
          <Link className='hover:bg-gray-600 hover:text-white flex items-center px-4 h-full' to="/projects">Projects</Link>
        </li>
        <li className='h-full'>
          <Link className='hover:bg-gray-600 hover:text-white flex items-center px-4 h-full' to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
