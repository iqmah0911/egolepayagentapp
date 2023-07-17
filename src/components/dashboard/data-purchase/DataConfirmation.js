
import React from "react";
import Image from "next/image";
import formatDigits from "@/components/base_components/formatNumber";
import Button from "@/components/base_components/Button";

const DataConfirmation = ({ close, onNext, onPrevious }) => {



  const handleNext = () => {
    //handle api calls and all here
    onNext(); // Invoke the onNext callback to switch to the next component
  };

  const handlePrev = () => {
    onPrevious(); // Invoke the onNext callback to switch to the next component
  };

  return (
    <div className="relative w-10/12 p-[50px] overflow-auto bg-white shadow-md rounded-xl sm:w-3/5 md:w-[450px] md:mt-20 md:mb-10">
      <div>
        <div
          onClick={close}
          className="z-[100] top-0 right-0 absolute p-5 cursor-pointer"
        >
          <Image
            src={"/assets/Untitled/cancel.png"}
            width={20}
            height={20}
            alt="close modal"
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="uppercase text-center font-bold text-md text-[#994D00]">
            Data Confirmation
          </h1>
          <div
            className={`bg-[#EDEDED] rounded-md w-[30%] py-3 cursor-pointer flex flex-col items-center gap-1`}
          >
            <Image
              src={"/assets/Untitled/trans/mtn.png"}
              width={35}
              height={35}
              alt={"network"}
            />
            <p className="text-xs uppercase">Mtn</p>
          </div>
          <div className="text-center">
            <p className="text-[#33363F] text-md font-[700]">08020998282</p>
            <p className="text-xs font-[700]">Phone Number</p>
          </div>
          <div className="text-center">
            <p className="text-[#994D00] text-3xl font-[600]">₦{formatDigits('1000')}.00</p>
            <p className="text-xs font-[700]">Amount</p>
          </div>
          <div className="text-center">
            <p className="text-[#994D00] text-3xl font-[600]">1.5GB</p>
            <p className="text-xs font-[700]">Plan</p>
          </div>
          <div>
            <div className="bg-gradient-to-l from-[#FF9900] to-[#FFD584] rounded-2xl text-sm text-white p-[8px]">
                <p>You will save: <span>₦{formatDigits('50')}.00</span></p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full justify-center gap-3 mt-[30px]">
            <Button onClick={handleNext} text={"Confirm Purchase"} style={"text-white"} />
            <Button onClick={handlePrev} text={"Cancel"} style={"text-[#7E7E7E] bg-[#E4E4E4]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataConfirmation;
