'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(30);
  const phone = localStorage.getItem('phone');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
    if (newOtp.join('').length === 6) {
      localStorage.setItem("token", "demo_token");
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-2 text-center">Enter verification code</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">Code sent to +91{phone}</p>
        <div className="flex justify-between space-x-2 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="w-12 h-12 text-center text-xl border rounded focus:outline-black"
            />
          ))}
        </div>
        <div className="text-sm text-gray-500 text-center mb-4">⏱️ 00:{timer.toString().padStart(2, '0')}</div>
        <button
          disabled={otp.some((digit) => digit === '')}
          onClick={() => router.push('/')}
          className="w-full bg-black text-white py-2 rounded disabled:bg-gray-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}
