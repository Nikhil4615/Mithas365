"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Sweets", href: "/#sweets" },
  { name: "Restaurant", href: "/#restaurant" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-2 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <h1 className={cn(
            "text-2xl font-bold tracking-tight",
            scrolled ? "text-foreground" : "text-white"
          )}>
            <span className="text-primary">Mithas</span> 365
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white",
                pathname === item.href && "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="tel:+919876543210" 
            className={cn(
              "flex items-center gap-2 text-sm",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            <Phone size={16} />
            <span className="hidden lg:inline">+91 98765 43210</span>
          </Link>
          
          <Button variant="default" size="sm">
            Order Online
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col md:hidden">
            <div className="h-20" />
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors hover:text-primary",
                    pathname === item.href && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px w-full bg-border my-4" />
              <Link 
                href="tel:+919876543210" 
                className="flex items-center gap-2 py-2"
              >
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </Link>
              <div className="flex items-center gap-4 py-2">
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram size={20} />
                </Link>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook size={20} />
                </Link>
              </div>
              <Button className="mt-4">Order Online</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}