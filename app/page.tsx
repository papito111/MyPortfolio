import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Relative text-center justify-center flex items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  )
}