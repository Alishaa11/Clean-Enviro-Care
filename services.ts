export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: "drain-block-removal",
    title: "Drain Block Removal",
    shortDescription: "Fast, effective removal of severe blockages in commercial and industrial drain lines.",
    description: "Our professional drain block removal service utilizes advanced equipment to quickly identify and eliminate stubborn clogs in commercial and industrial plumbing systems across the UAE. We understand that blocked drains can halt your operations, which is why our emergency response teams are equipped to handle everything from grease buildup to root intrusion, ensuring your facility remains fully operational.",
    image: "/images/drain-block-removal.png",
    icon: "pipette",
    benefits: [
      "Immediate restoration of normal water flow",
      "Prevention of costly pipe bursts and water damage",
      "Elimination of foul odors caused by stagnant wastewater",
      "Minimization of operational downtime"
    ],
    process: [
      "CCTV camera inspection to identify the exact location and nature of the blockage",
      "Selection of the appropriate clearing method (snaking or jetting)",
      "Safe and efficient removal of the obstruction",
      "Final inspection to ensure the line is completely clear"
    ]
  },
  {
    id: "kitchen-hood-cleaning",
    title: "Kitchen Hood Cleaning",
    shortDescription: "Comprehensive deep cleaning of commercial kitchen exhaust systems to ensure fire safety.",
    description: "In the UAE's bustling hospitality sector, maintaining a clean kitchen exhaust system is not just about hygiene—it's a critical fire safety requirement. Our commercial kitchen hood cleaning service removes hazardous grease buildup from hoods, filters, ductwork, and exhaust fans. We ensure your kitchen complies with all municipal health and safety regulations while improving ventilation efficiency.",
    image: "/images/kitchen-hood-cleaning.png",
    icon: "wind",
    benefits: [
      "Significant reduction in fire risk",
      "Compliance with UAE health and safety standards",
      "Improved kitchen ventilation and air quality",
      "Extended lifespan of your exhaust equipment"
    ],
    process: [
      "Complete covering and protection of the kitchen area",
      "Application of industrial-grade degreasers to all exhaust components",
      "High-pressure hot water/steam cleaning of hoods, filters, and ducts",
      "Polishing of stainless steel surfaces and comprehensive clean-up"
    ]
  },
  {
    id: "community-sewage-line",
    title: "Community Sewage Line",
    shortDescription: "Large-scale maintenance and cleaning of community sewage pipelines.",
    description: "Designed for property developers and community management companies, our community sewage line maintenance ensures the smooth operation of large-scale residential and commercial drainage networks. We provide preventative maintenance programs that keep entire communities hygienic, odor-free, and safe from unexpected sewage backups.",
    image: "/images/community-sewage-line.png",
    icon: "building-2",
    benefits: [
      "Prevention of community-wide sewage backups",
      "Maintenance of public health and hygiene standards",
      "Long-term protection of underground infrastructure",
      "Scheduled maintenance for predictable facility management"
    ],
    process: [
      "Comprehensive mapping and inspection of the community network",
      "High-capacity vacuuming and jetting of main lines",
      "Safe disposal of extracted waste at approved municipal facilities",
      "Detailed reporting and maintenance recommendations"
    ]
  },
  {
    id: "drainage-system-cleaning",
    title: "Drainage System Cleaning",
    shortDescription: "Complete industrial drainage system cleaning using heavy-duty equipment.",
    description: "Industrial facilities generate complex wastewater that can quickly compromise standard drainage systems. Our comprehensive drainage system cleaning service is tailored for factories, warehouses, and industrial parks. We utilize heavy-duty machinery to remove sediment, sludge, and industrial byproducts, keeping your environmental compliance intact and your operations running smoothly.",
    image: "/images/drainage-system-cleaning.png",
    icon: "factory",
    benefits: [
      "Compliance with industrial environmental regulations",
      "Prevention of localized flooding within the facility",
      "Safe handling of complex industrial waste",
      "Enhanced longevity of drainage infrastructure"
    ],
    process: [
      "Assessment of drainage system layout and waste types",
      "Deployment of high-capacity combination vacuum/jetting trucks",
      "Thorough cleaning of catch basins, interceptors, and main lines",
      "Environmentally responsible waste transport and disposal"
    ]
  },
  {
    id: "waste-water-removal",
    title: "Waste Water Removal",
    shortDescription: "Professional transportation and disposal of wastewater via our specialized tanker fleet.",
    description: "Clean Enviro Care operates a modern fleet of tanker trucks dedicated to the safe, efficient removal and transport of wastewater. Whether it's from construction sites, industrial facilities, or commercial holding tanks, we provide timely collection and ensure all waste is disposed of at government-approved treatment facilities in strict accordance with UAE environmental guidelines.",
    image: "/images/waste-water-removal.png",
    icon: "truck",
    benefits: [
      "Rapid response times for urgent removal needs",
      "Large capacity fleet capable of handling any volume",
      "Strict adherence to all municipal disposal regulations",
      "Complete documentation and waste transfer manifests provided"
    ],
    process: [
      "Dispatch of appropriately sized tanker to your location",
      "Safe, spill-free vacuum extraction of wastewater",
      "Secure transportation using modern, well-maintained vehicles",
      "Authorized disposal and issuance of completion certificates"
    ]
  },
  {
    id: "sump-tank-cleaning",
    title: "Sump Tank Cleaning",
    shortDescription: "Deep cleaning and sanitization of commercial and industrial sump pits.",
    description: "Sump tanks are vital for collecting and managing excess water and waste in basements, parking garages, and industrial sites. Over time, these tanks accumulate sludge, debris, and toxic gases. Our specialized confined-space entry teams safely empty, clean, and sanitize sump pits, ensuring the sump pumps can operate without obstruction and preventing hazardous overflows.",
    image: "/images/sump-tank-cleaning.png",
    icon: "database",
    benefits: [
      "Prevention of basement and garage flooding",
      "Protection of expensive sump pump equipment from burn-out",
      "Elimination of hazardous gas buildup and foul odors",
      "Safe execution by certified confined-space professionals"
    ],
    process: [
      "Atmospheric testing and implementation of confined space safety protocols",
      "Complete evacuation of liquids and sludge via vacuum truck",
      "High-pressure washing of tank walls and floor",
      "Inspection of pump intakes and float switches"
    ]
  },
  {
    id: "warehouse-deep-cleaning",
    title: "Warehouse Deep Cleaning",
    shortDescription: "Extensive floor and structural deep cleaning for large-scale industrial warehouses.",
    description: "A clean warehouse is essential for operational efficiency, employee safety, and inventory protection. Our warehouse deep cleaning services handle everything from heavy floor degreasing and scrubbing to high-level dust removal. Using industrial-grade ride-on scrubbers and specialized cleaning agents, we restore your facility to pristine condition with minimal disruption to your logistics.",
    image: "/images/warehouse-deep-cleaning.png",
    icon: "warehouse",
    benefits: [
      "Improved safety by reducing slip and trip hazards",
      "Enhanced facility appearance for clients and auditors",
      "Protection of inventory from dust and contamination",
      "Extended lifespan of flooring surfaces"
    ],
    process: [
      "Development of a customized cleaning plan to minimize operational downtime",
      "High-level dusting of rafters, lighting, and HVAC systems",
      "Heavy-duty sweeping and mechanical scrubbing of all floor areas",
      "Targeted stain and tire-mark removal"
    ]
  },
  {
    id: "sewage-tank-cleaning",
    title: "Sewage Tank Cleaning",
    shortDescription: "Hygienic emptying and deep cleaning of septic and sewage holding tanks.",
    description: "Regular sewage tank cleaning is a critical maintenance requirement for properties not connected to the main municipal sewer grid. Clean Enviro Care provides highly hygienic, professional emptying and cleaning of sewage holding tanks. Our high-suction vacuum vehicles ensure rapid extraction, while our team performs thorough cleaning to maintain the tank's integrity and capacity.",
    image: "/images/sewage-tank-cleaning.png",
    icon: "container",
    benefits: [
      "Prevention of unsanitary overflows and environmental contamination",
      "Restoration of total tank holding capacity",
      "Identification of early warning signs of tank structural failure",
      "Elimination of severe odor issues"
    ],
    process: [
      "Safe access and venting of the sewage tank",
      "Rapid, complete vacuuming of all liquid and solid waste",
      "High-pressure interior washing to remove hardened sludge",
      "Legal disposal of all extracted bio-waste"
    ]
  },
  {
    id: "drain-line-jetting",
    title: "Drain Line Jetting",
    shortDescription: "High-pressure water jetting to clear scale, grease, and debris from pipe interiors.",
    description: "Hydro-jetting is the most effective method for restoring pipes to their original diameter. Using high-pressure water streams, our drain line jetting service cuts through the toughest grease, scale buildup, and debris. This non-destructive technology is ideal for both preventative maintenance and clearing severe blockages in commercial kitchens, hotels, and industrial facilities.",
    image: "/images/drain-line-jetting.png",
    icon: "waves",
    benefits: [
      "Complete removal of pipe wall buildup, not just a hole punched through",
      "Environmentally friendly (uses only water, no harsh chemicals)",
      "Longer lasting results compared to traditional snaking",
      "Safe for a wide variety of pipe materials"
    ],
    process: [
      "Initial assessment of pipe condition and material",
      "Insertion of specialized jetting nozzles suited for the specific blockage",
      "Application of multi-directional high-pressure water to scour the pipe walls",
      "Final flush to ensure all debris is pushed to the main sewer"
    ]
  },
  {
    id: "drain-pipes-blockage-removal",
    title: "Drain Pipes Blockage Removal",
    shortDescription: "Targeted removal of localized blockages in sinks, floor drains, and toilets.",
    description: "For internal plumbing issues, our targeted drain pipe blockage removal service provides rapid relief. Whether it's a clogged commercial sink, a backed-up floor drain in a public restroom, or a slow-draining shower in a hotel, our skilled technicians arrive equipped with the right tools to isolate and remove the blockage cleanly and professionally.",
    image: "/images/drain-pipes-blockage-removal.png",
    icon: "wrench",
    benefits: [
      "Fast resolution of disruptive localized plumbing issues",
      "Clean, sanitary work processes that protect your interiors",
      "Prevention of minor clogs escalating into major pipe damage",
      "Professional advice on preventing future blockages"
    ],
    process: [
      "Diagnosis of the affected fixture and localized pipe network",
      "Deployment of mechanical augers or localized suction tools",
      "Extraction of the clogging material (hair, soap, foreign objects)",
      "Flow testing and sanitization of the affected area"
    ]
  }
];
