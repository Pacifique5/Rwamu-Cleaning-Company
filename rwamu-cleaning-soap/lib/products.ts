export interface Product {
  id: string;
  name: string;
  description: string;
  usage: string;
  sizes: string[];
  features: string[];
  icon: string;
}

export const products: Product[] = [
  {
    id: "floor-mopping",
    name: "Floor & Mopping Liquid",
    description: "Professional-grade floor cleaning solution that leaves surfaces sparkling clean and fresh. Perfect for all types of flooring including tiles, marble, and concrete.",
    usage: "Floor cleaning and mopping",
    sizes: ["1L", "5L", "25L"],
    features: [
      "Removes tough stains and dirt",
      "Pleasant fresh scent",
      "Safe for all floor types",
      "Long-lasting shine"
    ],
    icon: "droplets"
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    description: "Powerful toilet cleaning formula that eliminates germs, removes stains, and leaves your bathroom hygienically clean with a fresh fragrance.",
    usage: "Toilet and bathroom cleaning",
    sizes: ["1L", "5L", "25L"],
    features: [
      "Kills 99.9% of germs",
      "Removes limescale and stains",
      "Fresh fragrance",
      "Thick formula for better coverage"
    ],
    icon: "sparkles"
  },
  {
    id: "dishwashing-liquid",
    name: "Dishwashing Liquid",
    description: "Gentle yet effective dishwashing liquid that cuts through grease and food residue while being kind to your hands. Creates rich lather for efficient cleaning.",
    usage: "Dishwashing and utensil cleaning",
    sizes: ["1L", "5L", "25L"],
    features: [
      "Cuts through grease easily",
      "Gentle on hands",
      "Rich lather",
      "Pleasant scent"
    ],
    icon: "utensils"
  },
  {
    id: "surface-cleaner",
    name: "General Surface Cleaner",
    description: "Versatile multi-purpose cleaner suitable for kitchen counters, tables, walls, and various household surfaces. Leaves no residue and provides streak-free cleaning.",
    usage: "Multi-purpose surface cleaning",
    sizes: ["1L", "5L", "25L"],
    features: [
      "Multi-purpose formula",
      "Streak-free finish",
      "Quick-drying",
      "Safe for most surfaces"
    ],
    icon: "spray-can"
  },
  {
    id: "glass-cleaner",
    name: "Glass & Window Cleaner",
    description: "Specialized formula for crystal-clear glass and mirror cleaning. Removes fingerprints, smudges, and dirt without leaving streaks or residue.",
    usage: "Glass, mirrors, and windows",
    sizes: ["1L", "5L"],
    features: [
      "Streak-free shine",
      "Anti-fog properties",
      "Quick-drying formula",
      "Pleasant fresh scent"
    ],
    icon: "square"
  },
  {
    id: "laundry-detergent",
    name: "Liquid Laundry Detergent",
    description: "High-efficiency liquid detergent that effectively removes stains and odors while keeping fabrics soft and fresh. Suitable for both hand and machine washing.",
    usage: "Laundry and fabric cleaning",
    sizes: ["1L", "5L", "25L"],
    features: [
      "Deep cleaning action",
      "Fabric-friendly formula",
      "Long-lasting freshness",
      "Works in cold or hot water"
    ],
    icon: "shirt"
  }
];
