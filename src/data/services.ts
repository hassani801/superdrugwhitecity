export interface StoreService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  leadTime: string;
  bookingType: string;
  image: string;
  layoutStyle: "horizontal" | "right-aligned" | "full-width" | "split";
  details: string[];
  ctaText: string;
}

export const storeServices: StoreService[] = [
  {
    id: "ear-piercing",
    number: "01",
    title: "Accessible Ear Piercing",
    subtitle: "Lobe & Cartilage with Sterile Piercing Technology",
    description: "Conducted in a private, hygienic clinic booth by trained Superdrug beauty specialists. Includes aftercare solution and pre-sterilised medical-grade titanium or 9ct gold studs.",
    leadTime: "15 — 20 mins",
    bookingType: "Walk-ins welcome & online booking available",
    image: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?auto=format&fit=crop&w=1200&q=80",
    layoutStyle: "horizontal",
    details: [
      "Medical-grade sterile cartridges",
      "Full aftercare kit included",
      "All ages from 3+ with parental consent",
      "Quiet, accessible private station"
    ],
    ctaText: "BOOK PIERCING AT WHITE CITY"
  },
  {
    id: "nail-bar",
    number: "02",
    title: "Nail Bar & Brow Styling",
    subtitle: "Gel Manicures, Express Files & Precision Brow Mapping",
    description: "Take a break while shopping Westfield. Our nail artists offer quick polish refreshes, long-lasting gel overlays, lash tints and brow thread & shape sessions.",
    leadTime: "25 — 45 mins",
    bookingType: "Appointments recommended on weekends",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    layoutStyle: "right-aligned",
    details: [
      "Cruelty-free vegan gel polish options",
      "Cuticle conditioning treatment",
      "Brow threading & custom tint mapping",
      "Express lunch-hour appointments"
    ],
    ctaText: "BOOK NAIL BAR TIME"
  },
  {
    id: "aesthetics-clinic",
    number: "03",
    title: "Aesthetic Clinic",
    subtitle: "Qualified Medical Practitioner Consultations",
    description: "Regulated, confidential facial aesthetic consultations and non-surgical procedures administered exclusively by GMC/GDC/NMC registered healthcare professionals in our White City clinical suite.",
    leadTime: "30 — 45 mins",
    bookingType: "Consultation required prior to procedure",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    layoutStyle: "full-width",
    details: [
      "Conducted only by registered nurses & doctors",
      "Comprehensive medical suitability assessment",
      "Detailed 2-week follow up included",
      "Full Save Face accredited safety standards"
    ],
    ctaText: "CONSULT AESTHETIC PRACTITIONER"
  },
  {
    id: "health-clinic",
    number: "04",
    title: "Health Clinic & Pharmacy",
    subtitle: "Travel Vaccinations, Blood Pressure Checks & Pharmacist Advice",
    description: "Superdrug White City pharmacists provide walk-in health screenings, travel immunisations, chickenpox jabs, blood pressure checks, and confidential advice for everyday health concerns.",
    leadTime: "10 — 20 mins",
    bookingType: "Walk-ins daily or reserve specific vaccine slot",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    layoutStyle: "split",
    details: [
      "Travel vaccination clinic & yellow fever advice",
      "Private consultation room",
      "Free blood pressure checks",
      "NHS & private prescription dispensing"
    ],
    ctaText: "SEE CLINIC SERVICES"
  }
];
