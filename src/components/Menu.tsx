"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Menu = () => {

  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/menu.svg"
          alt="Menu"
          width={28}
          height={28}
          className="cursor-pointer w-[28px] h-[28px]"
        />
      </SheetTrigger>

      <SheetContent className="bg-zinc-950 text-white border-none">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex flex-col items-center justify-center h-4/5 text-2xl gap-12 text-white">
           
          <Link href="/" className="text-white">Home</Link>
          <Link href="/" className="text-white">Shop</Link>
          <Link href="/" className="text-white">About</Link>
          <Link href="/" className="text-white">Contact</Link>

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
        </SheetDescription>

       
      </SheetContent>

      
    </Sheet>
  );
};

export default Menu;
