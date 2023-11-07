

'use client'
import Signup from "@/components/auth/Signup";
import Footer from "@/components/base_components/Footer";
import Navbar from "@/components/base_components/Navbar";
import Layout from "@/components/dashboard/Layout";
import { useRouter } from "next/navigation";

export default function Home() {


  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <div className="bg-white">
      <Navbar text={"Sign in"} ctaClick={handleClick} visibleProp={"invisible"} hideOnIndex={"hidden"}/>
      <Signup/>
      {/* <Footer/> */}
    </div>
  )
}
