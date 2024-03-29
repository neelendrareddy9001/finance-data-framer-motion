import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>REACT.</h1>
        <ul className='flex'>
            <li className='p-4 cursor-pointer'><Link to='hero'></Link>Home</li>
            <li className='p-4 cursor-pointer'><Link to='analytics'></Link>Company</li>
            <li className='p-4 cursor-pointer'><Link to='newsletter'></Link>Resources</li>
            <li className='p-4 cursor-pointer'><Link to='cards'></Link>About</li>
            <li className='p-4 cursor-pointer'><Link to='footer'></Link>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'><Link to={'/hero'}></Link>Home</li>
            <li className='p-4 border-b border-gray-600'><Link to={'/analytics'}></Link>Company</li>
            <li className='p-4 border-b border-gray-600'><Link to={'/newsletter'}></Link>Resourses</li>
            <li className='p-4 border-b border-gray-600'><Link to={'/cards'}></Link>About</li>
            <li className='p-4 border-b border-gray-600'><Link to={'/footer'}></Link>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
