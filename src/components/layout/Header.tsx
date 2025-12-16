"use client";

import Link from "next/link";
import {
  Wallet,
  MessageSquare,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import CurrencySwitcher from "./CurrencySwitcher";
import { useUser } from "@/firebase/provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  const { user, isUserLoading } = useUser();

  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />
      
      <div className="flex-1 text-center">
        <h1 className="brand-heading hidden md:inline-block">EFADO MARKET HUBS</h1>
      </div>
      
      <div className="flex items-center justify-end gap-2">
        <CurrencySwitcher />
        <Button variant="ghost" size="icon" aria-label="Wallet">
          <Wallet className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Messages">
          <MessageSquare className="h-5 w-5" />
        </Button>

        {isUserLoading ? (
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        ) : user ? (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                        <AvatarFallback>{user.displayName ? user.displayName.charAt(0) : user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        ) : (
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        )}
        
      </div>
    </header>
  );
}
