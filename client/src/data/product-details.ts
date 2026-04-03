export interface ProductSection {
  title: string;
  items: string[];
}

export interface ProductDetail {
  id: number;
  fullDescription: string;
  sections: ProductSection[];
}

export const productDetails: Record<number, ProductDetail> = {
  2: {
    id: 2,
    fullDescription:
      "Phosphate Rich Organic Manure is a fertilizer used as an alternative to Diammonium Phosphate (DAP) and Single Super Phosphate (SSP). Phosphorus is required for all plants and plays a vital role in the balanced nutrition of plants.",
    sections: [
      {
        title: "Recommended Dosage",
        items: [
          "For all crops: 1-2 Bags/Acre (50-100 Kg/Acre) based on soil and crop condition",
          "Horticulture Crops: 4-5 Bags/Acre or 10-12 Bags/Ha",
          "Application method: Broadcast at the time of sowing or after 20-25 days of sowing",
        ],
      },
      {
        title: "Recommended Crops",
        items: [
          "Cotton, Chilly, Garlic, Paddy, Wheat, Sugarcane",
          "Vegetable crops: Tomato, Ladies Finger, Brinjal, Potato",
          "All Horticulture Crops",
        ],
      },
    ],
  },
  11: {
    id: 11,
    fullDescription:
      "Samarat Potash is a plant source based K2O rich product that supports growth, improves drought resistance, and enhances crop quality at critical flowering and fruiting stages.",
    sections: [
      {
        title: "Dosage",
        items: [
          "1-2 Bags/Acre (50-100 Kg/Acre) based on soil and crop condition",
          "Suitable for all crops",
        ],
      },
      {
        title: "Direction for Use",
        items: [
          "Higher quantity of Potash (K) is consumed by plants at flowering & fruiting stage",
          "Apply as basal dose just before sowing or top dressing at flowering & fruiting stage",
          "Can be applied separately or along with other fertilizers",
          "Supports plant growth and improves drought resistance quality",
          "Improves the quality and prolongs shelf-life of crop produce",
          "Activates many growth-related enzymes of the plants",
          "Improves soil aeration and prevents leaching losses",
        ],
      },
    ],
  },
  10: {
    id: 10,
    fullDescription:
      "Samarat CMS Granules are used as a fertilizer supplying Calcium, Magnesium & Sulphur — the essential secondary nutrients. Each plays a definite role and it is the best soil conditioner for the growth and health of plants.",
    sections: [
      {
        title: "Recommended Dosage",
        items: [
          "For all crops: 2-4 Bags/Acre (100-200 Kg/Acre) based on soil and crop condition",
          "Application method: Broadcast at the time of sowing or after 20-25 days of sowing",
        ],
      },
      {
        title: "Recommended Crops",
        items: [
          "Cotton, Chilly, Garlic, Paddy, Wheat, Sugarcane",
          "Vegetable crops: Tomato, Ladies Finger, Brinjal, Potato",
          "All Horticulture Crops",
        ],
      },
    ],
  },
  7: {
    id: 7,
    fullDescription:
      "Root Mex Granules are specially formulated water-dispersible mineral-rich granules with matured & viable endo-mycorrhizal spores developed through Root Organ Culture using In-vitro propagation technology. These spores form a symbiotic relationship with plant roots, establishing a vast mycelial network to avail nutrients beyond the root zone.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Increases nutrient availability by solubilizing and mobilizing all plant nutrients",
          "Stimulates excess root development and its function",
          "Boosts growth of plants and especially tillers in paddy & sugarcane crops",
          "Forms a huge mycelial network around the root system for protection against soil-borne diseases like Fusarium Wilt, Root Rot, and Damping Off",
          "Prevents development of nematodes and worms by oozing sticky organic secretions",
          "Improves plant immunity towards biotic and abiotic stress tolerance",
        ],
      },
      {
        title: "Dosage & Application",
        items: [
          "Soil application: 5 kg per Acre",
          "Mix with any type of fertilizer and broadcast over the field",
          "Apply near root zones for best results",
          "Suitable for all types of crops",
        ],
      },
    ],
  },
  8: {
    id: 8,
    fullDescription:
      "Powar Gro-L contains organic fertilizers including humic acids, seaweed, organic Nitrogen and Bio Steroids, which help grow plants with quality. For Paddy and Wheat it helps increase root and shoot systems. In Cotton and Chilli vegetable crops, it strengthens the root and shoot system.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Increases protein formation and helps grow flowers and fruits",
          "Improves colour, quality, size and weight of produce",
          "Increases the number and quality of grains and fruits",
          "Helps crops survive in adverse weather conditions",
        ],
      },
      {
        title: "Dosage",
        items: ["2 – 2.5 ml per litre of water"],
      },
    ],
  },
  9: {
    id: 9,
    fullDescription:
      "Crop Care (PSB) is a phosphate solubilizing bio-fertilizer containing Bacillus megatherium var. phosphaticum to solubilize chemically fixed insoluble phosphates and make them biologically available to plants in the soil.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Solubilizes 25-30% of phosphorous required by the crop",
          "Increases the efficiency of applied phosphorus fertilizers",
          "Encourages early root development and vegetative growth",
          "Fortifies the soil with bacterial metabolites and growth promoters",
        ],
      },
      {
        title: "Content",
        items: [
          "Liquid bio-fertilizer containing efficient strain of Bacillus megaterium var. phosphaticum in dormant form @ 1×10⁸ CFU per ml",
        ],
      },
      {
        title: "Dosage & Directions for Use",
        items: [
          "Seedling dip: Mix 50ml in 70 litres of water and dip roots of seedlings for 10 min before transplanting",
          "Soil application: Mix 250ml with 200kg organic manure and broadcast on moist soil per acre",
          "Orchards: Apply at root zone @ 2 ml/litre of water early in the season",
          "Drip irrigation: Apply 250ml per acre along with irrigation by drip/sprinkler",
        ],
      },
      {
        title: "Precautions",
        items: [
          "Ensure sufficient moisture in soil when applying",
          "Do not mix with chemical pesticides and herbicides",
          "Place below the seed or below the root system",
          "Shake well before use",
        ],
      },
      {
        title: "Recommended Crops",
        items: ["Suitable for all crops: cereals, millets, pulses, oil seeds, vegetables, fruit trees, forage crops and plantations"],
      },
    ],
  },
  5: {
    id: 5,
    fullDescription:
      "Powar Gro-G is a Biotechnology Research Product developed by In-House R&D experts. It contains Humates & Sea Weed Extract fortified with essential tillering factors, mixed and coated on Bentonite granules under scientifically controlled conditions. The special technique ensures Slow and Sustained Release of all essential product components, providing nutritional support at critical growth stages.",
    sections: [
      {
        title: "Advantages",
        items: [
          "Helps develop a strong root system",
          "Improves physical and biological properties of soil",
          "Improves nutrient uptake and enhances vegetative growth",
          "Luxuriant vegetative growth increases photosynthetic activity",
          "Increases tillering and yield levels appreciably",
        ],
      },
      {
        title: "Dosage Recommendation",
        items: [
          "Recommended for tillering crops: Paddy, Wheat and Sugarcane",
          "Dosage: 7-8 Kg per acre",
          "For Paddy & Wheat: Apply 15-25 days after transplanting or sowing",
          "For Sugarcane: Apply 35-40 days after sowing",
        ],
      },
    ],
  },
  1: {
    id: 1,
    fullDescription:
      "Shakti Gold is rich in humic and fulvic acids, promoting seed germination, root respiration, and healthy foliage. It is tested under various quality parameters to ensure high quality and effectiveness.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Enhances plant health with thicker, greener foliage",
          "Produces more beautiful flowers",
          "Promotes seed germination and root respiration",
          "Tested under various quality parameters for high effectiveness",
        ],
      },
    ],
  },
  6: {
    id: 6,
    fullDescription:
      "Trishul Tillering Booster is a specialized bio-fertilizer designed to boost tiller production, enhance root growth, and strengthen sugarcane and other crops. It improves nutrient uptake, protects against stem borer pests, and supports robust early-stage development.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Boosts tillers: Significantly increases the number of tillers",
          "Root development: Enhances root strength and expansion",
          "Pest resistance: Protects against stem borer and top borer",
          "Soil health: Promotes better nutrient uptake and soil structure",
        ],
      },
      {
        title: "Application Details",
        items: [
          "Primary application: Enhancing tillering in sugarcane and improving overall plant health",
          "Application method: Applied to the soil/roots",
          "Target crops: Primarily sugarcane, applicable to other high-tillering crops",
        ],
      },
    ],
  },
};
