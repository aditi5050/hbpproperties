"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="max-w-3xl px-6 text-center">
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
        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
      >
        Trusted Real Estate Experts in Tri-City
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-gray-300 text-lg md:text-xl mb-8"
      >
        Buy, sell, rent and invest with confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex gap-4 justify-center"
      >
        <Link
          href="/services"
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-full shadow-lg hover:scale-105 transition"
        >
          View Properties
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
