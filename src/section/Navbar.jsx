import React from 'react'
import { NavLink } from 'react-router-dom'
import Link from 'react-scroll/modules/components/Link'

export default function Navbar() {



    return (
        <nav class="flex justify-start py-4 px-20 mx-auto bg-white  drop-shadow-lg">
            <div class="flex items-center mr-80">
                <NavLink to="/">

                    <img src="/src/assets/images/logo-smd.png" alt="" />
                </NavLink>
            </div>
            <div class="items-center text-gray-500 font-sans text-xl space-x-8 lg:flex cursor-pointer">

                <Link activeClass="active" to="lalulintas" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-green-600 ">Lalu Lintas</Link>

                <Link activeClass="active" to="sarana" spy={true} smooth={true} offset={-50} duration={500} className="hover:text-green-600">Sarana Prasarana</Link>

                <Link activeClass="active" to="pariwisata" spy={true} smooth={true} offset={-50} duration={1000} className="hover:text-green-600">Pariwisata</Link >

            </div>
            <div class="flex md:hidden items-center space-x-2">
                <button class="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                    Sign in
                </button>

            </div>
        </nav>


    )
}
