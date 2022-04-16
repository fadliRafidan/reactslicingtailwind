import React from 'react'
import { NavLink } from 'react-router-dom'
import InfoLalulintasContent from '../components/InfoLalulintasContent'

export default function InfoLalulintas() {
    return (
        <div className='mx-auto mt-14 px-10' id='lalulintas'>
            <div className="container justify-center text-center text-3xl font-sans font-medium
                text-[#3F3D56]">
                Informasi Lalu Lintas
                <p className='text-xl  text-[#8B8B8B] font-sans leading-7 h-14 w-[509px] mx-auto'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='grid grid-cols-4  '>


                <NavLink to="/spbu">
                    <InfoLalulintasContent
                        content={{
                            img: "/src/assets/images/spbu.png",
                            title: "SPBU"
                        }}

                    />
                </NavLink>
                <NavLink to="/bengkel">
                    <InfoLalulintasContent
                        content={{
                            img: "/src/assets/images/bengkel.png",
                            title: "Bengkel"
                        }}

                    />
                </NavLink>

                <NavLink to="/minimarket">
                    <InfoLalulintasContent
                        content={{
                            img: "/src/assets/images/minimarket.png",
                            title: "Mini Market"
                        }}

                    />
                </NavLink>

                <NavLink to="/atm">
                    <InfoLalulintasContent
                        content={{
                            img: "/src/assets/images/atm.png",
                            title: "ATM"
                        }}

                    />
                </NavLink>
            </div>

            <div className="flex justify-center gap-10">
                <div className="">

                    <NavLink to="/masjid">
                        <InfoLalulintasContent
                            content={{
                                img: "/src/assets/images/masjid.png",
                                title: "Masjid"
                            }}
                        />
                    </NavLink>
                </div>
                <div className="">


                    <NavLink to="/terminal">
                        <InfoLalulintasContent
                            content={{
                                img: "/src/assets/images/terminal.png",
                                title: "Terminal"
                            }}
                        />

                    </NavLink>
                </div>
            </div>


        </div>
    )
}
