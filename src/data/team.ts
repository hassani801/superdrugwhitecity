export interface TeamMember {
  id: string;
  role: string;
  specialty: string;
  quote: string;
  mustHaveProduct: string;
  yearsAtWhiteCity: string;
  image: string;
  size: "large" | "medium" | "environmental";
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-01",
    role: "Beauty Experience Advisor",
    specialty: "Complexion matching & Glow Primers",
    quote: "People walk into White City looking for a viral shade, and we help them swatch it properly under honest lighting.",
    mustHaveProduct: "e.l.f. Halo Glow + NYX Fat Oil",
    yearsAtWhiteCity: "Flagship Team Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    size: "large"
  },
  {
    id: "team-02",
    role: "Store Skincare Specialist",
    specialty: "Barrier repair & Active Serums",
    quote: "Skincare doesn't need to be intimidating or cost £80. We curate real formulas that work for everyday London life.",
    mustHaveProduct: "CeraVe Hydrating Hyaluronic Serum",
    yearsAtWhiteCity: "White City Beauty Studio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    size: "medium"
  },
  {
    id: "team-03",
    role: "Lead Piercing Practitioner",
    specialty: "Accessible Ear Curation & Sterile Placement",
    quote: "A first ear piercing is a big memory. We take time, make everyone comfortable, and give exact aftercare guidance.",
    mustHaveProduct: "Titanium Pre-Sterilised Cartridge Studs",
    yearsAtWhiteCity: "Clinical Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    size: "medium"
  },
  {
    id: "team-04",
    role: "White City Pharmacy & Health Lead",
    specialty: "Travel Health, Screenings & Wellness",
    quote: "From pre-holiday vaccines to confidential advice while you're shopping Westfield, healthcare should be accessible.",
    mustHaveProduct: "Superdrug Travel Health Screenings",
    yearsAtWhiteCity: "Resident Pharmacist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    size: "environmental"
  }
];
