type P = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const IconNetwork = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="9" y="3" width="6" height="5" rx="1.2" />
    <rect x="3" y="16" width="6" height="5" rx="1.2" />
    <rect x="15" y="16" width="6" height="5" rx="1.2" />
    <path d="M12 8v4M6 16v-4h12v4" />
  </svg>
);

export const IconShield = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
    <path d="M8.5 12.2l2.4 2.4 4.6-4.8" />
  </svg>
);

export const IconCamera = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 8.5A1.5 1.5 0 014.5 7h9A1.5 1.5 0 0115 8.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 013 15.5v-7z" />
    <path d="M15 11l5-3v8l-5-3" />
  </svg>
);

export const IconCart = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 4h2.5l2 10h9.5l2-7H7" />
    <circle cx="9" cy="19" r="1.4" />
    <circle cx="17" cy="19" r="1.4" />
  </svg>
);

export const IconCode = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M13.5 5l-3 14" />
  </svg>
);

export const IconFlow = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="5.5" cy="6" r="2.3" />
    <circle cx="18.5" cy="12" r="2.3" />
    <circle cx="5.5" cy="18" r="2.3" />
    <path d="M7.8 6h3.7a3 3 0 013 3v.7M7.8 18h3.7a3 3 0 003-3v-.7" />
  </svg>
);

export const IconWhatsApp = ({ className }: P) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M16.02 3C8.84 3 3 8.83 3 16c0 2.3.6 4.54 1.74 6.52L3 29l6.63-1.7A13 13 0 0016.02 29C23.18 29 29 23.17 29 16S23.18 3 16.02 3zm0 23.8c-1.95 0-3.86-.53-5.53-1.52l-.4-.24-3.93 1.01 1.05-3.83-.26-.4A10.77 10.77 0 015.2 16c0-5.96 4.86-10.8 10.82-10.8S26.8 10.04 26.8 16s-4.84 10.8-10.78 10.8zm5.93-8.08c-.32-.16-1.92-.95-2.22-1.05-.3-.11-.52-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.18-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.27 3.46 5.5 4.86.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.6-.37z" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg {...base} strokeWidth={2.2} className={className}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg {...base} width={18} height={18} strokeWidth={2} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
