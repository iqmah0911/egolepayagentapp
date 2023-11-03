
import React from 'react'
import Image from 'next/image'

const BaseInput = ({ type, id, name, label, placeholder, image, hidden, className, imageStyle, onchange }) => {
  return (
    <div className={` ${className} `}>
        <label className='text-sm mb-[10px]' for={name}>
            {label}
        </label>
      <div className='flex items-center justify-between rounded-sm bg-[#F1F1F1] py-2 px-2'>
        <input type={type} name={name}  onChange={(x)=>onchange(x)} id={id} className='bg-[#F1F1F1] placeholder:text-sm outline-none h-full w-full' placeholder={placeholder} />
        <div className={`${imageStyle}`}>
            <Image src={image} width={10} height={10} alt='...' />
        </div>
      </div>
    </div>
  )
}

export default BaseInput
