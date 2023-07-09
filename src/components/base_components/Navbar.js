
import Image from "next/image"; //Image is an in-built component for dispalying images in nextJs

//An array of items on the navigation bar
const navItems = [
  {
    icon: "/assets/Untitled/nav2/dashboard_active.png",
    link: "Dashboard",
  },
  {
    icon: "/assets/Untitled/nav2/trx.png",
    link: "Transaction Details",
  },
  {
    icon: "/assets/Untitled/nav2/summary.png",
    link: "Transaction Summary",
  },
  {
    icon: "/assets/Untitled/nav2/wallet.png",
    link: "Wallet Report",
  },
  {
    icon: "/assets/Untitled/nav2/tickets.png",
    link: "Tickets Report",
  },
  {
    icon: "/assets/Untitled/nav2/reprint.png",
    link: "Reprint",
  },
];
export default function Navbar() {

  return (

    //Navigation bar container starts here
    <div className="bg-white fixed w-full shadow-md">

      {/* First layer of the navigation bar starts here */}
      <div className="flex w-full justify-between lg:px-[80px] px-[20px] py-5 items-center border-b border-b-grey">
        <Image
          src={"/assets/Untitled/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
        <div className="flex gap-10 items-center">
          <p className="font-bold">Settings</p>
          <div className="bg-[#FF8F0B] px-2 py-1 rounded-full">
            <p className="text-white">BE</p>
          </div>
        </div>
      </div>
      {/* first layer ends here */}


      {/* Second layer starts here */}
      <div className="flex lg:flex-row w-full lg:visible invisible justify-between lg:px-[161px] lg:py-2">
        {/* Items array rendered here using the array.map js function */}
        {navItems.map((items, index) => {
          return (
            <div key={index} className={`flex items-center gap-2 cursor-pointer ${index === 0 ? 'bg-gradient-to-l from-[#FF9900] to-[#FFD584] px-3 rounded-lg text-white py-2' : ''}`}>
              <Image
                src={items.icon}
                width={20}
                height={20}
                alt={items.link}
              />
              <p className="text-sm">{items.link}</p>
            </div>
          );
        })}
      </div>
      {/* Second layer ends here */}
    </div>
    // Navigation container ends here
  );
}
