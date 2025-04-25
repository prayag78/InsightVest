import React from "react";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full border-b bg-background/50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/insightvest_logo.png"}
            alt="logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="outline">
              <LayoutDashboard size={18}/>
                <span className=" hidden md:inline">dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2">
              <PenBox size={18}/>
                <span className=" hidden md:inline">Create Transaction</span>
              </Button>
            </Link>
          </SignedIn>
        
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
          {/* <SignUpButton /> */}
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox:"w-10 h-10",
            }
          }} />
        </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
