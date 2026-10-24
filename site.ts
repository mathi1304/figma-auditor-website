export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  description: string;
  componentLimit: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

// ========================================================
// PRIMARY PLACEHOLDERS - REPLACE THESE WITH YOUR OWN INFO
// ========================================================
export const SUPPORT_EMAIL = "figmaauditor@gmail.com";
export const COMPANY_LEGAL_NAME = "[YOUR_LEGAL_ENTITY_NAME_OR_YOUR_NAME]"; // e.g. "Acme Labs LLC" or "Jane Doe"
export const COMPANY_COUNTRY = "[YOUR_COUNTRY_OR_STATE]"; // e.g. "United States" or "Germany"
export const COMPANY_ADDRESS = "[YOUR_REGISTERED_BUSINESS_ADDRESS]"; // e.g. "123 Innovation Way, Suite 400, Austin, TX 78701"
export const SITE_URL = "https://figmaauditor.com"; // Replace with your domain upon Vercel deployment

export const siteConfig = {
  // Global Identifiers
  name: "Figma Auditor",
  legalEntityName: COMPANY_LEGAL_NAME,
  country: COMPANY_COUNTRY,
  address: COMPANY_ADDRESS,
  supportEmail: SUPPORT_EMAIL,
  siteUrl: SITE_URL,

  // Brand and Metadata
  tagline: "Audit, clean, and optimize your Figma design systems in seconds.",
  description:
    "Figma Auditor scans your design files to find unused components, duplicate masters, messy variants, and detached instances. Built for freelance designers and product teams in the US and EU.",
  copyrightYear: 2026,

  // Social & External (optional placeholders)
  twitterHandle: "@figmaauditor",
  githubUrl: "https://github.com/figma-auditor",

  // Navigation Links
  navLinks: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer Links
  footerLinks: {
    product: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Plugin launching soon", href: "/#launching-soon" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Refund Policy", href: "/refund" },
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },

  // 6 Core Features
  features: [
    {
      id: "unused",
      title: "Unused Component Detection",
      description:
        "Instantly uncover local master components that aren't instanced anywhere across your canvas pages. Safely archive or batch delete them to strip megabytes of unused bloat.",
      badge: "Cleanup",
      icon: "Layers",
    },
    {
      id: "duplicates",
      title: "Duplicate Master Detection",
      description:
        "Locate nearly identical button styles, card layouts, and icons copied across multiple client files. Consolidate them into canonical master components with a single click.",
      badge: "Consistency",
      icon: "Copy",
    },
    {
      id: "variants",
      title: "Variant & Property Analysis",
      description:
        "Detect broken variant combinations, conflicting property values, missing state combinations, and unstandardized naming structures before handing designs to developers.",
      badge: "Architecture",
      icon: "Boxes",
    },
    {
      id: "detached",
      title: "Detached Instance Finder",
      description:
        "Track down rogue elements detached from your shared team design libraries. Re-link frames to their original library components and preserve existing overrides.",
      badge: "Governance",
      icon: "Unlink2",
    },
    {
      id: "reports",
      title: "Comprehensive Scan Reports",
      description:
        "Export detailed audit summaries in clean CSV, JSON, or executive PDF formats. Provide clients and development teams with verifiable proof of design system hygiene.",
      badge: "Deliverables",
      icon: "FileSpreadsheet",
    },
    {
      id: "health-score",
      title: "Design System Health Score",
      description:
        "Benchmark your file with a weighted 0–100 health index based on component utilization, variant cleanliness, and library detachment rates. Track improvements over time.",
      badge: "Benchmark",
      icon: "Gauge",
    },
  ] as FeatureItem[],

  // How It Works Steps (3 steps: Install, Scan, Clean up)
  howItWorks: [
    {
      step: "01",
      title: "Launching on Figma Community soon",
      description:
        "Figma Auditor is preparing for launch. Once it is available, you will be able to open it directly from the Figma Plugins menu.",
    },
    {
      step: "02",
      title: "Scan Your Entire File in Seconds",
      description:
        "Choose to scan selected frames, active pages, or all canvases. Figma Auditor reads file node metadata locally without altering your canvas layers.",
    },
    {
      step: "03",
      title: "Clean Up & Export Audit Reports",
      description:
        "Inspect flagged items grouped by severity. Apply batch fixes with full Figma undo support (Cmd+Z), and export verified client-ready handoff reports.",
    },
  ] as HowItWorksStep[],

  // 4 Pricing Plans
  pricingPlans: [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description: "Ideal for solo designers testing the auditor on small client projects.",
      componentLimit: "Up to 100 components per file",
      ctaText: "Start for free",
      isPopular: false,
      features: [
        "Audit up to 100 components",
        "Detect unused components",
        "Find detached instances",
        "Overall Design Health Score",
        "Community support",
      ],
    },
    {
      id: "one-time",
      name: "One-Time Scan",
      price: "$9",
      period: "per scan",
      badge: "Pay as you go",
      description: "Great for freelancers handing off a client project with a clean file audit.",
      componentLimit: "Up to 500 components per scan",
      ctaText: "Buy single scan",
      isPopular: false,
      features: [
        "Single comprehensive file audit",
        "Up to 500 components analyzed",
        "Duplicate component detection",
        "Full variant structure breakdown",
        "Downloadable CSV/JSON audit summary",
        "No monthly recurring commitment",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$29",
      period: "/month",
      badge: "Most Popular",
      description: "For active freelance UI/UX designers maintaining multiple design files.",
      componentLimit: "Up to 1,000 components per file",
      ctaText: "Get Pro plan",
      isPopular: true,
      features: [
        "Unlimited scans per month",
        "Up to 1,000 components per file",
        "Advanced duplicate & variant detection",
        "Automated detached instance finder",
        "1-click batch cleanup actions",
        "Export audit reports (PDF & CSV)",
        "Priority email support (within 24h)",
        "7-day money-back guarantee",
      ],
    },
    {
      id: "agency",
      name: "Agency",
      price: "$69",
      period: "/month",
      badge: "For Teams",
      description: "For design agencies and design system teams handling enterprise files.",
      componentLimit: "Up to 2,500 components per file",
      ctaText: "Get Agency plan",
      isPopular: false,
      features: [
        "Unlimited scans across all client files",
        "Up to 2,500 components per file",
        "Deep cross-page variant analysis",
        "Shared custom audit rules & presets",
        "Multi-editor team license (up to 5 editors)",
        "Automated design system health tracking",
        "Dedicated VIP support (within 12h)",
        "7-day money-back guarantee",
      ],
    },
  ] as PricingPlan[],

  // FAQ Items (6 questions tailored to freelance designers and agencies)
  faqs: [
    {
      question: "How does Figma Auditor access my Figma files?",
      answer:
        "Figma Auditor runs as a native plugin directly inside your Figma desktop or web app session using the official Figma Plugin API. It only inspects file structure metadata (component IDs, layer trees, variant names, instance relationships) locally during the scan. It never uploads, reads, or exports your proprietary artboards, vector coordinates, or image assets.",
    },
    {
      question: "Can Figma Auditor break or accidentally delete my design work?",
      answer:
        "No. Figma Auditor is designed with safety-first principles. By default, it operates in a read-only audit mode, generating an interactive report of issues. When you choose to run automated cleanup actions (like relinking or removing unused components), all modifications are applied in standard Figma undo batches, allowing you to hit Cmd+Z (Ctrl+Z) at any time.",
    },
    {
      question: "Does the plugin work with Figma Team Libraries?",
      answer:
        "Yes! Figma Auditor distinguishes between local master components created in the active file and published components imported from linked team design libraries. It flags instances that have become detached from your shared libraries and locates orphaned local duplicates.",
    },
    {
      question: "What is the difference between the One-Time Scan and the Pro subscription?",
      answer:
        "The One-Time Scan ($9) is tailored for freelancers who just need to polish a specific client deliverable or prepare a file for handoff without committing to a recurring monthly subscription. Pro ($29/month) is for designers who continuously audit and maintain multiple active design files, offering unlimited scans, batch cleanup actions, and report exports.",
    },
    {
      question: "How are payments handled, and what about EU VAT?",
      answer:
        "All payments are handled securely by our Merchant of Record payment provider. EU VAT and applicable US state sales taxes are automatically calculated and itemized during checkout, and tax-compliant business invoices (with reverse-charge VAT ID support) are generated immediately upon purchase.",
    },
    {
      question: "What is your refund policy if the plugin doesn't fit my workflow?",
      answer:
        `We offer a straightforward 7-day money-back guarantee on your first subscription billing cycle (Pro or Agency). If you're not satisfied, simply contact ${SUPPORT_EMAIL} within 7 days for a full refund. Note that completed One-Time Scans are non-refundable once the scan computation has finished.`,
    },
  ],
};
