
import Image from "next/image";


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
    icon: "/assets/Untitled/nav2/reprint.png",
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
    icon: "/assets/Untitled/nav2/summary.png",
    link: "Reprint",
  },
];
export default function Navbar() {

  return (
    <div className="bg-white">
      <div className="flex w-full justify-between px-20 py-5 items-center border-b border-b-grey">
        <Image
          src={"/assets/Untitled/logo.png"}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex gap-10 items-center">
          <p className="font-bold">Settings</p>
          <div className="bg-[#FF8F0B] px-2 py-1 rounded-full">
            <p className="text-white">BE</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between px-20 py-5">
        {navItems.map((items) => {
          return (
            <div className="flex gap-2">
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
    </div>
  );
}
