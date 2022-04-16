import React from 'react'

export default function SaranaContent(props) {
    return (


        <div className="h-[150px] w-[250px] bg-white shadow-2xl rounded-xl items-center justify-center text-center inline-grid p-3 mx-auto mt-11 relative group hover:bg-[#00A859]
        transition duration-300 cursor-pointer
        ">
            <img src={props.content.img} alt="" className='rounded-full h-20 w-20' />


            <div className="mx-auto ">
                <p className='text-[15px] text-[#00A859] font-sans font-medium mt-2 absolute inset-x-0 bottom-3 group-hover:text-white'>{props.content.title}
                </p>
            </div>


        </div>




    )
}
