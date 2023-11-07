
import React from 'react'
import Image from 'next/image'

const BaseInput = ({ type, id, name, label, placeholder, image, hidden, onChange, className, imageStyle }) => {
  return (
    <div className={` ${className} `}>
        <label className='text-sm mb-[10px]' for={name}>
            {label}
        </label>
      <div className='flex items-center justify-between rounded-sm bg-[#F1F1F1] py-2 px-2'>
        <input onChange={onChange} type={type} name={name} id={id} className='bg-[#F1F1F1] py-2 placeholder:text-sm outline-none h-full w-full' placeholder={placeholder} />
      </div>
    </div>
  )
}

export default BaseInput
