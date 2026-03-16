"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="max-w-5xl mx-auto text-white text-center px-1">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="flex justify-center"
      >
        <Image
          src="/assets/hbplogo.jpeg"
          alt="HBP Logo"
          width={210}
          height={210}
          priority
          className="rounded-full border-2 border-gold/70 ring-4 ring-white/20 mb-8 md:mb-9 shadow-2xl w-36 h-36 md:w-44 md:h-44"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="text-[42px] sm:text-6xl lg:text-[72px] font-black leading-[1.06] tracking-tight max-w-4xl mx-auto"
      >
        Trusted Real Estate Experts in Tri-City
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mt-6 text-lg md:text-xl text-gray-100/95 max-w-3xl mx-auto leading-relaxed"
      >
        Buy, sell, rent and invest in Mohali, Chandigarh and Panchkula with confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5"
      >
        <Link href="#properties" className="btn-primary inline-flex items-center justify-center text-base px-8 py-3.5 h-12 min-w-[190px] w-full sm:w-auto shadow-lg shadow-gold/30 hover:scale-[1.02]">
          View Properties
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center text-base px-8 py-3.5 h-12 min-w-[190px] w-full sm:w-auto rounded-xl border-2 border-white text-white bg-white/5 font-semibold transition-all hover:bg-white hover:text-dark hover:scale-[1.02]"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
