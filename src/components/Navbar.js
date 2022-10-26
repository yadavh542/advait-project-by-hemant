import React, { useState } from 'react';
import {
    PhoneIcon,
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import SingleMenu from './SingleMenu';

const Navbar = () => {
    const[langBoxOpen, setLangBoxOpen] = useState(false);
    const[menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex bg-orange-700 justify-between h-auto'>

        {/* Left Side Nav */}
        <div className='items-center justify-center flex'>
            <img 
            src='https://acharyaprashant.org/images/ic_aplogo.png'
            className='h-8 w-8 rounded-full my-1 min-[320px]:ml-4 md:ml-7 mr-3 cursor-pointer'
            />

            <ul className='text-white font-semibold min-[320px]:hidden md:flex'>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>Home</li>
                <li className='bg-orange-500 px-4 py-3 cursor-pointer'>Video Courses</li>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>His Books</li>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>Donate</li>
            </ul>
        </div>

        {/* Right Side Nav */}
        <div className='items-center justify-center flex'>
            <ul className='text-white min-[320px]:mr-4 md:mr-7 flex justify-center items-center'>

                <div 
                onClick={e=>setLangBoxOpen(!langBoxOpen)}
                className='flex px-2 justify-center items-center'>
                    <button className='rounded-sm border-2 text-xs px-1 py-0.5 mr-1'>EN</button>
                    <ChevronDownIcon 
                    className='h-5 text-white font-bold cursor-pointer'
                    />
                </div>

                {/* Language Popup dropdown */}
                {langBoxOpen && 
                <div 
                className='h-20 w-24 absolute right-[140px] min-[320px]:top-9 md:top-10 rounded-md bg-white font-semibold border-1 border-gray-200 shadow-md'>
                    <p className='p-2 hover:bg-gray-200 cursor-pointer text-orange-500'>English</p>
                    <p className='p-2 hover:bg-gray-200 cursor-pointer text-black'>Hindi</p>
                </div>}

                    <PhoneIcon
                    className='h-5 px-2 cursor-pointer'
                    />

                    <button className='text-xs rounded-md px-1 py-0.5 md:hidden border-2'>Donate</button>

                    <Bars3Icon 
                    onClick={e=>setMenuOpen(!menuOpen)}
                    className='h-5 pl-2 cursor-pointer font-bold'
                    />


                <li 
                onClick={e=>setMenuOpen(!menuOpen)}
                className='px-2 cursor-pointer min-[320px]:hidden md:flex'>Menu</li>

                {/* Right Side Menu Expand Div  */}

                {menuOpen && 
                    <div className='h-screen min-[320px]:w-full sm:w-[380px] fixed right-0 top-0 overflow-x-hidden transition duration-700 flex'>
                    <XMarkIcon 
                    onClick={e=>setMenuOpen(!menuOpen)} 
                    className="p-2 rounded-full bg-white text-black hover:text-orange-500 font-bold z-50 h-8 cursor-pointer"/>
                    
                    {/* Menu Bar Content */}

                    <div className=' bg-white text-black h-screen min-[320px]:w-full sm:w-[380px]
                     shadow-md pt-8 px-2 transition duration-500 overflow-y-auto overflow-x-hidden'>
                        
                        <div className='flex items-center cursor-pointer ml-2'>
                            <UserCircleIcon className='text-orange-500 hover:text-orange-700 h-10'/>
                            <p className='text-orange-500 hover:text-orange-700 text-lg font-semibold ml-2'>Login</p>
                        </div> <br/>
                        <hr/>

                        <SingleMenu title="Video Courses"/>
                        <SingleMenu title="His Books"/>
                        <SingleMenu title="AP Circle"/>
                        <SingleMenu title="Contact Us"/>
                        <SingleMenu title="Donate"/><br/>

                        <hr/>
                        <h2 className='text-sm font-bold px-4 py-2 text-gray-600'>MORE</h2>
                        <SingleMenu title="Prashant Advait Foundation"/>
                        <SingleMenu title="Vedant Mahotsav"/>
                        <SingleMenu title="Gita Course"/>
                        <SingleMenu title="Tals with Acharya Prashant"/>
                        <SingleMenu title="Ghar Ghar Upnishad"/>
                        <SingleMenu title="About Acharya Prashant"/>
                        <SingleMenu title="Media and Public Interaction"/><br/>

                        <hr/>
                        <h2 className='text-sm font-bold px-4 py-2 text-gray-600'>EXPLORE CATEGORIES</h2>
                        <SingleMenu title="Vedant - Upnishads"/>
                        <SingleMenu title="Vedant - Bhagavad Gita"/>
                        <SingleMenu title="Other Scriptures"/>
                        <SingleMenu title="Saints and Masters"/>
                        <SingleMenu title="Other Streams"/>
                        <SingleMenu title="Life Questions"/><br/>
                        <hr/>
                        <SingleMenu title="Technical Support"/>

                    </div>

                    </div>
                }

            </ul>
        </div>
    </div>
  )
}

export default Navbar