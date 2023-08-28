import MyLayout from "./components/layout"
import Header from "./components/header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
  
    <MyLayout title="Home"/>
    <main>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <a class="inline-flex items-center">
        <Image src="/bibimbap.png" alt="me" width="250" height="512" />
        </a>
        <br></br>
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Introduction</span>
        <p class="leading-relaxed mb-8"><b>Welcome to "Apple Gadgets and Gear" – Your Gateway to Modern Innovation!

Discover the latest Apple devices and accessories that redefine technology. From sleek iPhones and powerful MacBooks to stylish Apple Watches and versatile iPads, we bring you the best in innovation and design.

Experience unparalleled quality, seamless connectivity, and curated accessories that enhance your digital lifestyle. With a customer-centric approach, we ensure a smooth shopping journey and swift deliveries.

Elevate your style, stay connected, and embrace the future with "Apple Gadgets and Gear." Embrace innovation, choose excellence, and make every moment extraordinary.</b></p>
        <a
            href="/manager/signup"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
          >
            <span>Join Us</span>
          </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <form align="center">
              <fieldset style={{position:"relative", width:"50%"}}>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Employees</h2>
                <a
                  href="/manager/managerdb/mdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Manager Dashboard</span>
                </a>
                <a
                  href="/product/productdb/pdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Product Dashboard</span>
                </a>
                <a
                  href="/customer/customerdb/cdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Customer Dashboard</span>
                </a>
                <a
                  href="/deliveryman/deliverymandb/dmdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Deliveryman Dashboard</span>
                </a>
              </fieldset>
            </form>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </main>

    </>
  )
}