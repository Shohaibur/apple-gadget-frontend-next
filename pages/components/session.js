import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [m_email, setEmail] = useState(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('m_email');
          if (session) {
            setEmail(sessionStorage.getItem('m_email'));
           
          }          
      }
   
  }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/manager/signout/')
            console.log(response.data)
            sessionStorage.removeItem('m_email');
            setEmail(null);
            router.push('/manager/login');
          } catch (error) {
            console.error(error)
          }
    
  };

  return (
    <>
          {m_email !== null ? (
        <>
          <div>
          <a href="#">{m_email}</a>
          <button class="flex ml-auto text-white bg-[#BD442A] border-0 py-2 px-6 focus:outline-none hover:bg-[#892A16] rounded" type="button" onClick={handleSignOut}>Sign out</button>     
          </div>
            </>
      ) : (
        <div>
            <Link href="/manager/login">
                Sign in
            </Link>
             
        </div>
       
      )}
     
    </>
  );
}