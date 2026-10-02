export interface StoreInfo {
  brandName: string;
  storeName: string;
  flagshipTagline: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postcode: string;
    mall: string;
    locationInMall: string;
  };
  phone: string;
  email: string;
  openingHours: {
    dayRange: string;
    hours: string;
    isPrimary?: boolean;
  }[];
  transport: {
    underground: string[];
    overground: string[];
    bus: string[];
    parking: string;
  };
  features: string[];
}

export const storeData: StoreInfo = {
  brandName: "SUPERDRUG",
  storeName: "Westfield White City",
  flagshipTagline: "London's destination for beauty finds, in-store clinics, and everyday favourites.",
  address: {
    line1: "Unit 1026, Ground Floor",
    line2: "Westfield London Shopping Centre",
    city: "London",
    postcode: "W12 7GF",
    mall: "Westfield London (White City)",
    locationInMall: "Ground Floor, near The Atrium & Marks & Spencer corridor"
  },
  phone: "020 3819 6269",
  email: "whitecity.store@superdrug.com",
  openingHours: [
    { dayRange: "Monday — Saturday", hours: "09:00 — 22:00", isPrimary: true },
    { dayRange: "Sunday", hours: "12:00 — 18:00", isPrimary: true }
  ],
  transport: {
    underground: [
      "White City (Central line) — 3 min walk",
      "Shepherd's Bush (Central line) — 4 min walk",
      "Wood Lane (Circle & Hammersmith & City) — 2 min walk",
      "Shepherd's Bush Market (Circle & Hammersmith & City) — 6 min walk"
    ],
    overground: [
      "Shepherd's Bush Overground & Southern Rail Station"
    ],
    bus: [
      "Routes 31, 49, 148, 207, 228, 237, 260, 607, C1"
    ],
    parking: "Westfield London Car Park A & B (4,500 spaces with EV charging)"
  },
  features: [
    "Accessible Ear Piercing Station",
    "Nail Bar & Brow Styling",
    "Superdrug Aesthetic Clinic",
    "Dedicated Health Clinic & Pharmacist",
    "Trending TikTok Beauty Showcase",
    "Exclusive Vegan & Cruelty-Free Zone",
    "Order & Collect in 30 Minutes",
    "Recycle Makeup & Blister Packs Station"
  ]
};
