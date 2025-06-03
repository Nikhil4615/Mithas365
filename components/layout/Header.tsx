"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Instagram, Facebook } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handle navigation clicks
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Only handle anchor links for smooth scrolling, let regular routes navigate normally
    if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                isScrolled || isMenuOpen 
                  ? "text-foreground" 
                  : "text-white drop-shadow-lg"
              }`}>
                <span className={`${
                  isScrolled || isMenuOpen 
                    ? "text-primary" 
                    : "text-primary/90"
                }`}>
                  Mithas
                </span>{" "}
                365
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    // Only prevent default for anchor links, not regular routes
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                    }
                    handleNavClick(item.href);
                  }}
                  className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-foreground/90 hover:text-foreground"
                      : "text-white hover:text-white/90"
                  } ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="tel:+919111930000"
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? "text-foreground/90 hover:text-primary" 
                    : "text-white hover:text-white/90"
                }`}
              >
                <Phone size={16} />
                <span className="hidden xl:inline">+91 9111930000</span>
              </Link>
              
              <button
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Order Online
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden z-50 p-2 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current top-3 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Menu Content */}
        <div className="relative flex flex-col h-full">
          {/* Header Spacer */}
          <div className="h-20" />
          
          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    // Only prevent default for anchor links, not regular routes
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                    }
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-4 text-xl font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? "slideInFromRight 0.3s ease-out forwards" : "none",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-border">
            <Link
              href="tel:+919111930000"
              className="flex items-center space-x-3 p-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">+91 9111930000</span>
            </Link>
            
            <div className="flex items-center space-x-4 p-3">
              <Link 
                href="https://instagram.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
            </div>

            <button className="w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Order Online
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}