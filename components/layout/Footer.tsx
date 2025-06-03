import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-primary">Mithas</span> 365
            </h3>
            <p className="text-muted-foreground">
              Authentic Indian sweets, meals, and snacks with a perfect blend of tradition and taste.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Sweet Street, Flavor District, Bangalore, India - 560001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} />
                <Link href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </Link>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} />
                <Link href="mailto:info@mithas365.com" className="hover:text-primary transition-colors">
                  info@mithas365.com
                </Link>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>Open daily: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Our Menu", href: "/#menu" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates, special offers, and more.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mithas 365. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}