import React from "react";
import BaseInput from "../base_components/BaseInput";
import Button from "../base_components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signupCall } from "../base_components/Api";
import { useState } from 'react';
//import select from "../base_components/select";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setmiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setmobile] = useState('');
  const [gender, setgender] = useState('');
  const [bvn, setbvn] = useState('');
  const [dob, setdob] = useState('');
  const [state, setstate] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setconfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupCall(email, firstName, middleName, lastName, mobile, gender, bvn, dob, state)
      if (response?.result) {
       
        console.log(response)
        router.push("/Signin");
      }
      console.log(response.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  // let formFields = [

  //   {
  //     label: "Email",
  //     id: "email",
  //     type: "email",
  //     placeholder: "Enter email",
  //     imageStyle: "hidden",
  //     value : (x)=>setEmail(x),

  //   },

  //   {
  //     label: "Firstname",
  //     id: "firstname",
  //     type: "text",
  //     placeholder: "Enter firstname",
  //     imageStyle: "hidden",
  //     value : (x)=>setFirstName(x),
  //   },

  //   {
  //     label: "Middlename",
  //     id: "midname",
  //     type: "text",
  //     placeholder: "Enter middlename",
  //     imageStyle: "hidden",
  //     value : (x)=>setmiddleName(x),
  //   },

  //   {
  //     label: "Lastname",
  //     id: "lname",
  //     type: "text",
  //     placeholder: "Enter Lastname",
  //     imageStyle: "hidden",
  //     value : (x)=>setLastName(x),
  //   },

  //   {
  //     label: "Mobile number",
  //     id: "mobile",
  //     type: "number",
  //     placeholder: "Enter Mobile",
  //     imageStyle: "hidden",
  //     value : (x)=>setmobile(x),
  //   },

  //   {
  //     label: "Gender",
  //     id: "gender",
  //     type: "text",
  //     placeholder: "Enter gender",
  //     imageStyle: "hidden",
  //     value : (x)=>setgender(x),
  //   },

  //   {
  //     label: "BVN",
  //     id: "bvn",
  //     type: "number",
  //     placeholder: "Enter your bvn",
  //     imageStyle: "hidden",
  //     value : (x)=>setbvn(x),
  //   },

  //   {
  //     label: "DOB",
  //     id: "dob",
  //     type: "text",
  //     placeholder: "yyyy/mm/dd",
  //     imageStyle: "hidden",
  //     value : (x)=>setdob(x),
  //   },

  //   {
  //     label: "Password",
  //     id: "password",
  //     type: "password",
  //     placeholder: "Enter password",
  //     imageStyle: "hidden",
  //     value : (x)=>setPassword(x),
  //   },

  //   {
  //     label: "Confirm Password",
  //     id: "confirm_password",
  //     type: "password",
  //     placeholder: "Enter password again",
  //     imageStyle: "hidden",
  //     value : (x)=>setconfirmPassword(x),
  //   },
  // ];

  const router = useRouter();

  const handleClick = async () => {
    const data = await signupCall(email, firstName, middleName, lastName, mobile, gender, bvn, dob)
    console.log(data)
    // e.preventDefault();
    // router.push("/signin");
  };


  const getValue = (e, dt) => {
    const value = e.target.value
    dt(value)
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
            {/* {formFields.map(({ label, id, type, placeholder, imageStyle }, index) => (
              <BaseInput
                key={index}
                className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
                placeholder={placeholder}
                imageStyle={imageStyle}
                type={type}
                label={label}
                id={id}
              />
            ))} */}

            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter email"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setEmail)}
              type="email"
              label={"Email"}
            />
            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter firstname"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setFirstName)}
              type="text"
              label={"Firstname"}
            />
            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter middlename"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setmiddleName)}
              type="text"
              label={"Middlename"}
            />
            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter lastname"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setLastName)}
              type="text"
              label={"Lastname"}
            />
            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter Mobile"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setmobile)}
              type="number"
              label={"Mobile number"}
            />
            <select
              className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
              onChange={(e) => getValue(e, setgender)}
              value={gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
             
              
            </select>

            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="Enter your bvn"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setbvn)}
              type="number"
              label={"BVN"}
            />

            <BaseInput
              className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
              placeholder="yyyy/mm/dd"
              imageStyle="hidden"
              onchange={(x) => getValue(x, setdob)}
              type="date"
              label={"DOB"}
            />


            <select
              className="lg:w-full w-[85%] mb-2 placeholder:text-sm"
              onChange={(e) => getValue(e, setstate)}
              value={state}
            >
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
             
            </select>
            {/* <BaseInput
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder= "Enter Password"
                  imageStyle="hidden"
                  onchange={(x)=> getValue(x,setPassword)}
                  type="password"
                  label={"Password"}
                />
                <BaseInput
                  className={"lg:w-full w-[85%] mb-2 placeholder:text-sm"}
                  placeholder= "Enter password again"
                  imageStyle="hidden"
                  onchange={(x)=> getValue(x,setconfirmPassword)}
                  type="password"
                  label={"Confirm Password"}
                /> */}

          </div>
          <Button
            onClick={handleSubmit}
            text="Proceed"
            style="text-md lg:w-[60%] w-[85%] mt-5 font-bold p-3 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
