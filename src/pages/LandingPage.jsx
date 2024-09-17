import React, { useEffect } from 'react'
import downArrow from "../img/icon-arrow-down.svg"
import eggImage from "../img/mobile/image-transform.jpg"
import cupImage from "../img/mobile/image-stand-out.jpg"
import marcusImage from "../img/marcus.jpg"
import milkImage from "../img/mobile/image-gallery-milkbottles.jpg"
import orangeImage from "../img/mobile/image-gallery-orange.jpg"
import coneImage from "../img/mobile/image-gallery-cone.jpg"
import sugarCubesImage from "../img/mobile/image-gallery-sugar-cubes.jpg"

import eggImageDesktop from "../img/desktop/image-transform.jpg"
import cupImageDesktop from "../img/desktop/image-stand-out.jpg"
import milkImageDesktop from "../img/desktop/image-gallery-milkbottles.jpg"
import orangeImageDesktop from "../img/desktop/image-gallery-orange.jpg"
import coneImageDesktop from "../img/desktop/image-gallery-cone.jpg"
import sugarCubesImageDesktop from "../img/desktop/image-gallery-sugarcubes.jpg"

import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <div className="flex flex-col items-center justify-center px-6 bg-sunnyBgOrange md:bg-sunnyBgOrangeDesktop bg-bottom bg-cover">
            <h1 className="font-Fraunces mt-10 text-5xl text-white font-bold tracking-widest text-center">We Are Creatives</h1>
            <div className="mt-12 mb-32 md:mb-80">
                <img className="animate-bounce" src={downArrow} alt='down-arrow' />
            </div>
        </div>
        <div className="flex flex-col md:flex-wrap">
            <div className="flex flex-col md:flex-row-reverse">
                <div className="flex md:w-1/2">
                    <img className="md:w-full" src={window.innerWidth < 768 ? eggImage : eggImageDesktop} alt='transform' />
                </div>
                <NavLink to="/projects" className="p-6 bg-sunnyOffWhite flex flex-col items-center justify-center md:w-1/2 md:p-6 hover:animate-pulse border-2 border-transparent hover:border-sunnySkyBlueHover">
                    <div className="lg:px-28">
                        <h1 className="font-Fraunces mt-10 text-3xl text-sunnyVeryDarkDesaturatedBlue font-black tracking-widest text-center md:w-full md:text-left">Transform your brand</h1>
                        <p className="font-Barlow text-sunnyDarkGrayishBlue text-center font-medium text-lg my-10 md:text-left">
                            We are a full-service creative agency specializing in helping brands grow fast. 
                            Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <p className="font-Barlow text-sunnyGrayishBlue text-center font-thin text-lg my-10 md:text-left">
                            Have a look at our projects...
                        </p>
                    </div>
                </NavLink>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex md:w-1/2">
                    <img  className="md:w-full" src={window.innerWidth < 768 ? cupImage : cupImageDesktop} alt='transform' />
                </div>
                <NavLink to="/contact" className="px-6 bg-sunnyOffWhite py-6 flex flex-col items-center justify-center md:w-1/2 md:p-10 lg:p-20 hover:animate-pulse border-2 border-transparent hover:border-sunnySkyBlueHover">
                    <h1 className="font-Fraunces mt-10 text-3xl text-sunnyVeryDarkDesaturatedBlue font-black tracking-widest text-center md:w-full md:text-left">Stand out to the right audience</h1>
                    <p className="font-Barlow text-sunnyDarkGrayishBlue text-center font-medium text-lg my-10 md:text-left">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                    </p>
                    <p className="font-Barlow text-sunnyGrayishBlue text-center font-thin text-lg my-4 w-full md:text-left">
                        Contact us...
                    </p>
                </NavLink>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="px-6 bg-sunnyBgCherry md:bg-sunnyBgCherryDesktop bg-top bg-cover py-6 pt-80 md:w-1/2 md:px-20">
                    <h1 className="font-Fraunces mt-20 text-3xl text-sunnyDarkDesaturatedCyan font-black tracking-widest text-center">Graphic design</h1>
                    <p className="font-Barlow text-sunnyDarkDesaturatedCyan text-center font-medium text-lg my-10">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
                <div className="px-6 bg-sunnyBgPhotos md:bg-sunnyBgPhotosDesktop bg-top bg-cover py-6 pt-80 md:w-1/2 md:px-20">
                    <h1 className="font-Fraunces mt-20 text-3xl text-sunnyDarkDesaturatedCyan font-black tracking-widest text-center">Photography</h1>
                    <p className="font-Barlow text-sunnyDarkDesaturatedCyan text-center font-medium text-lg my-10">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

                    </p>
                </div>
            </div>
        </div>
        <div className="px-6 bg-sunnyOffWhite py-6">
            <h1 className="font-Fraunces mt-10 text-2xl text-sunnyGrayishBlue font-bold tracking-widest text-center">Our Team</h1>
            <div className="flex flex-col items-center justify-center py-16">
                <div>
                    <img className="w-[100px] height-[100px] rounded-full" src={marcusImage} alt='Marcus' />
                </div>
                <p className="font-Barlow text-sunnyDarkGrayishBlue text-center font-medium text-lg my-8 px-6 md:w-1/3">
                    My goal is to merge my passions for software and the arts to facilitate the growth of your brand's online presence.
                </p>
                <h2 className="font-Fraunces text-lg text-sunnyVeryDarkDesaturatedBlue font-black tracking-widest text-center">Marcus Coley</h2>
                <p className="font-Barlow text-sunnyGrayishBlue text-center">Full-Stack Developer & Owner</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex">
                <img className="w-1/2" src={window.innerWidth < 768 ? milkImage : milkImageDesktop} alt="Image" />
                <img className="w-1/2" src={window.innerWidth < 768 ? orangeImage : orangeImageDesktop} alt="Image" />
            </div>
            <div className="flex">
                <img className="w-1/2" src={window.innerWidth < 768 ? coneImage : coneImageDesktop} alt="Image" />
                <img className="w-1/2" src={window.innerWidth < 768 ? sugarCubesImage : sugarCubesImageDesktop} alt="Image" />
            </div>
        </div>
    </>
  )
}

export default LandingPage
