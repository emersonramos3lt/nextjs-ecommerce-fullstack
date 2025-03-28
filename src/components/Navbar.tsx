"use client";

import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { useCartStore } from "@/hooks/useCartStore";
import CartModal from "./CartModal";
// import NavIcons from './NavIcons'

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, counter, getCart } = useCartStore();

  return (
    <div
      className="
    h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative"
    >
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-lg sm:text-2xl tracking-wide">UrbanVogue</div>
        </Link>

        <div className="flex gap-4 items-center">
          <Menu />
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <Image src="/cart.svg" alt="" width={22} height={22} />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
              {counter}
            </div>
          </div>
          {isCartOpen && <CartModal />}
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">UrbanVogue</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Policy</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
