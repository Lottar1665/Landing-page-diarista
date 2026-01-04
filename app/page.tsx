import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero/Hero";

function page() {
  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero/>
      <About/>
      <Contact/>
    </main>
  )
}

export default page