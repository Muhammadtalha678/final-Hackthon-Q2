"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, ShoppingCart, Heart, User } from "lucide-react";
import SearchCompo from "@/components/common/Header/Search";
import { navLink } from "@/lib/link";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { usePathname } from 'next/navigation'
import clsx from "clsx";
import { useCart } from '@/context/CartContext'
const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart()

  return (
    <header className="w-full bg-white shadow-md overflow-x-hidden">
      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo (Bigger & Always Visible) */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={180} // Bigger logo size
            height={80}
            className="object-contain max-w-[200px] md:max-w-[180px]" // Responsive
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {
            navLink.map((nav, index) => (
              <Link key={index} href={nav.path} className={clsx(
                'text-gray-800 hover:text-[#e6b477]',
                { 'text-[#e6b477]': pathname === nav.path }
              )}>
                {nav.name}
              </Link>
            ))
          }
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <User className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />

            {/* Cart count badge */}
            {/* {cartCount > 0 && ( */}
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
            {/* )} */}
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Search Bar (Moves Down on lg Screens) */}
      <div className="flex w-full justify-center px-6 mt-4">
        <SearchCompo />
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-100 py-4 px-6 space-y-4 text-center">
          {
            navLink.map((nav, index) => (
              <Link key={index} href={nav.path} className="block text-gray-800 hover:text-gray-500">{nav.name}</Link>
            ))
          }

          {/* Mobile Icons */}
          <div className="flex space-x-6 mt-4 justify-center">
            <User className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />

              {/* Cart count badge */}
              {/* {cartCount > 0 && ( */}
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
              {/* )} */}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
