import React from 'react';
import gif from '../assets/gif.webp';
import { Link } from "react-router-dom";

const Work = () => {
    const offer = [
        "Frontend development (HTML, CSS, Tailwind, Javascript, React, Redux)",
        "Remote or Onsite working",
        "A strong focus on quality and accessibility",
        "An inclusive and friendly work environment"
    ];

    return (
        <div className='py-10 w-full flex gap-5'>
            <div>

            </div>
            <div className='px-5 w-1/2'>
                <img className='w-full' src={gif} alt="Animated GIF" />
            </div>
            <div className='w-1/2 px-5 flex gap-10 flex-col items-center'>
                <div className='flex flex-col gap-10'>
                    <p className='lg:text-3xl sm:text-base'>
                        I have a passion for learning about the things that enjoy in web development. 
                        I created frontend page by using different methods for styling.
                    </p>
                    <p className='text-center'>
                        Also you can visit <Link className='text-orange-500' to="/projects">my project page.</Link>
                    </p>
                </div>
                <div>
                    <h1 className='lg:text-3xl sm:text-xl'>What I can offer/expect at work</h1>
                    <ul className='list-disc list-inside'>
                        {offer.map((item, index) => (
                            <li key={index} className='text-lg'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Work;
