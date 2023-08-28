import MyLayout from "./components/layout"
import Header from "./components/header"
import { useRouter } from "next/router"

export default function About() {
  const router = useRouter();
  return (
    <>
    <MyLayout title="About"/>
    <main>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">About US</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The Team Members of Apple Gadgets & Gears.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Md. Shohaibur Rahman</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">20-42424-1</h2>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">MD. ISTIAQUE HOSSAIN
</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">20-42350-1</h2>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">TAJBI-UL-HASAN BITHTO
</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">20-42382-1</h2>
      </div>
     
    </div>
    <button class="flex mx-auto mt-16 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" type="button" onClick={() => router.back()}>Home</button>
  </div>
</section>
    </main>
    </>
  )
}