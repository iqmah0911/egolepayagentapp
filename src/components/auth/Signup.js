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
    },

    {
      label: "Firstname",
      id: "firstname",
      type: "text",
      placeholder: "Enter firstname",
    },

    {
      label: "Middlename",
      id: "midname",
      type: "text",
      placeholder: "Enter middlename",
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
    },

    {
      label: "Gender",
      id: "gender",
      type: "text",
      placeholder: "Enter gender",
    },

    {
      label: "BVN",
      id: "bvn",
      type: "number",
      placeholder: "Enter your bvn",
    },

    {
      label: "DOB",
      id: "dob",
      type: "text",
      placeholder: "yyyy/mm/dd",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter password",
    },

    {
      label: "Confirm Password",
      id: "confirm_password",
      type: "password",
      placeholder: "Enter password again",
    },
  ];

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <div className="lg:h-[100vh] h-[170vh] flex items-center justify-between w-full bg-white">
      <div className="lg:w-[50%] h-full bg-gradient-to-r from-[#fcc000] to-[#FF8000] hidden lg:flex lg:flex-col items-center justify-center">
        <Image
          src={"/assets/Untitled/sign-up.png"}
          alt="..."
          width={650}
          height={650}
        />
      </div>
      <div className="w-[100%] lg:w-[50%] py-[80px]">
        <form autoComplete="off" className="w-full flex flex-col items-center">
          <h1 className="font-bold lg:text-2xl text-lg mb-5">Sign up to continue</h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:w-[60%] flex flex-col items-center w-full">
            {formFields.map((items, index) => (
              <BaseInput
                key={index}
                className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
                placeholder={items.placeholder}
                type={items.type}
                id={items.id}
                label={items.label}
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
