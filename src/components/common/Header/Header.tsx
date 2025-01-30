"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, ShoppingCart, Heart, User } from "lucide-react";
import SearchCompo from "@/components/common/Header/Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="#" className="text-gray-800 hover:text-gray-500">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-500">Shop</a>
          <a href="#" className="text-gray-800 hover:text-gray-500">Blog</a>
          <a href="#" className="text-gray-800 hover:text-gray-500">Contact</a>
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <User className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
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
          <a href="#" className="block text-gray-800 hover:text-gray-500">Home</a>
          <a href="#" className="block text-gray-800 hover:text-gray-500">Shop</a>
          <a href="#" className="block text-gray-800 hover:text-gray-500">Blog</a>
          <a href="#" className="block text-gray-800 hover:text-gray-500">Contact</a>

          {/* Mobile Icons */}
          <div className="flex space-x-6 mt-4 justify-center">
            <User className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
