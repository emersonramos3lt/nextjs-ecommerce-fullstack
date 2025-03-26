"use client"

import { products } from '@wix/stores'
import React, { useEffect, useState } from 'react'
import Add from './Add';

const CustomizeProducts = ({ 
  productId, 
  variants, 
  productOptions, 
}:{ 
  productId:string; 
  variants:products.Variant[]; 
  productOptions:products.ProductOption[]; 
}) => {

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>()

  useEffect(() => {
    const variant = variants.find(v=> {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(([key, value]) => variantChoices[key] === value
    );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect=(optionType:string, choice:string) => {
    setSelectedOptions(prev=>({...prev, [optionType]: choice }));
  }

  const isVariantInStock = (choices: { [key:string]: string}) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

        return (
          Object.entries(choices).every (
            ([key, value])=> variantChoices[key] === value 
          ) && 
          variant.stock?.inStock && 
          variant.stock?.quantity &&
          variant.stock?.quantity > 0
      );
    });
  };

  console.log(variants)

  return (
    <div className='flex flex-col gap-6'>
        {productOptions.map(option => (
          <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">{option.name}</h4>
          <ul className="flex items-center gap-3">
          {option.choices?.map((choice) => {
            
            const disabled = !isVariantInStock({...selectedOptions, [option.name!]:choice.description!})

            const selected = selectedOptions[option.name!] === choice.description

            const clickHandler = disabled 
              ? undefined
              : () => handleOptionSelect(option.name!, choice.description!);

            return option.name === "Color" ? (<li className="w-8 h-8 rounded-full ring-1 ring-zinc-950 relative" 
            style={{
              backgroundColor: choice.value, 
              cursor: disabled ? "not-allowed" : "pointer",
              }} 
              onClick={clickHandler}
              key={choice.description}
              >
                {selected && (
                  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                {disabled && (
                  <div className="absolute w-10 h-[2px] bg-red-700 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                )}
            </li>
          ) : ( 
          <li className='ring-1 ring-primaryColor text-primaryColor rounded-md py-1 px-4 text-sm ' style={{
            cursor: disabled ? "not-allowed" : "pointer",
            backgroundColor: selected ? "#000" : disabled ? "#f0f0f0" : "white",
            color: selected || disabled ? "white" : "#222", 
            boxShadow: disabled ? "none" : "",
          }} onClick={clickHandler}
          key={choice.description}>
            {choice.description}
          </li>
          ); 
          })}
          </ul>
        </div>
        ))}
        <Add productId={productId} variantId={selectedVariant?._id || "00000000-0000-0000-0000-000000000000"} stockNumber={selectedVariant?.stock?.quantity || 0} 
        />

        {/* COLOR */}
        {/*  
        
        <ul className="flex items-center gap-3">
            
            <li className="w-8 h-8 rounded-full ring-1 ring-zinc-950 cursor-pointer relative bg-purple-900"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-zinc-950 cursor-not-allowed relative bg-neutral-100">
            <div className="absolute w-10 h-[2px] bg-red-700 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
        </ul>
        */}
        {/* OTHERS */}
       {/*  <h4 className="font-medium">Choose a size</h4>
        <ul className="flex items-center gap-3">
          <li className='ring-1 ring-primaryColor text-primaryColor rounded-md py-1 px-4 text-sm cursor-pointer'>
            Small
          </li>
          <li className='ring-1 ring-primaryColor text-white bg-primaryColor rounded-md py-1 px-4 text-sm cursor-pointer'>
            Medium
          </li>
          <li className='ring-1 ring-orange-200 text-white bg-orange-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'>
            Large
          </li>
        </ul> */}
    </div>
  )
}

export default CustomizeProducts