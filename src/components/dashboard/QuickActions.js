import React from "react";
import Image from "next/image";
import BaseTitle from "../base_components/baseTitle";

const QuickActions = () => {
  const actions = [
    {
      action: "Airtime",
      icon: "/assets/Untitled/airtime.png",
      linkTo: "/airtime",
    },
    {
      action: "Data",
      icon: "/assets/Untitled/data.png",
      linkTo: "/data",
    },
    {
      action: "Cable TV",
      icon: "/assets/Untitled/cable.png",
      linkTo: "/cable",
    },
    {
      action: "Electricity",
      icon: "/assets/Untitled/electricity.png",
      linkTo: "/electricity",
    },
    {
      action: "Road Taxes",
      icon: "/assets/Untitled/taxes.png",
      linkTo: "/taxes",
    },
    {
      action: "Education",
      icon: "/assets/Untitled/school.png",
      linkTo: "/education",
    },
    {
      action: "Insurance",
      icon: "/assets/Untitled/insurance.png",
      linkTo: "/insurance",
    },
    {
      action: "Tickets",
      icon: "/assets/Untitled/tickets.png",
      linkTo: "/tickets",
    },
  ];

  return (
    <>
      <div className="flex justify-between gap-5 py-5">
        <div className="bg-white px-[35px] py-[25px] w-[80%] rounded-xl shadow-md">
          <BaseTitle title={"Quick Actions"} />
          <div className="grid grid-cols-4 gap-4 items-center mt-5">
            {actions.map((items) => {
              return (
                <div className="cursor-pointer min-w-[100px] min-h-[84px] flex rounded-lg gap-2 p-[20px] items-center bg-gradient-to-r from-[#FF9900] to-[#FFD584]">
                  <Image src={items.icon} width={30} height={30} />
                  <p className="font-bold leading-5 text-[#333333]">
                    {items.action}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl px-[30px] py-[25px]">
          <div className="w-[80%]">
            <BaseTitle title={"Transfers"} />
          </div>
          <div className="flex w-full justify-around gap-3 items-center h-[180px]">
            <div className="border border-[3px] flex flex-col items-center justify-center w-[150px] gap-3 border-[#FF9900] py-5 rounded-xl">
              <Image
                width={50}
                height={50}
                src={"/assets/Untitled/bankorng.png"}
              />
              <p className="font-bold text-[#333333]">To bank</p>
            </div>
            <div className="border border-[3px] flex flex-col items-center justify-center w-[150px] gap-3 border-[#FF9900] py-5 rounded-xl">
              <Image
                width={50}
                height={50}
                src={"/assets/Untitled/wallet.png"}
              />
              <p className="font-bold text-[#333333]">To Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
