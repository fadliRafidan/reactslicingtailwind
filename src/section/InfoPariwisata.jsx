import React from 'react'
import { NavLink } from 'react-router-dom'
import InfoPariwisataContent from '../components/InfoPariwisataContent'

export default function InfoPariwisata() {
    return (
        <div className='mt-14 px-10' id='pariwisata'>

            <div className="container justify-center text-center text-3xl font-sans font-medium
                text-[#3F3D56]">
                Informasi Pariwisata
                <p className='text-xl  text-[#8B8B8B] font-sans leading-7 h-14 w-[509px] mx-auto'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='flex gap-14 justify-center'>


                <div>
                    <NavLink exact to="/wisata">
                        <InfoPariwisataContent
                            content={{
                                img: "/src/assets/images/tempatwisata.png",
                                title: "Tempat Wisata",
                            }}
                        />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/oleholeh">

                        <InfoPariwisataContent
                            content={{
                                img: "/src/assets/images/oleholeh.png",
                                title: "Oleh - oleh",
                            }}
                        />
                    </NavLink>
                </div>
            </div>




        </div>
    )
}
