"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Layers, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm transition-transform group-hover:scale-105">
            <Layers className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-zinc-900">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-primary-600">
              Figma Plugin
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/pricing"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 px-3 py-2"
          >
            View Plans
          </Link>
          <span className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm">
            Plugin launching soon
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Contact
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-zinc-100 pt-4">
            <span className="flex w-full items-center justify-center rounded-lg bg-zinc-900 py-2.5 text-center text-sm font-medium text-white shadow-sm">
              Plugin launching soon
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
