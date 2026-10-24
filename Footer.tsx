import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Layers, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm">
                <Layers className="h-4 w-4" />
              </div>
              <span className="text-base font-semibold tracking-tight text-zinc-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-600 max-w-sm leading-relaxed">
              {siteConfig.tagline} Detect unused components, duplicates, variants, and detached instances directly inside Figma.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Runs in-browser / desktop Figma. Privacy-first architecture.</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <span className="text-sm text-zinc-500">Plugin launching soon</span>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{siteConfig.supportEmail}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Legal & Compliance
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <span className="text-xs text-zinc-400">
                  EU & US Compliant (GDPR Ready)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-zinc-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved. Not affiliated with or endorsed by Figma, Inc.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>Support: <a href={`mailto:${siteConfig.supportEmail}`} className="text-zinc-800 underline hover:text-primary-600">{siteConfig.supportEmail}</a></span>
            <span>&bull;</span>
            <span>Response within 24&ndash;48 hrs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
