

'use client'
import Signup from "@/components/auth/Signup";
import Footer from "@/components/base_components/Footer";
import Navbar from "@/components/base_components/Navbar";
import Layout from "@/components/dashboard/Layout";

export default function Home() {
  return (
    <div>
      <Navbar hideOnIndex={"hidden"}/>
      <Signup/>
      {/* <Footer/> */}
    </div>
  )
}
