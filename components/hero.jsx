"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const HeroSection = () => {
    // const imageRef = useRef();

    // useEffect(()=>{
    //     const imageElement = imageRef.current;
    //     const handlescroll = () => {
    //         const scrollPos = window.scrollY;
    //         const scrollThre = 100;

    //         if(scrollPos > scrollThre){
    //             imageElement.classList.add("scrolled")
    //         } else {
    //             imageElement.classList.remove("scrolled");
    //         }
            
    //     }

    //     window.addEventListener("scroll", handlescroll);

    //     return () => window.removeEventListener("scroll", handlescroll);
    // },[])
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center ">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 grad-title m-10">
          Manage Your Finances <br/> <p className="mb-4">with Intelligence</p>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
          <MacbookScroll
            src="/dashboard.png"
            showGradient={true}
            title="Dashboard Preview"
            badge="New"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
