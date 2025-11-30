// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─────────────────────────────
// Environment variables
// ─────────────────────────────
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Online Consultations";
const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Professional online consultations with psychologists, psychiatrists and personal doctors.";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000";
const APP_TWITTER = process.env.NEXT_PUBLIC_APP_TWITTER || "@yourapp";
const APP_LOGO = process.env.NEXT_PUBLIC_APP_LOGO || `${APP_URL}/logo.png`;
const OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE || `${APP_URL}/default-og.png`;

// ─────────────────────────────
// Viewport (as in the SEO article)
// ─────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// ─────────────────────────────
// Static Metadata (strict article format + enhanced SEO)
// ─────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: `${APP_NAME} — Психолог та психіатр онлайн`,
    template: `%s | ${APP_NAME} — Онлайн психолог / психіатр`,
  },

  description: APP_DESCRIPTION,

  keywords: [
    "online psychologist Ukraine",
    "online psychiatrist Ukraine",
    "психолог онлайн",
    "психіатр онлайн",
    "онлайн консультація психолог",
    "ПТСР консультація психолог",
    "тривожність терапія",
    "депресія лікування онлайн",
    "mental health online Ukraine",
  ],

  alternates: {
    canonical: APP_URL,
    types: {
      "application/rss+xml": `${APP_URL}/rss.xml`,
    },
    languages: {
      "uk-UA": APP_URL,
      "en-US": `${APP_URL}/en`,
    },
  },

  openGraph: {
    siteName: APP_NAME,
    type: "website",
    locale: "uk_UA",
    url: APP_URL,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} OpenGraph Image`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: APP_TWITTER,
    creator: APP_TWITTER,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },

  applicationName: APP_NAME,

  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: [process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || ""],
    other: {
      "facebook-domain-verification": [
        process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || "",
      ],
      "msvalidate.01": [process.env.NEXT_PUBLIC_MS_VERIFICATION || ""],
    },
  },
};

// ─────────────────────────────
// JSON-LD COLLECTION (SEO BOOST)
// ─────────────────────────────

// Website search action (Google sitelinks search box)
const websiteSearchJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: APP_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${APP_URL}/search?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Medical organization (Google requires structured medical data)
const medicalOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: APP_NAME,
  url: APP_URL,
  description: APP_DESCRIPTION,
  logo: APP_LOGO,
  medicalSpecialty: [
    "PsychologicalCare",
    "Psychiatric",
    "Therapy",
    "PrimaryCare",
  ],
  areaServed: "UA",
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Online Consultation",
    },
  ],
};

// Conditions you help with (rank for “anxiety online therapy” etc.)
const conditionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mental health conditions we treat",
  itemListElement: [
    { "@type": "MedicalCondition", name: "Anxiety disorder" },
    { "@type": "MedicalCondition", name: "Depression" },
    { "@type": "MedicalCondition", name: "PTSD" },
    { "@type": "MedicalCondition", name: "Panic disorder" },
    { "@type": "MedicalCondition", name: "Burnout" },
  ],
};

// FAQ (Google may still show rich results for health)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Як проходить онлайн консультація?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Консультація проходить через відеозв'язок або чат. Триває 30–60 хвилин.",
      },
    },
    {
      "@type": "Question",
      name: "Чи можу я отримати допомогу при тривожності або депресії?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Так, наші фахівці спеціалізуються на лікуванні тривожних розладів, депресії та ПТСР.",
      },
    },
  ],
};

// Main medical webpage schema
const mainPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": APP_URL,
  },
  about: {
    "@type": "MedicalOrganization",
    name: APP_NAME,
    url: APP_URL,
    logo: APP_LOGO,
  },
  inLanguage: "uk-UA",
  isAccessibleForFree: true,
};

// ─────────────────────────────
// Root Layout
// ─────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className="bg-primary text-white antialiased">

        {/* All JSON-LD injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mainPageJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSearchJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalOrganizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(conditionsJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}