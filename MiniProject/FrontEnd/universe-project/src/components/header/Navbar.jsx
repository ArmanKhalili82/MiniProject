import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinks = [
        { label: "Home", href: "/"},
        { label: "Students", href: "/students"},
        { label: "Teachers", href: "/teachers"},
        { label: "Courses", href: "/courses"},
        { label: "Enrollments", href: "/enrollments"},
    ]
  return (
    <nav className='sticky bg-gray-400 top-0 z-50 py-3 backdrop-blur-lg'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    {/* <img src={logo} alt="" /> */}
                    <IoSchool size={25} color='white' />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navLinks.map((item, index)=> (
                        <li to={index}>
                            <Link className='hover:bg-blue-700 px-3 py-1 rounded-lg hover:border-b border-white hover:text-white' to={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <h2>Welcome</h2>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggle}>
                        {drawerOpen ? <IoMdCloseCircleOutline size={30} /> : <GiHamburgerMenu size={30} />}
                    </button>
                </div>
            </div>
            {drawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center
                     items-center lg:hidden'>
                        <ul>
                            {navLinks.map((item, index) => (
                                <li key={index} className='py-4 text-white'>
                                    <Link className='hover:bg-blue-700 px-3 py-1 rounded-lg hover:border-b border-white hover:text-white' to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar