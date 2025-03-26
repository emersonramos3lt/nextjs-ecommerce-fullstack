"use client"

import Image from 'next/image'
import React, { useState } from 'react'

// const images = [
    // { id: 1, url: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    // { id: 2, url: "https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-mar-ferias-mulher-costa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    // { id: 3, url: "https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-paisagem-de-praia-cenica-com-ilha-rochosa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    // { id: 4, url: "https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-atravessando-a-movimentada-rua-de-toquio-com-outdoors.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }
// ]

const ProductImages = ({ items }: { items: any }) => {

    const [index, setIndex] = useState(0);

  return (
    <div className=''>
       <div className='h-[500px] relative'>
            <Image 
                src={items[index].image?.url} 
                alt='Product' 
                fill 
                sizes='50vw' 
                className='object-cover rounded-md' 
            />
       </div>
       <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {items.map((item:any, i:number) => (
            <div    
                className="w-1/4 h-32 relative gap-4 mt-8" key={item._id} 
                onClick={() => setIndex(i)}
            >
                <Image  
                    src={item.image?.url} 
                    alt='Product' 
                    fill 
                    sizes='30vw' 
                    className='object-cover rounded-md' 
                />
            </div>
        ))}
       </div>
    </div>
  )
}

export default ProductImages