"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/blog" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      <nav className="flex items-center justify-between w-full md:w-11/12 lg:w-4/5 max-w-6xl mx-auto mt-2 px-6 py-3 bg-white/95 backdrop-blur-md text-slate-800 shadow-xl shadow-amber-900/10 border border-amber-100/60 rounded-full transition-all">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="relative flex items-center py-1 pl-2">
            <Image
              src="/images/logo.svg"
              alt="SkillKwiz - How much do you know ?"
              width={320}
              height={90}
              className="h-16 md:h-20 w-auto object-contain scale-125 md:scale-135 origin-left transition-transform duration-300 group-hover:scale-140"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#69226F] font-bold bg-amber-50/80 shadow-sm"
                    : "text-slate-600 hover:text-[#69226F] hover:bg-amber-50/50"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-[#ff9d00] to-[#f73c5c] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons / Sign In / Sign Up */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/services"
            className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-[#69226F] hover:bg-amber-50 rounded-full transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/services"
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#69226F] to-[#9b34a3] hover:from-[#571b5c] hover:to-[#832b8a] rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-[#69226F] focus:outline-none rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 py-4 px-6 bg-white/95 backdrop-blur-xl border border-amber-100 shadow-2xl rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2.5 px-4 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#69226F] font-bold bg-amber-50"
                      : "text-slate-700 hover:text-[#69226F] hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100 mt-1 grid grid-cols-2 gap-2">
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-2.5 text-center text-sm font-bold text-slate-700 bg-slate-100 hover:bg-amber-50 rounded-xl"
              >
                Sign In
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-2.5 text-center text-sm font-bold text-white bg-gradient-to-r from-[#69226F] to-[#9b34a3] rounded-xl shadow"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

