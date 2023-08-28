import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('m_email');
    if (!session) {
      router.push('/manager/login');
    }
  }, []);

  return null;
};