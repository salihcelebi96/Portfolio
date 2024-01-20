import React, { useState } from 'react';
import { screenData } from "../data/dataProjects";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProjectGallery = () => {
  const [showInfo, setShowInfo] = useState(null);

  const handleCardHover = (index) => {
    setShowInfo(index);
  };

  const handleCardLeave = () => {
    setShowInfo(null);
  };

  


  return (
    <div>
      <div className="project-list overflow-hidden  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-3 my-5">
        {screenData.slice().reverse().map((project, index) => (
          <Card
            key={index}
            className="project-card border rounded-lg relative flex justify-center bg-gray-800 gap-10 text-white"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <CardHeader>
              <div className='h-80 w-full p-4'>
                <CardBody className='flex text-2xl justify-center'>
                  <Typography color="blue-gray" className="font-medium mb-2">
                    {project.name}
                  </Typography>
                </CardBody>
                <a className='' href={project.url} target="_blank" rel="noopener noreferrer">
                  <img className='h-full w-full py-5 ' src={project.image} alt={`Proje ${index}`} />
                  <div id='hoverCard' className={`transition-transform ${showInfo === index ? 'translate-y-0  ' : 'translate-y-full '} duration-1000 gap-5 border-none rounded-lg ease-in-out absolute inset-0 bg-gray-800 bg-opacity-90 h-full flex flex-col items-center justify-center px-5 text-xl`} style={{ visibility: showInfo === index ? 'visible' : 'hidden' }}>
                    <div className='flex gap-3'>
                      <div>Tools and Styled :</div>
                      <div>{project.tools}</div>
                    </div>

                    <div>
                      {project.info}
                    </div>
                    <div className='flex justify-center items-center mt-10 gap-5'>
                      <div className='flex justify-center items-center'>
                        <Link to={project.url} target="_blank" rel="noopener noreferrer" className="text-white text-sm py-2 px-2 border-none rounded-md bg-green-600 hover:bg-green-800">
                          Learn More
                        </Link>
                      </div>
                      <div className='flex justify-center items-center'>
                        <Link to={project.sourceCode} target="_blank" rel="noopener noreferrer" className='text-sm py-2 px-2 bg-gray-400 hover:bg-gray-600 border-none rounded-md'>
                          Source Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </CardHeader>

            <CardFooter>
              {/* Footer content */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
