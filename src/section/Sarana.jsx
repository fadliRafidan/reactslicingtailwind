import React from 'react'
import { NavLink } from 'react-router-dom'
import SaranaContent from '../components/SaranaContent'



export default function Sarana() {
    return (
        <div className='mt-3 px-10' id='sarana'>

            <div className="container justify-center text-center text-3xl font-sans font-medium
                text-[#3F3D56]">
                Sarana Prasarana Pendukung Perjalanan Mudik
                <p className='text-xl  text-[#8B8B8B] font-sans leading-7 h-14 w-[509px] mx-auto'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere viverra sit est egestas tristique.</p>

            </div>

            <div className='grid grid-cols-4' >

                <NavLink to="/lokasimacet">
                    <SaranaContent
                        content={{
                            img: "/src/assets/images/fotomacet.png",
                            title: "Lokasi Macet",
                        }}
                    />
                </NavLink>
                <NavLink to="/lokasirawan">
                    <SaranaContent
                        content={{
                            img: "/src/assets/images/fotokecelakaan.png",
                            title: "Rawan Kecelakaan",
                        }}
                    />

                </NavLink>
                <NavLink to="/jalanalternatif">
                    <SaranaContent
                        content={{
                            img: "/src/assets/images/jalanalternatif.png",
                            title: "Jalan Alternatif",
                        }}
                    />
                </NavLink>
                <NavLink to="/kondisijalan">
                    <SaranaContent
                        content={{
                            img: "/src/assets/images/kondisijalan.png",
                            title: "Kondisi Jalan",
                        }}
                    />
                </NavLink>
            </div>




        </div>
    )
}
