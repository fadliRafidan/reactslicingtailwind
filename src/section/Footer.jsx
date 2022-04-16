import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#00A859] h-[168px] w-full mt-14 items-center justify-center text-center inline-flex'>

            <div className='inline-grid text-center'>
                <p className='text-base font-sans font-bold text-white font'>
                    <span className='text-base font-sans font-light text-white'>Build with passion by </span>
                    <em>
                        TAHUNGODING
                    </em></p>

                <a className="mt-4 mb-2 mx-auto flex  space-x-3 text-center">
                    <img src="/src/assets/images/instagram.png" alt="" className='w-6' />
                    <p className='font-sans text-base text-white font-medium'>tahungoding</p>
                </a>
                <a className="mx-auto flex space-x-3 text-center">
                    <img src="/src/assets/images/github.png" alt="" className='w-6' />
                    <p className='font-sans text-base text-white font-medium'>tahungoding</p>

                </a>



            </div>


        </div >
    )
}
