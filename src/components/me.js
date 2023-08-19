import React from 'react';

import setup from "../assets/cm.avif";

const Me = () => {
    const skills = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Javascript', "React", "Redux", "Git"];
    const frontend = ["Bootstrap", "Tailwind", "React", "Styled-Component" , "Sass"];
    return (
        <div>
            <div className='relative  h-[900px] w-full'>
                <div className=' h-80 bg-fixed'>
                    <img className='absolute top-0 left-0  h-full w-full object-cover bg-fixed bg-cover' src={setup} alt="" />
                </div>
                <div className='absolute inset-0 flex justify-around items-center'>
                    <div className='tech flex flex-col gap-1 items-center justify-center rounded-tl-lg outline outline-offset-8   outline-2 border-2 border-black    outline-orange-600 rounded-br-lg   px-7 bg-gray-800 text-white '>
                        <div className='p-4 text-xl flex flex-col gap-8 '>
                            <p className='text-center text-2xl'>TECHNOLOGIES</p>
                            <div className='grid grid-cols-3 gap-3 justify-center items-center  '>
                                {skills.map((skill, index) => (
                                    <p key={index} className='skills border border-green-700 p-2'>{skill}</p>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='h-[360px] w-full flex   py-6 bg-gray-900 text-white  gap-10 '>
                <div className='w-1/2 px-4'>
                    <h1 className='text-center  lg:text-4xl   sm:text-2xl '>To Be a Frontend Developer</h1>
                    <p className='py-4  lg:text-lg  sm:text-base ' >My main focus is building high quality, 
                        and well-designed enterprise products with React.
                         I can use reduxReduxif needed for Global State Management. 
                         I always strive for clean and accessible UI projects. 
                         I also brought my attention to building a scalable design system components library and tools to bring consistency 
                         in UX and tooling across all the different products of the company.</p>
                </div>
                <div className='w-1/2 flex items-center flex-col '>
                    <div>
                    <h1 className='text-center lg:text-4xl sm:text-2xl'>My Toolkit For Frontend Develepment</h1>
                    <ul className='flex flex-col items-start '>
                    {frontend.map((tech, index) => (
                            <li className='list-disc text-xl sm:text-base' key={index}>{tech}</li>
                        ))}
                    </ul>
                    </div>
                   
                </div>
            </div>
        </div>

    );
}

export default Me;
