import React, { useState } from "react";
import BaseInput from "../base_components/BaseInput";
import Button from "../base_components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "../../axios";
import BaseError from "../base_components/BaseError";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to manage error message
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    mobile: "",
    gender: "",
    bvn: "",
    dob: "",
    password: "",
    stateID: 0,
  });

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
      id: "middlename",
      type: "text",
      placeholder: "Enter middlename",
    },

    {
      label: "Lastname",
      id: "lastname",
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors

    axios
      .post("/api/Account/Signup", formData)
      .then((response) => {
        setLoading(false);

        if (response.data.status === 8) {
          setError(response.data.message); // Set the error message
          setTimeout(() => {
            setError(null); // Clear the error message after 3-5 seconds
          }, 3000); // Adjust the timeout interval as needed
        } else {
          router.push("/signin");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again."); // Generic error message
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
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
        {error && <BaseError message={error}  />}
        <form autoComplete="off" className="w-full flex flex-col items-center">
          <h1 className="font-bold lg:text-2xl text-lg mb-5">
            Sign up to continue
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:w-[60%] flex flex-col items-center w-full">
            {formFields.map((items, index) => (
              <BaseInput
                key={index}
                className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
                placeholder={items.placeholder}
                type={items.type}
                id={items.id}
                label={items.label}
                onChange={handleChange}
              />
            ))}
          </div>
          <Button
            onClick={handleClick}
            text={loading ? "Loading..." : "Proceed"}
            style="text-md lg:w-[60%] w-[85%] mt-5 font-bold p-3 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
