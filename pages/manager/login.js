import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import MyLayout from '../components/layout';
import Link from 'next/link';

export default function SignIn() {
  const [m_email, setEmail] = useState('')
  const [m_password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("https://advancedwebtech-useremployee-production.up.railway.app/manager/signin", {m_email,m_password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('m_email', response.data);
        router.push('/manager/managerdb/mdashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 

    return (
        <>
            <MyLayout title="Sign In" />
            <main>
<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5">Sign In</h1>  
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <form onSubmit={handleSubmit}>
      <div class="px-5 py-7">
        <label for="m_email" class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
        <input type="email" value={m_email} onChange={(e) => setEmail(e.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label for="m_password" class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="password" value={m_password} onChange={(e) => setPassword(e.target.value)} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <button type="submit" class="transition duration-200 bg-[#BD442A]  hover:bg-[#661400] focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              {error &&
                  <div>
                    <p id="outlined_error_help" class="mt-2 text-xs text-white-600 dark:text-red-400"><span class="font-medium">{error}</span></p>
                  </div>
                }   
            <span class="inline-block mr-2">Login</span>
        </button>
      </div>
      </form>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
          <a
            href="/manager/signup"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
          >
              <span class="inline-block ml-1">Sign Up</span>
          </a>
          </div>
          <div class="text-center sm:text-right  whitespace-nowrap">
              <button class="flex ml-auto text-white bg-[#BD442A] border-0 py-2 px-6 focus:outline-none hover:bg-[#892A16] rounded" type="button" onClick={() => router.back()}>
              Back
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>

    </>
  )
}