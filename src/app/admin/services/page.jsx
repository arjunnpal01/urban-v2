// app/admin/services/page.jsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AllServiceRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin/services/all");
  }, []);
  return null;
}
