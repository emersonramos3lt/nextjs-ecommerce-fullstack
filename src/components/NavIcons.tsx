"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";
import Link from "next/link";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const wixClient = useWixClient();
  
    const { cart, counter, getCart } = useCartStore();
  
    useEffect(() => {
      getCart(wixClient);
    }, [wixClient, getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
          }}
          afterSignOutUrl="/"
        />
        <Link href="/profile">Profile</Link>
      </SignedIn>

      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
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
  );
};

export default NavIcons;
