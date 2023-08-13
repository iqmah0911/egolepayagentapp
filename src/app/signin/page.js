'use client'
import Signin from "@/components/auth/Signin";
import Footer from "@/components/base_components/Footer";
import Navbar from "@/components/base_components/Navbar";
import Layout from "@/components/dashboard/Layout";
import { useRouter } from "next/navigation";

export default function Home() {


  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-white">
      <Navbar text={"Sign up"} ctaClick={handleClick} visibleProp={"invisible"} hideOnIndex={"hidden"}/>
      <Signin/>
      {/* <Footer/> */}
    </div>
  )
}
