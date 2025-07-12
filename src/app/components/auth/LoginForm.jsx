"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    localStorage.setItem('phone', phone);
    router.push('/auth/verify');
  };

  return (
    <>
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        placeholder="Enter phone"
      />
      <button onClick={handleSubmit} className="w-full bg-black text-white py-2 rounded mt-3">
        Send OTP
      </button>
    </>
  );
}
