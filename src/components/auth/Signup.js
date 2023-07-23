import React from "react";
import BaseInput from "../base_components/BaseInput";
import Button from "../base_components/Button";

const Signup = () => {
  let formFields = [
    {
      label: "Full name",
      id: "fullname",
      type: "text",
      imageStyle: "hidden",
    },

    {
      label: "Email",
      id: "email",
      type: "email",
      imageStyle: "hidden",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      imageStyle: "hidden",
    },

    {
      label: "Confirm Password",
      id: "confirm_password",
      type: "password",
      imageStyle: "hidden",
    },
  ];

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-2xl mb-5">Sign up to continue</h1>
      <div className="bg-white rounded-md shadow-md w-[85%] lg:w-[50%] py-[50px]">
        <form className="w-full flex flex-col items-center">
          {formFields.map((fields, index) => {
            return (
              <BaseInput
                key={index}
                className={"w-[60%]"}
                imageStyle={fields.imageStyle}
                type={fields.type}
                label={fields.label}
                id={fields.id}
              />
            );
          })}
          <Button
            text={"Proceed"}
            style={"text-md w-[60%] mt-5 font-bold p-3 text-white"}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
