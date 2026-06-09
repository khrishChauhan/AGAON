export interface Project {
  id: string;
  name: string;
  category: "Commercial" | "Residential" | "Infrastructure" | "Industrial";
  description: string;
  longDescription: string;
  image: string;
  location: string;
  size: string; // e.g."1,200,000 Sq. Ft."value: string; // e.g."₹740 Cr"or"₹1,200 Cr"client: string; completionYear: string; safetyRating: string; // e.g."Zero-incident Gold Star"engineeringHighlights: string[]; specs: { label: string; value: string}[];
}
export interface TechMethodology {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  techSpec: string;
  metric: { label: string; value: string };
}
export interface Metric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}
export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string;
}
