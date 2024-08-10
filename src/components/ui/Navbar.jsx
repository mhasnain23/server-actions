import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className=" bg-white bg-opacity-10 backdrop-blur-lg shadow-md">
                <div className="flex flex-wrap items-center justify-around mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#e3e3e3]">User Management</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link href={"/"} className="block py-2 px-3 rounded transition-[0.2s] ease-in-out text-gray-300 hover:text-white hover:font-bold">Home</Link>
                            </li>
                            <li>
                                <Link href={"/about"} className="block py-2 px-3 rounded transition-[0.2s] ease-in-out text-gray-300 hover:text-white hover:font-bold">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
