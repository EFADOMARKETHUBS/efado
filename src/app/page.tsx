"use client";

import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  ShoppingCart,
  Tractor,
  Truck,
  Gamepad2,
  MessagesSquare,
  Wallet,
  ShieldCheck,
  UserSquare2,
  PlayCircle,
  Loader2,
  Map,
  ShoppingBag,
  HandHelping,
  MessageSquareHeart,
  Factory,
  Globe,
  Utensils,
  HardHat,
  Database,
  BookHeart,
  User,
  Car,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SmartMatchingForm from "@/components/SmartMatchingForm";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import HeroCarousel from "@/components/home/HeroCarousel";
import GeneratedVideoPlayer from "@/components/home/GeneratedVideoPlayer";
import AnimatedHeroText from "@/components/home/AnimatedHeroText";
import QuickStartGuide from "@/components/home/QuickStartGuide";

const hubs = [
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "Ecommerce",
        description: "Buy and sell new goods.",
        href: "/ecommerce",
    },
    {
        id: "fairly-used",
        icon: ShoppingBag,
        title: "Fairly-Used",
        description: "Find deals on pre-owned items.",
        href: "/fairly-used",
    },
    {
        id: "global-local-market",
        icon: Globe,
        title: "Global Local Market",
        description: "Discover local crafts and foods.",
        href: "/global-local-market",
    },
    {
        id: "local-restaurants",
        icon: Utensils,
        title: "Local Restaurants",
        description: "Explore authentic local cuisine.",
        href: "/global-local-market/restaurants",
    },
    {
        id: "employment",
        icon: Briefcase,
        title: "Employment",
        description: "Connect with employers.",
        href: "/employment",
    },
    {
        id: "housing",
        icon: HomeIcon,
        title: "Housing",
        description: "Find tenants or your next home.",
        href: "/housing",
    },
    {
        id: "land-property",
        icon: Map,
        title: "Land & Property",
        description: "Buy, sell, and develop property.",
        href: "/land-property",
    },
    {
        id: "data-management",
        icon: Database,
        title: "Data Management",
        description: "Manage core business operations.",
        href: "/data-management",
    },
    {
        id: "education",
        icon: GraduationCap,
        title: "Education",
        description: "Access courses and certifications.",
        href: "/education",
    },
    {
        id: "agriculture",
        icon: Tractor,
        title: "Agriculture",
        description: "Marketplace for farmers.",
        href: "/agriculture",
    },
    {
        id: "logistics",
        icon: Truck,
        title: "Logistics",
        description: "Connect with transporters.",
        href: "/logistics",
    },
    {
        id: "gaming",
        icon: Gamepad2,
        title: "Gaming",
        description: "Play games and win real money.",
        href: "/gaming",
    },
    {
        id: "divine-voice",
        icon: BookHeart,
        title: "Divine Voice",
        description: "A hub for spiritual connection.",
        href: "/divine-voice",
    },
    {
        id: "efado-connect-talks",
        icon: MessageSquareHeart,
        title: "EFADO Connect Talks",
        description: "Join community discussions.",
        href: "/efado-connect-talks",
    },
    {
        id: "community",
        icon: MessagesSquare,
        title: "Community",
        description: "Join savings and mentorship groups.",
        href: "/community",
    },
    {
        id: "hepihands",
        icon: HandHelping,
        title: "Hepihands",
        description: "Access financial loan services.",
        href: "/hepihands",
    },
    {
        id: "credit-card",
        icon: CreditCard,
        title: "Credit Card Hub",
        description: "Manage gift & prepaid cards.",
        href: "/credit-card",
    },
    {
        id: "manufacturing",
        icon: Factory,
        title: "Manufacturing",
        description: "Industry trends and insights.",
        href: "/manufacturing",
    },
    {
        id: "service-corps",
        icon: HardHat,
        title: "Service Corps",
        description: "Hire local & global professionals.",
        href: "/efado-service-corps",
    },
];

const features = [
  {
    icon: Wallet,
    title: "Integrated Digital Wallet",
    description:
      "A secure wallet for seamless payments, escrow, and invoicing across all hubs.",
  },
  {
    icon: UserSquare2,
    title: "Unified User Profile",
    description:
      "One profile to manage your identity and activities across the entire EFADO ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Trust",
    description:
      "Built with data privacy, buyer/seller protection, and secure transactions at its core.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 space-y-24 pb-24">
        <section className="relative w-full">
          <HeroCarousel />
        </section>

        <section className="relative text-center">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>
          <div className="container">
            <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-6xl">
              Welcome to the EFADO Dashboard
            </h1>
            <AnimatedHeroText />
          </div>
        </section>

        <QuickStartGuide />

        <section className="container">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">
              Explore Our Market Hubs
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {hubs.map((hub) => (
                <Link key={hub.id} href={hub.href} className="block group">
                  <Card className="h-full flex flex-col items-center justify-center p-6 text-center transition-colors group-hover:bg-muted group-hover:shadow-lg">
                      <hub.icon className="w-10 h-10 mb-4 text-primary" />
                      <CardTitle className="text-xl">{hub.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">{hub.description}</CardDescription>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

        <section id="smart-matching" className="container scroll-mt-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight">
                Find Your Perfect Match with AI
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Our generative AI tool analyzes your profile to connect you with
                the best opportunities in employment, housing, business, and
                education. Describe what you're looking for and let our Smart
                Matching do the rest.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-foreground/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  Fill out your profile and let our AI find opportunities for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SmartMatchingForm />
              </CardContent>
            </Card>
          </div>
        </section>
        <GeneratedVideoPlayer />
      </main>
      <Footer />
    </div>
  );
}
