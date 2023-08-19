import React from 'react';
import { screenData } from "../data/dataProjects"
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

const ProjectGallery = () => {
  return (
    <div>
      <div className="project-list   grid grid-cols-4 gap-5 mx-3 my-5">
        {screenData.map((project, index) => (
          <Card key={index} className="project-card border flex justify-center bg-gray-800 gap-10 text-white ">
            <CardHeader>
              <div className='h-80 w-full  p-4     '>
                <CardBody className=' flex text-2xl justify-center'>
                  <Typography color="blue-gray" className="font-medium mb-2">
                    {project.name}
                  </Typography>
                </CardBody>
                <a className='' href={project.url} target="_blank" rel="noopener noreferrer">
                  <img  className='h-full w-full py-5 ' src={project.image} alt={`Proje ${index}`} />
                </a>
              </div>

            </CardHeader>

            <CardFooter>
              {/* Kart altbilgi */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;