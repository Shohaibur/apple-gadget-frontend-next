import MyLayout from '@/pages/components/layout';
import Link from "next/link"
import { useRouter } from "next/router"

export default function WaiterDisplay() {
  const router = useRouter();
    return (
      <>
      <MyLayout title="Waiter Display"/>
      <main>
<div class="flex items-center justify-center h-screen bg-gray-200">
  <div class="container">
    <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          <span class="text-[#892A16]">Waiter Contents</span>
        </h2>
      </div>
      <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
          <a href="/manager/managerdb/viewwaiter"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">View</span>
          </a>
        </div>
        <div class="m-3">
          <a href="/manager/managerdb/findwaiter"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Find</span>
          </a>
        </div>
        <div class="m-3">
          <a href="/manager/managerdb/addwaiter"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Add</span>
          </a>
        </div>
        <button align="center" class="flex mx-auto mt-16 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" type="button" onClick={() => router.back()}>Back</button>
      </div>
    </div>
  </div>
</div>
      </main>
      </>
    )
  }