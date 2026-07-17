// ---------------------------------------------------------------------------
// Edit everything in this file to update the site's content — no need to
// touch the components. This is the single source of truth for copy,
// contact details, and the property listings.
// ---------------------------------------------------------------------------

// IMPORTANT: replace this with your real WhatsApp business number,
// in international format with no spaces, +, or dashes.
// Example: 91 country code + 10-digit number = "919876543210"
export const WHATSAPP_NUMBER = "917092777277"; // <-- PLACEHOLDER, replace me

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const SITE = {
  name: "Waves and Mist",
  tagline: "Eco Resorts",
  headline: "Where the mountain mist meets the tide",
  subheadline:
    "A small collection of eco resorts and family-run homestays, tucked between rainforest ridgelines and the shoreline below.",
  aboutTitle: "Our story",
  aboutBody: [
    "Waves and Mist began with a single homestay perched above a fishing cove, built from reclaimed timber and a stubborn belief that hospitality shouldn't cost the land anything.",
    "Today we look after a small, deliberately limited group of resorts and homestays — each one owned and run by local families, powered where possible by the sun and the rain, and built to disappear quietly into the hillside or shoreline it sits on.",
    "We keep the collection small on purpose. Fewer rooms, more forest. Fewer transactions, more conversation — which is also why every booking here starts with a WhatsApp message, not a checkout form.",
  ],
  stats: [
    { label: "Locally owned & run", value: "100%" },
    { label: "Properties in the collection", value: "6" },
    { label: "Years hosting travelers", value: "12" },
  ],
} as const;

export type PropertyType = "Resort" | "Homestay";

export interface Property {
  slug: string;
  name: string;
  type: PropertyType;
  location: string;
  description: string;
  price: string;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    slug: "kanyakumari",
    name: "Kanyakumari",
    type: "Resort",
    location: "Kanyakumari, Tamil Nadu",
    description:
      "Experience the southernmost tip of India, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Famous for sunrise, sunset, Vivekananda Rock Memorial, Thiruvalluvar Statue, and beautiful beaches.",
    price: "Explore Now",
    image: "/images/B8E52DA5-BF74-41AC-A6DC-10CE6B6D0169.jpeg",
  },
  {
    slug: "keeriparai",
    name: "Keeriparai",
    type: "Resort",
    location: "Keeriparai Hills",
    description:
      "A breathtaking hill destination surrounded by dense forests, waterfalls, estate stays, trekking trails, wildlife, and cool misty weather throughout the year.",
    price: "Explore Now",
    image: "/images/94A6CAC2-0D54-4908-8355-0473D70858EE.jpeg",
  },
  {
    slug: "thirparappu-falls",
    name: "Thirparappu Waterfalls",
    type: "Resort",
    location: "Thirparappu",
    description:
      "One of the most famous waterfalls in Kanyakumari offering boating, children's park, temples, scenic views and refreshing natural beauty.",
    price: "Explore Now",
    image: "/images/B09438E3-5678-49FC-AC1F-151DC94EFB8E.jpeg",
  },
  {
    slug: "muttom-beach",
    name: "Muttom Beach",
    type: "Homestay",
    location: "Muttom",
    description:
      "A peaceful rocky beach well known for its lighthouse, fishing harbor, beautiful sunsets and crystal-clear coastline, perfect for photography.",
    price: "Explore Now",
    image: "/images/C528A96A-904C-4283-B637-202B94CF95D8.jpeg",
  },
  {
    slug: "mathur-aqueduct",
    name: "Mathur Aqueduct",
    type: "Resort",
    location: "Mathur",
    description:
      "Asia's tallest and longest trough bridge offering spectacular valley views, walking paths, fresh breeze and panoramic landscapes.",
    price: "Explore Now",
    image: "/images/48287AF1-EAAA-452D-AEE5-CC257E21468B.jpeg",
  },
  {
    slug: "vattakottai-fort",
    name: "Vattakottai Fort",
    type: "Homestay",
    location: "Vattakottai",
    description:
      "An 18th-century seaside fort overlooking the Bay of Bengal with lush green lawns, historic walls and breathtaking ocean views.",
    price: "Explore Now",
    image: "/images/03E69BB9-B11E-4F87-BC54-FE58686C20BF.jpeg",
  },
  {
    slug: "kalikesam",
    name: "Kalikesam",
    type: "Resort",
    location: "Kalikesam Forest",
    description:
      "A hidden paradise inside the Western Ghats with rivers, forests, wildlife, dams and adventurous trekking experiences.",
    price: "Explore Now",
    image: "/images/EDCE38C7-00E8-4865-B26E-B47BDEC30D3B.jpeg",
  },
  {
    slug: "peechiparai-dam",
    name: "Pechiparai Dam",
    type: "Resort",
    location: "Pechiparai",
    description:
      "A scenic dam surrounded by evergreen forests offering boating, peaceful nature, bird watching and spectacular mountain scenery.",
    price: "Explore Now",
    image: "/images/D603FE7A-A2C6-48E6-BDCF-2FEBCE600D48.jpeg",
  },
  {
    slug: "chothavilai-beach",
    name: "Chothavilai Beach",
    type: "Homestay",
    location: "Chothavilai",
    description:
      "One of the longest beaches in Tamil Nadu with golden sand, cycling tracks, family-friendly atmosphere and mesmerizing sunsets.",
    price: "Explore Now",
    image: "/images/9A562A03-F8F0-4270-B627-D8C127C38870.jpeg",
  },
  {
    slug: "maruthuvazh-malai",
    name: "Maruthuvazh Malai",
    type: "Resort",
    location: "Maruthuvazh Malai",
    description:
      "A legendary medicinal hill ideal for trekking, meditation, sunrise viewpoints and panoramic views of Kanyakumari district.",
    price: "Explore Now",
    image: "/images/895BE997-4583-47CF-BF92-AE462954D170.jpeg",
  },
];