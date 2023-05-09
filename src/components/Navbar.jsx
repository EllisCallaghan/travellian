import {useState} from 'react'

import {close,logo,menu} from "../images";
import {navLinks} from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full max-w-[100vw] flex py-[32px] justify-between items-center px-[182px] xl:px-[32px]'>
      <img src={logo} alt="hoobank" className='max-w-[234px] sm:w-[140px] lg:w-[140px] max-h-[45.61px] sm:h-[27.52px]'/>

      <ul className='list-none flex md:hidden justify-start items-center  '>
        {navLinks.map((nav,index) => (
          <li
            key={nav.id}
            className={`link-underline decoration-primary font-poppins font-weight-500 leading-[23.7px] cursor-pointer text-[20px] ${index === navLinks.length-1? 'mr-0' : 'mr-10'} text-white `}
          >
            <a href={`#${nav.id}`} className=''>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='h-[64px] justify-center items-start flex md:hidden'>
        <button className='text-[20px] font-weight-[400] leading-[23.7px] text-white px-[32px] py-[20px]'>
          Login
        </button>
        <button className=' text-[20px] font-weight-[400] leading-[23.7px] text-white border border-primary hover:border-secondary bg-primary hover:bg-secondary ease-in-out duration-500 rounded-xl px-[32px] py-[20px]'>
          Sign Up
        </button>
      </div>
      <div className='hidden md:flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className='w-[50px] h-[50px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav,index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1? 'mb-0' : 'mb-4'} text-white `}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar