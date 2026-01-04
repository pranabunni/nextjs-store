"use client"

import {SignOutButton} from "@clerk/nextjs";
import Link from "next/link";
import {toast} from "sonner";

export default function Logout() {
    return <SignOutButton><Link href="/" className="w-full text-left"
                                onClick={() => toast('Successfully logout from current session')}>Logout</Link></SignOutButton>
}