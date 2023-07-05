
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex w-full justify-between px-20 py-5 items-center border-b border-b-grey">
        <Image
          src={"/assets/Untitled/logo.png"}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
