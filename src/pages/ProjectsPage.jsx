import React from 'react'
import { useEffect } from 'react'
import pingProjectImage from "../img/project1.png"
import learnProjectImage from "../img/project2.png"

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="flex flex-col md:flex-wrap">
            <div className="flex flex-col md:flex-row-reverse">
                <div className="flex hover:border-2 hover:border-sunnySkyBlueHover md:w-1/2">
                    <a href="https://xsiris.github.io/PingComingSoonPage/" target="_blank"><img className="hover:animate-pulse md:w-full" src={window.innerWidth < 768 ? pingProjectImage : pingProjectImage} alt='transform' /></a>
                </div>
                <div className="flex hover:border-2 hover:border-sunnySkyBlueHover md:w-1/2">
                    <a href="https://xsiris.github.io/SignupForm/" target="_blank"><img  className="hover:animate-pulse md:w-full" src={window.innerWidth < 768 ? learnProjectImage : learnProjectImage} alt='transform' /></a>
                </div>
            </div>
            <div className="flex flex-col bg-sunnyOffWhite md:w-full md:justify-center md:flex-row"> 
                <div className="px-6 bg-sunnyOffWhite py-6 flex flex-col items-center justify-center md:w-1/2 md:p-10 lg:p-20">
                    <h1 className="font-Fraunces mt-10 text-3xl text-sunnyVeryDarkDesaturatedBlue font-black tracking-widest text-center md:w-full">Stand out to the right audience</h1>
                    <p className="font-Barlow text-sunnyDarkGrayishBlue text-center font-medium text-lg my-10">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                    </p>
                </div>
            </div>
        </div>
  )
}

export default ProjectsPage
