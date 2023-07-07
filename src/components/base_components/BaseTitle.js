
import React from "react";
import Image from "next/image";

const BaseTitle = ({title}) => {
  return (
    <div className="flex gap-5 items-center">
      <h1 className="font-bold text-lg text-[#994D00]">{title}</h1>
      <Image
        src={"/assets/Untitled/rectangle.png"}
        width={400}
        height={0}
        alt="..."
      />
    </div>
  );
};

export default BaseTitle;
