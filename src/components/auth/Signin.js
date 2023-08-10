import React from 'react'
import BaseInput from '../base_components/BaseInput';
import Button from '../base_components/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { login } from '../base_components/Api';

const Signin = () => {

  const [phone, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(phone, password);
      setMessage(response.message); // The response should include a message or token
    } catch (error) {
      setMessage(error.message); // Show the error message if login fails
    }
  };

  let formFields = [

    {
      label: "Phone Number",
      id: "phone",
      type: "number",
      placeholder: "Enter Phone Number",
      imageStyle: "hidden",
      value : "{phone}",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter password",
      imageStyle: "hidden",
      value: "{password}"
    },
  ];

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };


  return (
    <div className="h-[100vh] flex items-center justify-between w-full bg-white">
      <div className="lg:w-[50%] h-full bg-gradient-to-r from-[#fcc000] to-[#FF8000] hidden lg:flex lg:flex-col items-center justify-center">
        <Image src={"/assets/Untitled/sign-up.png"} alt="..." width={650} height={650} />
      </div>
      <div className="w-[100%] lg:w-[50%] py-[60px]">
      {message && <p>{message}</p>}
        <form autoComplete="off" className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
          <h1 className="font-bold lg:text-2xl text-lg mb-5">Welcome back, Sign in to continue</h1>
          <div className="lg:grid lg:grid-cols-1 lg:w-[60%] flex flex-col items-center w-full">
            {formFields.map((fields, index) => {
              return (
                <BaseInput
                  key={index}
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder={fields.placeholder}
                  imageStyle={fields.imageStyle}
                  type={fields.type}
                  label={fields.label}
                  id={fields.id}
                />
              );
            })}
          </div>
          <Button
            onClick={handleClick}
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
