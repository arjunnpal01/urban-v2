"use client";
import { useRouter } from "next/navigation";
import AddNewService from "../components/AddNewService";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

// This page will receive the add handler via router state
export default function AddServicePage({ searchParams }) {
  const router = useRouter();
  // Get the add handler from router state if available
  const handleAddService = router?.state?.handleAddService;
  return <AddNewService onAddService={handleAddService} />;
}
