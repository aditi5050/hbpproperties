"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="max-w-3xl text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Image
          src="/assets/hbplogo.jpeg"
          alt="HBP Logo"
          width={160}
          height={160}
          priority
          className="rounded-full border-2 border-gold/70 ring-4 ring-white/20 mb-7 shadow-2xl w-28 h-28 md:w-36 md:h-36"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight"
      >
        Trusted Real Estate Experts in Tri-City
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mt-5 text-lg md:text-xl text-gray-100 max-w-2xl"
      >
        Buy, sell, rent and invest in Mohali, Chandigarh and Panchkula with confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-9 flex flex-wrap gap-4"
      >
        <Link href="#properties" className="btn-primary text-base px-7 py-3.5 shadow-lg shadow-gold/30">
          View Properties
        </Link>
        <Link
          href="/contact"
          className="btn-secondary text-base px-7 py-3.5 border-white/90 text-white bg-white/5 hover:bg-white hover:text-dark"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
