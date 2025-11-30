import type { Metadata, Viewport } from "next";
import "./globals.css";

const APP_NAME = "Online Consultations";
const APP_DESCRIPTION =
  "Professional online consultations with psychologists, psychiatrists and personal doctors.";
const APP_URL = "https://localhost:3000";

const LOGO = "/logo.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: `${APP_NAME} — Психолог та психіатр онлайн`,
    template: `%s | ${APP_NAME} — Онлайн психолог / психіатр`,
  },

  description: APP_DESCRIPTION,

  openGraph: {
    siteName: APP_NAME,
    type: "website",
    locale: "uk_UA",
    url: APP_URL,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: LOGO,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} OpenGraph Image`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@yourapp",
    creator: "@yourapp",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [LOGO],
  },

  applicationName: APP_NAME,

  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
};

// JSON-LD
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

const medicalOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: APP_NAME,
  url: APP_URL,
  description: APP_DESCRIPTION,
  logo: LOGO,
  medicalSpecialty: ["PsychologicalCare", "Psychiatric", "Therapy", "PrimaryCare"],
  areaServed: "UA",
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Online Consultation",
    },
  ],
};

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
    logo: LOGO,
  },
  inLanguage: "uk-UA",
  isAccessibleForFree: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className="bg-neutral-light antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSearchJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionsJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}