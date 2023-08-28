import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";
import { useRouter } from "next/router"
import SessionCheck from '@/pages/components/sessioncheck';


export default function GetWaiter({ data }) {
  const router = useRouter();
  return (
      <>
      <SessionCheck/>
       <MyLayout title="Waiters"/>
       <div class="mt-32">
    <div class="px-4 sm:px-8 max-w-5xl m-auto">
        <h1 class="text-center font-semibold text-sm">All Waiters</h1>
        <p class="mt-2 text-center text-xs mb-4 text-gray-500">List of Waiters</p>
        <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
        {data.map(item => (
          <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out" key={item.m_id}>
        <Link href={"/manager/managerdb/waiter/"+item.w_id}>{item.w_name}</Link>
            </li>
        ))}
        </ul>
    </div>
    <button type="button" class="flex mx-auto mt-5 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" onClick={() => router.back()}>
            Click here to go back
        </button>
</div>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/manager/viewwaiter');
      const data = await response.data;
    
  return { props: { data } }
  }