import React from "react";
import BaseInput from "../base_components/BaseInput";
import Button from "../base_components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Signup = () => {
  let formFields = [

    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Enter email",
      imageStyle: "hidden",
    },

    {
      label: "Firstname",
      id: "firstname",
      type: "text",
      placeholder: "Enter firstname",
      imageStyle: "hidden",
    },

    {
      label: "Middlename",
      id: "midname",
      type: "text",
      placeholder: "Enter middlename",
      imageStyle: "hidden",
    },

    {
      label: "Lastname",
      id: "lname",
      type: "text",
      placeholder: "Enter Lastname",
      imageStyle: "hidden",
    },

    {
      label: "Mobile number",
      id: "mobile",
      type: "number",
      placeholder: "Enter Mobile",
      imageStyle: "hidden",
    },

    {
      label: "Gender",
      id: "gender",
      type: "text",
      placeholder: "Enter gender",
      imageStyle: "hidden",
    },

    {
      label: "BVN",
      id: "bvn",
      type: "number",
      placeholder: "Enter your bvn",
      imageStyle: "hidden",
    },

    {
      label: "DOB",
      id: "dob",
      type: "text",
      placeholder: "yyyy/mm/dd",
      imageStyle: "hidden",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter password",
      imageStyle: "hidden",
    },

    {
      label: "Confirm Password",
      id: "confirm_password",
      type: "password",
      placeholder: "Enter password again",
      imageStyle: "hidden",
    },
  ];

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <div className="lg:h-[100vh] h-full flex items-center justify-between w-full bg-white">
      <div className="lg:w-[50%] h-full bg-gradient-to-r from-[#fcc000] to-[#FF8000] hidden lg:flex lg:flex-col items-center justify-center">
        <Image
          src={"/assets/Untitled/sign-up.png"}
          alt="..."
          width={650}
          height={650}
        />
      </div>
      <div className="w-[100%] lg:w-[50%] py-[60px]">
        <form autoComplete="off" className="w-full flex flex-col items-center">
          <h1 className="font-bold lg:text-2xl text-lg mb-5">Sign up to continue</h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:w-[60%] flex flex-col items-center w-full">
            {formFields.map(({ label, id, type, placeholder, imageStyle }, index) => (
              <BaseInput
                key={index}
                className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
                placeholder={placeholder}
                imageStyle={imageStyle}
                type={type}
                label={label}
                id={id}
              />
            ))}
          </div>
          <Button
            onClick={handleClick}
            text="Proceed"
            style="text-md lg:w-[60%] w-[85%] mt-5 font-bold p-3 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
