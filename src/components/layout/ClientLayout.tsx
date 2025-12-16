"use client";

import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  ShoppingCart,
  Tractor,
  Truck,
  Gamepad2,
  MessagesSquare,
  Cog,
  LifeBuoy,
  LayoutDashboard,
  HandHelping,
  Factory,
  MessageSquareHeart,
  Map,
  ShoppingBag,
  HardHat,
  Globe,
  DollarSign,
  Database,
  Shield,
  BookHeart,
  User,
  CreditCard,
} from "lucide-react";
import CurrencySwitcher from "@/components/layout/CurrencySwitcher";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import GlobalAnnouncement from "@/components/shared/GlobalAnnouncement";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import { TooltipProvider } from '@/components/ui/tooltip';

const navLinks = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/account", label: "My Account & Wallets", icon: User },
    { href: "/ecommerce", label: "Ecommerce", icon: ShoppingCart },
    { href: "/fairly-used", label: "Fairly-Used", icon: ShoppingBag },
    { href: "/global-local-market", label: "Global Local Market", icon: Globe },
    { href: "/currency-exchange", label: "Currency Exchange", icon: DollarSign },
    { href: "/store-business-advert", label: "Store & Business Advert", icon: Briefcase },
    { href: "/sell-at-efado", label: "Sell at EFADO", icon: DollarSign },
    { href: "/employment", label: "Employment", icon: Briefcase },
    { href: "/housing", label: "Housing", icon: HomeIcon },
    { href: "/land-property", label: "Land & Property", icon: Map },
    { href: "/data-management", label: "Data Management", icon: Database },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/agriculture", label: "Agriculture", icon: Tractor },
    { href: "/logistics", label: "Logistics", icon: Truck },
    { href: "/gaming", label: "Gaming", icon: Gamepad2 },
    { href: "/divine-voice", label: "Divine Voice", icon: BookHeart },
    { href: "/efado-connect-talks", label: "EFADO Connect Talks", icon: MessageSquareHeart },
    { href: "/community", label: "Community", icon: MessagesSquare },
    { href: "/hepihands", label: "Hepihands", icon: HandHelping },
    { href: "/credit-card", label: "Credit Card Hub", icon: CreditCard },
    { href: "/manufacturing", label: "Manufacturing", icon: Factory },
    { href: "/efado-service-corps", label: "Service Corps", icon: HardHat },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <CurrencyProvider>
        <TooltipProvider>
          <SidebarProvider>
            <div className={cn("min-h-screen w-full font-body antialiased bg-background text-foreground")}>
              <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                    <Logo />
                    <span className="font-headline text-xl font-bold whitespace-nowrap group-data-[collapsible=icon]:hidden">
                        EFADO Market Hubs
                    </span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                    {navLinks.map((link) => (
                        <SidebarMenuItem key={link.label}>
                        <SidebarMenuButton
                            href={link.href}
                            asChild
                            tooltip={link.label}
                        >
                            <Link href={link.href}>
                            <link.icon />
                            <span>{link.label}</span>
                            </Link>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="CEO Dashboard">
                                <Link href="/ceo/login">
                                <Shield />
                                <span>CEO Dashboard</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="#" tooltip="Help">
                        <LifeBuoy />
                        <span>Help</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="#" tooltip="Settings">
                        <Cog />
                        <span>Settings</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
              </Sidebar>

              <SidebarInset>
                <Header />
                <main className="flex-1 p-4 md:p-6">{children}</main>
              </SidebarInset>
              
            <Toaster />
            <GlobalAnnouncement />
            </div>
          </SidebarProvider>
        </TooltipProvider>
      </CurrencyProvider>
    </FirebaseClientProvider>
  );
}
