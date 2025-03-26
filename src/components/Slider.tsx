"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import slide1 from "/public/slide1.jpg";
import slide2 from "/public/slide2.jpg";
import slide3 from "/public/slide3.jpg";

const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: slide1,
      url: "/",
      bg: "bg-zinc-950",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: slide2,
      url: "/",
      bg: "bg-gray-900",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: slide3,
      url: "/",
      bg: "bg-zinc-900",
    },
];

const Slider = () => {
    
    const [current, setCurrent] = useState(0);

    //useEffect(() => {
        //const interval = setInterval(() => {
            //setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        //.}, 4000);

        //return () => clearInterval(interval);
    //}, []);

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
        <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform: `translateX(-${current * 100}vw)`}}>
            
            {slides.map(slide=>(
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row text-white`} key={slide.id}>
                    {/* TEXT CONTAINER */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                        <h1 className='text-4xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                        <Link href={slide.url}><button className='rounded-md bg-neutral-50 text-black py-3 px-4'>SHOP NOW</button></Link>
                    </div>
                    {/* IMAGE CONTAINER */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                        <Image src={slide.img} alt='Image' fill sizes='100%' className='object-cover' />
                    </div>
                </div>
            ))}
        </div>
        <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {
            slides.map((slide, index) => (
                <div className={`w-3 h-3 rounded-full ring-1 ring-zinc-300 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} key={slide.id}
                onClick={() => setCurrent(index)}
                >
                    { current === index && (<div className='w-[6px] h-[6px] bg-white rounded-full'></div>) }
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Slider