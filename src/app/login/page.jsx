'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserLogin() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    localStorage.setItem('phone', phone);
    router.push('/auth/verify');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold text-center">Login with Phone</h2>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded focus:outline-none"
        />
        <button onClick={handleSubmit} className="w-full bg-black text-white py-2 rounded">
          Send OTP
        </button>
      </div>
    </div>
  );
}
