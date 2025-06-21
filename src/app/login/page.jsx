'use client';

import { useDispatch } from 'react-redux';
import { login } from '@/store/authSlice';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login({ name: 'User' }));
    router.push('/cart');
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
