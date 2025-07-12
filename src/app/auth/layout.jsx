"use client"; // ✅ Only if you use router or button with onClick

export default function AuthLayout({ children }) {
  return (
    <div>{children}</div>
  );
}
