// import { Link } from "lucide-react";
import Link from 'next/link';

export default function page() {
    return (
        <main className="p-10">
            <h1>Dashboard</h1>
       <Link href="/admin" className="text-blue-600">
        Admin Panel
      </Link>


        </main>
    );
}