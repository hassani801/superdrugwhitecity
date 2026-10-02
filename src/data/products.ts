export interface ProductItem {
  id: string;
  number: string;
  category: string;
  name: string;
  brand: string;
  description: string;
  inStoreAvailability: string;
  aisle: string;
  badge?: string;
  image: string;
  accentNote: string;
}

export const trendingProducts: ProductItem[] = [
  {
    id: "prod-01",
    number: "01",
    category: "SKINCARE",
    brand: "CeraVe",
    name: "Hydrating Hyaluronic Acid Serum",
    description: "Lightweight gel-cream serum delivering 24-hour hydration with three essential ceramides and vitamin B5.",
    inStoreAvailability: "In Stock at White City",
    aisle: "Aisle 04 — Derma Skincare",
    badge: "Staff Favourite",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    accentNote: "Instant barrier rescue"
  },
  {
    id: "prod-02",
    number: "02",
    category: "MAKEUP",
    brand: "e.l.f. Cosmetics",
    name: "Halo Glow Liquid Filter",
    description: "The multi-purpose liquid glow booster infused with squalane and hyaluronic acid for a soft-focus radiant complexion.",
    inStoreAvailability: "Full shade range in stock",
    aisle: "Aisle 01 — Trending Complexion",
    badge: "Viral Find",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    accentNote: "Glass skin in one swipe"
  },
  {
    id: "prod-03",
    number: "03",
    category: "LIPCARE",
    brand: "NYX Professional Makeup",
    name: "Fat Oil Lip Drip",
    description: "High-shine tinted lip oil enriched with cloudberry, raspberry oil and squalane for 12 hours of cushion hydration.",
    inStoreAvailability: "White City Swatch Station ready",
    aisle: "Aisle 02 — Lip Bar",
    badge: "Store Bestseller",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    accentNote: "Non-sticky glass gloss"
  },
  {
    id: "prod-04",
    number: "04",
    category: "FRAGRANCE",
    brand: "Sol de Janeiro",
    name: "Cheirosa 68 Beija Flor Perfume Mist",
    description: "An uplifting floral gourmand scent with Brazilian jasmine, pink dragonfruit, and ocean air musk notes.",
    inStoreAvailability: "Available at White City Fragrance Island",
    aisle: "Fragrance Pavilion — Central Island",
    badge: "Summer Scent",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    accentNote: "Lush Brazilian jasmine"
  },
  {
    id: "prod-05",
    number: "05",
    category: "HAIRCARE",
    brand: "Color Wow",
    name: "Dream Coat Supernatural Spray",
    description: "Heat-activated polymer technology that seals every hair strand against extreme humidity with high-gloss mirror finish.",
    inStoreAvailability: "Full size and travel sizes",
    aisle: "Aisle 06 — Professional Hair",
    badge: "Salon Grade",
    image: "https://images.unsplash.com/photo-1608248597359-002d29463556?auto=format&fit=crop&w=800&q=80",
    accentNote: "Glass hair humidity shield"
  },
  {
    id: "prod-06",
    number: "06",
    category: "BODY & TAN",
    brand: "Bondi Sands",
    name: "Everyday Liquid Gold Gradual Tanning Oil",
    description: "Coconut-scented dry body oil infused with argan oil that develops into a golden Australian summer tan effortlessly.",
    inStoreAvailability: "Restocked weekly at White City",
    aisle: "Aisle 05 — Suncare & Glow",
    badge: "New Stock",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    accentNote: "Effortless sun-kissed glow"
  }
];

export const featuredHeroProduct = {
  category: "EDITORIAL SPOTLIGHT",
  brand: "Superdrug Studio Picks",
  title: "THE BEAUTY FIND YOU DIDN'T KNOW YOU NEEDED.",
  tagline: "Dewy, barrier-first essentials tested by our White City store team.",
  description: "From morning commute skin hydration to rapid evening touch-ups before dinner in Westfield, discover the formulations our beauty advisors keep in their own kits.",
  stats: [
    { label: "Shades Available In-Store", value: "34" },
    { label: "White City Tester Stations", value: "8" },
    { label: "Collector Points Earned", value: "Triple" }
  ],
  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
};
