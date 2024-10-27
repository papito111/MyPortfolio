import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="Relative text-center justify-center flex items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems=
        {[{name:'Home', link:'/', icon:<FaHome />}

        ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
  )
}