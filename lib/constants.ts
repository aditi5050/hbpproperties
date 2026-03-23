export const COMPANY = {
  name: "HBP Properties",
  tagline: "We expertise in Tri-city Real Estate's & Lands",
  rera: "PBRERA-SAS81-REA2004",
  email: "hbppropert123@gmail.com",
  leadDestination: "aditigoyalprg21@gmail.com",
  addressLines: [
    "Sohana Landran Road,",
    "Near Govt. Girls School,",
    "Sector-77, Sohana,",
    "Mohali, Punjab, India",
  ],
  contacts: [
    { name: "Harmeet", phone: "91658-00003" },
    { name: "Sunder Ram Vinaik", phone: "98558-21393" },
    { name: "Bhupinder", phone: "97794-57663" },
    { name: "Parveen", phone: "99141-06405" },
  ],
  whatsappNumber: "919165800003",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact Us", href: "/contact" },
];

export const SERVICE_CARDS = [
  {
    title: "Buy Property",
    description:
      "Find premium apartments, plots, and villas in top Tri-city neighborhoods with clear legal support.",
  },
  {
    title: "Sell Property",
    description:
      "Get qualified buyers, strategic pricing guidance, and end-to-end transaction assistance.",
  },
  {
    title: "Rent Property",
    description:
      "Discover verified rental options for families, professionals, and commercial tenants.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Maximize long-term returns through curated opportunities in high-growth micro-markets.",
  },
] as const;

export const STATS = [
  { label: "Years of Experience", value: 50, suffix: "+" },
  { label: "Properties Sold", value: 850, suffix: "+" },
  { label: "Happy Clients", value: 1200, suffix: "+" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amanpreet Singh",
    role: "Home Buyer",
    quote:
      "HBP Properties made my first home purchase stress-free. Their local expertise in Mohali is unmatched.",
  },
  {
    name: "Ritika Sharma",
    role: "Investor",
    quote:
      "The team helped me identify high-potential land parcels with great growth upside in Tri-city.",
  },
  {
    name: "Vikram Malhotra",
    role: "Property Seller",
    quote:
      "Professional, transparent, and fast. My property sold at a fair value with complete documentation support.",
  },
] as const;

export const PROPERTY_LISTINGS = [
  {
    id: 1,
    title: "Luxury 3BHK in Sector 77",
    location: "Mohali",
    type: "Buy",
    price: "INR 1.25 Cr",
    bedrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Premium Duplex Villa",
    location: "Panchkula",
    type: "Buy",
    price: "INR 1.85 Cr",
    bedrooms: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Commercial Showroom Near Airport Road",
    location: "Chandigarh",
    type: "Sell",
    price: "INR 2.8 Cr",
    bedrooms: 2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Family Villa for Rent",
    location: "Panchkula",
    type: "Rent",
    price: "INR 48,000/mo",
    bedrooms: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Residential Plot - Gated Community",
    location: "Mohali",
    type: "Sell",
    price: "INR 92 Lakh",
    bedrooms: 0,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Modern 2BHK Apartment",
    location: "Chandigarh",
    type: "Rent",
    price: "INR 32,000/mo",
    bedrooms: 2,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  },
] as const;
