import { Plane, Hotel, Navigation, HeadphonesIcon, Headset } from 'lucide-react';

export const servicesData = [
  {
    id: "travel-tourism",
    title: "Travel & Tourism",
    icon: Plane,
    description: "Expert recruitment for travel management, tour operations, and corporate travel sectors.",
    functions: ["B2B Sales", "Holiday Sales", "Tour Operations", "Ticketing", "MICE", "Contracting", "Corporate Travel"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Hotel,
    description: "Sourcing top-tier professionals for hotels, resorts, and premium guest service establishments.",
    functions: ["Hotel Operations", "Front Office", "Guest Relations", "Reservations", "Sales", "Management"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
  },
  {
    id: "airline-aviation",
    title: "Airline & Aviation",
    icon: Navigation,
    description: "Connecting skilled aviation personnel with leading airlines and airport operations.",
    functions: ["Airline Sales", "Reservations", "Ticketing", "Customer Service", "Airport Operations"],
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80"
  },
  {
    id: "call-center",
    title: "Call Centre & Customer Support",
    icon: HeadphonesIcon,
    description: "Providing exceptional customer support staff for inbound, outbound, and leadership roles.",
    functions: ["Inbound and Outbound Calling", "Customer Service Executives", "Customer Support", "Telecalling", "Team Leaders"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
  },
  {
    id: "bpo",
    title: "BPO & Voice Process",
    icon: Headset,
    description: "Specialized recruitment for voice, non-voice, and technical support processes.",
    functions: ["Voice and Non-Voice Processes", "International and Domestic Processes", "Technical Support", "Process Executives", "Quality Analysts", "Operations Managers"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
  }
];