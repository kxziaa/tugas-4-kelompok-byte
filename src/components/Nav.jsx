import React, {useState} from "react";
import {Link} from  'react-scroll';
import { NavLink } from "react-router-dom";

const Nav = () => {

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return(
        <div className="w-screen h-[70px] bg-transparent drop-shadow-lg fixed">
            <div className=" w-full h-full px-5 sm:px-10 flex justify-between items-center ">
                
                <a href="/" className="text-2xl font-bold">MAHESA.</a>
                <div className="hidden md:block">
                <ul className="flex flex-row justify-between gap-6 lg:gap-12 xl:gap-20 text-[12px] lg:text-[18px] xl:text-[20px] xl:font-semibold">
                  <li>
                    <Link to="alam" spy={true} smooth={true} offset={50} duration={500}>Alam</Link>
                  </li>
                  <li>
                    <Link to="budaya" spy={true} smooth={true} offset={50} duration={500}>Budaya</Link>
                  </li>
                  <li>
                  <Link to="budaya" spy={true} smooth={true} offset={50} duration={500}>Kuliner</Link>
                  </li>
                  <li>
                  <Link to="rekreasi" spy={true} smooth={true} offset={50} duration={500}>Rekreasi</Link>
                  </li>
                  <li>
                    <a href="/Galeri">Galeri</a>
                  </li>
                </ul>
                </div>
                <div className="hidden sm:flex sm:flex-row">
                    <input type="text" 
                        placeholder="Search.." 
                        className="block w-full px-3  py-1 bg-white text-black border rounded-full focus:outline-none focus:ring-indigo-300 focus:ring-opacity-40"/>
                    <button className="px-4 text-white bg-indigo-600 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                        </svg>
                    </button>
                </div>


                <div className="sm:hidden" onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                   }
                </div>
            </div>

            
            <div className={!nav ? 'hidden' : " w-full px-8 pb-4 items-center mt-4 sm:hidden"} >
                <div className=" flex flex-row">
                    <input type="text" 
                        placeholder="Search.." 
                        className="block w-full px-3  py-1 bg-white text-black border rounded-full focus:outline-none focus:ring-indigo-300 focus:ring-opacity-40"/>
                    <button className="px-4 text-white bg-indigo-600 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                        </svg>
                    </button>
                </div>
            </div>
        </div>   
    )
} 

export default Nav ;