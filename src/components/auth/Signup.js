import React from 'react'
import BaseInput from '../base_components/BaseInput'
import Button from '../base_components/Button'

const Signup = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center w-full'>
      <h1 className='font-bold text-2xl mb-5'>
        Sign up to continue
      </h1>
      <div className='bg-white rounded-md shadow-md w-[50%] py-[50px]'>
        <form className='w-full flex flex-col items-center'>
            <BaseInput className={"w-[60%]"} imageStyle={"hidden"} type={"text"} label={"Full name"} id={"fullname"} />
            <BaseInput className={"w-[60%]"} imageStyle={"hidden"} type={"email"} label={"Email"} id={"email"} />
            <BaseInput className={"w-[60%]"} imageStyle={"hidden"} type={"password"} label={"Password"} id={"password"} />
            <BaseInput className={"w-[60%]"} imageStyle={"hidden"} type={"password"} label={"Confirm Password"} id={"confirm_password"} />
            <Button text={"Proceed"} style={"text-md w-[60%] mt-5 font-bold text-white"} />
        </form>
      </div>
    </div>
  )
}

export default Signup
