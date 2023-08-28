import MyLayout from '@/pages/components/layout';
import Link from "next/link"
import Image from 'next/image';
import { useRouter } from "next/router"


export default function Customer() {
  const router = useRouter();
  return (
    <>
    <MyLayout title="Customer Dashbord"/>
    <main>
    <aside class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    <a href="#">
    <Image src="/user.png" alt="me" width="80" height="80" />
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6 ">
            <div class="space-y-3 ">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Profile</label>
            </div>

            <div class="space-y-3 ">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">content</label>
                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/product/productdb/order/orderdisplay">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>

                    <span class="mx-2 text-sm font-medium">Order</span>
                </a>
            </div>

            <div>
              <button class="flex ml-auto text-white bg-[#BD442A] border-0 py-2 px-6 focus:outline-none hover:bg-[#892A16] rounded" type="button" onClick={() => router.back()}>
              Back
              </button>
            </div>
        </nav>
    </div>
</aside>
     
    </main>

    </>
  )
}