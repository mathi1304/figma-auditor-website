import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PluginMockup } from "@/components/home/PluginMockup";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { 
  Layers, 
  Copy, 
  Unlink2, 
  Boxes, 
  FileSpreadsheet, 
  Gauge, 
  ArrowRight,
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="h-6 w-6 text-primary-600" />,
    Copy: <Copy className="h-6 w-6 text-primary-600" />,
    Boxes: <Boxes className="h-6 w-6 text-primary-600" />,
    Unlink2: <Unlink2 className="h-6 w-6 text-primary-600" />,
    FileSpreadsheet: <FileSpreadsheet className="h-6 w-6 text-primary-600" />,
    Gauge: <Gauge className="h-6 w-6 text-primary-600" />,
  };

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-zinc-200/60 bg-gradient-to-b from-white via-zinc-50/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Target Audience Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/70 px-3.5 py-1 text-xs font-semibold text-primary-800 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-600" />
              <span>For Freelance Designers &amp; Agencies in US &amp; EU</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl sm:leading-[1.12]">
              Audit &amp; clean your Figma files{" "}
              <span className="text-primary-600">in seconds.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-zinc-900/10">
                Plugin launching soon
              </span>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-base font-semibold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 transition shadow-sm"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </Link>
            </div>

            {/* Key Value Highlights */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Runs inside Figma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Zero artwork uploads (metadata only)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-emerald-600" />
                <span>100% reversible (Cmd+Z)</span>
              </div>
            </div>
          </div>

          {/* PRODUCT MOCKUP SECTION */}
          <div className="mt-14 sm:mt-18">
            <PluginMockup />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (6 Cards) */}
      <section id="features" className="py-20 sm:py-28 bg-white border-b border-zinc-200/60 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-600">
              Core Capabilities
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Everything you need to maintain spotless design files
            </p>
            <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Design files get messy quickly during client sprints. Figma Auditor keeps your files clean, lean, and developer-friendly without interrupting your creative flow.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.features.map((feature) => (
              <div
                key={feature.id}
                className="group relative rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-zinc-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 group-hover:bg-primary-100/70 transition">
                      {iconMap[feature.icon] || <Sparkles className="h-6 w-6 text-primary-600" />}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full uppercase">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-primary-600 transition">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION (3 Steps) */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-zinc-50/50 border-b border-zinc-200/60 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-600">
              Workflow
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Clean files in three straightforward steps
            </p>
            <p className="mt-4 text-base text-zinc-600 max-w-xl mx-auto">
              No complicated CLI setups, no external browser tabs, and no account synchronization needed to start.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.howItWorks.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white font-mono font-bold text-sm shadow-sm mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (6 Questions) */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-b border-zinc-200/60 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary-600 mb-2">
              <HelpCircle className="h-4 w-4" />
              <span>Questions &amp; Answers</span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-3 text-base text-zinc-600 max-w-xl mx-auto">
              Everything you need to know about Figma Auditor, file privacy, and licensing.
            </p>
          </div>

          <FaqAccordion />

          <div className="mt-10 text-center text-sm text-zinc-600">
            Have a custom agency setup or question?{" "}
            <Link href="/contact" className="font-semibold text-primary-600 hover:text-primary-700 underline">
              Contact our support team
            </Link>{" "}
            directly.
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800/80 px-3.5 py-1 text-xs font-medium text-zinc-300 mb-6 border border-zinc-700">
              <Sparkles className="h-3.5 w-3.5 text-primary-400" />
              <span>Start auditing your design systems today</span>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
              Deliver cleaner Figma files to your clients.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Detect unused components, merge duplicates, and relink detached frames in seconds. Start with our free tier or upgrade when your design files scale.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span id="launching-soon" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-900/30">
                Plugin launching soon
              </span>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/90 px-7 py-3.5 text-base font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              >
                <span>Explore Pricing Plans</span>
                <ArrowRight className="h-4 w-4 text-zinc-400" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-zinc-400">
              Free plan includes up to 100 components &bull; No credit card required &bull; 7-day money-back guarantee on paid subscriptions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
