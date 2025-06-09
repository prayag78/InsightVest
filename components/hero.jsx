"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const HeroSection = () => {
  return (
    <motion.div
      className="pb-20 px-4 bg-[#0B0B0F] text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001510] via-[#000000] to-[#001F2E] opacity-80 z-[-1]" />

      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[105px] pb-6 grad-title m-10"
          variants={itemVariants}
        >
          Empower Your Wealth <br />
          <span className="block text-3xl md:text-5xl text-[#C1F2DC] font-semibold">
            with INSIGHTVEST
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-[#C1F2DC] mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Track your expenses effortlessly with AI-powered receipt scanning.
          INSIGHTVEST helps you record transactions, organize your finances, and
          view monthly spending reports — all in one place.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <SignedIn>
            <Link href="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 bg-[#00c896] hover:bg-[#00a67e] text-black font-semibold"
                >
                  Go to Dashboard
                </Button>
              </motion.div>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 bg-[#00c896] hover:bg-[#00a67e] text-black font-semibold"
                >
                  Start Free
                </Button>
              </motion.div>
            </SignInButton>
          </SignedOut>
        </motion.div>

        <div className="hero-image-wrapper mt-10 overflow-hidden bg-[#0B0B0F] w-full">
          <MacbookScroll
            src="/image.png"
            showGradient={true}
            title="Dashboard Preview"
            badge="Live"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
