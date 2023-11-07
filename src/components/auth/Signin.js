import React from 'react'
import BaseInput from '../base_components/BaseInput';
import Button from '../base_components/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import {  loginCall } from '../base_components/Api';

const Signin = () => {

  const [phone, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginCall(phone, password);
      if(response?.result){
        const token = response?.token;
        console.log(token)
        router.push("/dashboard");
      }
      console.log(response.message); 
    } catch (error) {
      console.log(error.message); 
    }
  };

  let formFields = [

    {
      label: "Phone Number",
      id: "phone",
      type: "number",
      placeholder: "Enter Phone Number",
      imageStyle: "hidden",
      value : (x)=>setphoneNumber(x),
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter password",
      imageStyle: "hidden",
      value: (x)=>setPassword(x)
    },
  ];

  const router = useRouter();

  const handleClick = async () => {
    const data = await loginCall(phone,password)
    console.log(data)

    // e.preventDefault(); as
    // router.push("/dashboard");
  };

    

  const getValue = (e,dt) => {
    const value = e.target.value
    dt(value)
  };
  

  return (
    <div className="h-[100vh] flex items-center justify-between w-full bg-white">
      <div className="lg:w-[50%] h-full bg-gradient-to-r from-[#fcc000] to-[#FF8000] hidden lg:flex lg:flex-col items-center justify-center">
        <Image src={"/assets/Untitled/sign-up.png"} alt="..." width={650} height={650} />
      </div>
      <div className="w-[100%] lg:w-[50%] py-[0px]">
        <form autoComplete="off" className="w-full flex flex-col items-center">
          <h1 className="font-bold lg:text-2xl text-lg mb-5">Welcome back, Sign in to continue</h1>
          <div className="lg:grid lg:grid-cols-1 lg:w-[60%] flex flex-col items-center w-full">
            {/* {formFields.map((fields, index) => {
              return (
                <BaseInput
                  key={index}
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder={fields.placeholder}
                  imageStyle={fields.imageStyle}
                  onchange={(x)=> fields.value(x)}
                  type={fields.type}
                  label={fields.label}
                  id={fields.id}
                />
              );
            })} */}
             <BaseInput
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder="Enter Phone Number"
                  imageStyle="hidden"
                  onchange={(x)=> getValue(x,setphoneNumber)}
                  type="number"
                  label={"Phone Number"}
                />
                <BaseInput
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder= "Enter Password"
                  imageStyle="hidden"
                  onchange={(x)=> getValue(x,setPassword)}
                  type="password"
                  label={"Password"}
                />
          </div>
          <Button
            onClick={handleSubmit}
            text={"Proceed"}
            style={"text-md lg:w-[60%] w-[85%] my-5 font-bold p-3 text-white"}
          />
          <p>Forgot password?</p>
        </form>
      </div>
    </div>
  )
}

export default Signin
