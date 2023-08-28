import Link from "next/link"
import MyLayout from '@/pages/components/layout';
import Image from "next/image";
export default function Custom404() {


    return (
      <>
      <MyLayout title="Error"/>
      <div class="h-screen w-full flex flex-col justify-center items-center bg-white">
      <Image src="/bibimbap.png" alt="me" width="100" height="100" />
      <h1 class="text-9xl font-extrabold text-[#A7412B] tracking-widest">404</h1>
        <div class="flex items-center bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
      <button class="mt-5">
      <Link href="/" legacyBehavior>
        <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
          </span>
        </a>
      </Link>
    </button>
    </div>

    {/* <Link href="/">Go back HOME</Link> */}
      </>
    )
  }