import MyLayout from "./components/layout"
import Header from "./components/header"

export default function Contact() {
  return (
    <>
  
    <MyLayout title="Contact"/>

<main>
    <div class="flex items-center justify-center h-screen bg-gray-200">
  <div class="container">
    <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          <span class="text-[#892A16]">Contact Us</span>
        </h2>
      </div>
      <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
          <a href="https://www.facebook.com/"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Facebook</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://twitter.com/"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Twitter</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://pinterest.com/"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Pintrest</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://www.reddit.com/"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Reddit</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </main>

    </>
  )
}