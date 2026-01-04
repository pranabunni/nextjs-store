import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {LuAlignLeft} from "react-icons/lu";
import {links} from "@/utils/links";
import Link from "next/link";
import {SignedIn, SignedOut, SignInButton, SignUpButton, useUser} from "@clerk/nextjs";
import UserIcon from "@/components/navbar/UserIcon";
import Logout from "@/components/navbar/Login";
import {currentUser} from "@clerk/nextjs/server";

export default async function Links() {
    const user = await currentUser();
    const isAdmin = user?.id === process.env.ADMIN_USER_ID;
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                <LuAlignLeft className='w-6 h-6' />
                <UserIcon />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
            <SignedOut>
                <DropdownMenuItem>
                    <SignInButton mode='modal'>
                        <button className='w-full text-left'>Login</button>
                    </SignInButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SignUpButton mode='modal'>
                        <button className='w-full text-left'>Register</button>
                    </SignUpButton>
                </DropdownMenuItem>
            </SignedOut>
            <SignedIn>
                {
                    links.map((link) =>
                        link.label === 'dashboard' && !isAdmin  ?
                            null :
                          <DropdownMenuItem key={link.href}>
                            <Link href={link.href} className='capitalize w-full'>{link.label}</Link>
                        </DropdownMenuItem>)
                }
            </SignedIn>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Logout />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}