export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    subsidiary: string;
    home: string;
    links: {
      craft: string;
      visualLines: string;
      heritage: string;
      portfolio: string;
      matrix: string;
      process: string;
      roi: string;
      contact: string;
    };
    lineDropdown: {
      line1: string;
      line1Desc: string;
      line2: string;
      line2Desc: string;
      line3: string;
      line3Desc: string;
    };
    cta: string;
    proposalButton: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: {
      years: { val: string; label: string };
      fidelity: { val: string; label: string };
      engineering: { val: string; label: string };
    };
    stampText: string;
  };
  heritage: {
    tag: string;
    headline: string;
    quote: string;
    p1: string;
    p2: string;
    p3: string;
    stats: {
      years: { number: string; label: string; desc: string };
      fidelity: { number: string; label: string; desc: string };
      scale: { number: string; label: string; desc: string };
      freshness: { number: string; label: string; desc: string };
    };
    cta: string;
  };
  lines: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewDedicatedPage: string;
    line1: {
      badge: string;
      title: string;
      tagline: string;
      overview: string;
      features: { title: string; desc: string }[];
      idealFor: string;
      interactiveHint: string;
      sliderRealLabel: string;
      sliderReplicaLabel: string;
    };
    line2: {
      badge: string;
      title: string;
      tagline: string;
      overview: string;
      features: { title: string; desc: string }[];
      idealFor: string;
      sliderTitle: string;
      sliderHint: string;
      currentScale: string;
      humanHeight: string;
    };
    line3: {
      badge: string;
      title: string;
      tagline: string;
      overview: string;
      features: { title: string; desc: string }[];
      idealFor: string;
      simTitle: string;
      simSubtitle: string;
      tabs: {
        menu: string;
        arcade: string;
        lighting: string;
      };
      menuDemo: {
        item: string;
        price: string;
        desc: string;
        pairing: string;
      };
      arcadeDemo: {
        prompt: string;
        score: string;
        active: string;
      };
      lightingDemo: {
        modes: { id: string; name: string; color: string }[];
      };
    };
  };
  outscaleOutdoor: {
    tag: string;
    headline: string;
    subtitle: string;
    heritageBadge: string;
    introParagraph: string;
    doctorBio: {
      title: string;
      name: string;
      role: string;
      degrees: string[];
      accolades: string[];
    };
    projects: {
      title: string;
      client: string;
      desc: string;
      image: string;
      scale: string;
      materials: string;
    }[];
    engineeringSpecs: {
      title: string;
      desc: string;
      items: string[];
    }[];
    ctaBox: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  smartTablesPage: {
    tag: string;
    headline: string;
    subtitle: string;
    videoBadge: string;
    videoTitle: string;
    videoDesc: string;
    videoClips: {
      id: string;
      title: string;
      time: string;
      desc: string;
      image: string;
    }[];
    specifications: {
      category: string;
      specs: { label: string; val: string }[];
    }[];
    guestBenefits: {
      title: string;
      desc: string;
      icon: string;
    }[];
    roiHighlights: {
      metric: string;
      label: string;
      desc: string;
    }[];
  };
  matrix: {
    tag: string;
    title: string;
    subtitle: string;
    table: {
      headers: {
        metric: string;
        generic: string;
        theFoodModels: string;
      };
      rows: {
        metric: string;
        generic: string;
        theFoodModels: string;
        advantage: string;
      }[];
    };
  };
  process: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      deliverable: string;
    }[];
  };
  portfolio: {
    tag: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      replicas: string;
      sculptures: string;
      smart: string;
    };
    items: {
      id: string;
      title: string;
      category: 'replicas' | 'sculptures' | 'smart';
      desc: string;
      image: string;
      tags: string[];
      scale: string;
      finish: string;
    }[];
  };
  lead: {
    tag: string;
    title: string;
    intro: string;
    ndaBadge: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      title: string;
      titlePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
    };
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    hotlineLabel: string;
    hotline: string;
    email: string;
  };
  proposalModal: {
    title: string;
    subtitle: string;
    desc: string;
    downloadBtn: string;
    features: string[];
    close: string;
  };
  footer: {
    tagline: string;
    parentCompany: string;
    locations: string[];
    quickLinksTitle: string;
    contactTitle: string;
    copyright: string;
    rights: string;
  };
}

export const content: Record<Language, Translations> = {
  en: {
    nav: {
      subsidiary: "A Subsidiary of City Scale Models",
      home: "Home",
      links: {
        craft: "Craft & Heritage",
        visualLines: "The 3 Visual Lines",
        heritage: "City Scale Pedigree",
        portfolio: "Masterpiece Gallery",
        matrix: "Enterprise ROI",
        process: "Commission Process",
        roi: "Enterprise ROI",
        contact: "Contact & Briefing",
      },
      lineDropdown: {
        line1: "Line 01: Hyper-Realistic Replicas (1:1)",
        line1Desc: "Sensory 1:1 food models with zero kitchen prep waste",
        line2: "Line 02: Monumental Outdoor Models",
        line2Desc: "Giant fiberglass landmarks powered by City Scale Models",
        line3: "Line 03: Smart Interactive Dining Tables",
        line3Desc: "Touch tabletop screens, 3D menus & interactive gaming",
      },
      cta: "Request a Quote",
      proposalButton: "Request a Quote",
    },
    hero: {
      badge: "A Subsidiary of City Scale Models ✦ Architectural Precision Meets Culinary Art",
      headline: "We Don’t Just Display Food. We Engineer Irresistible Desire.",
      subheadline: "From 100% hyper-realistic food replicas to monumental outdoor fiberglass landmarks and futuristic touch-interactive dining tables—we create sensory brand experiences that dominate the Middle East’s F&B landscape.",
      primaryCta: "Commission a Masterpiece",
      secondaryCta: "Explore The 3 Visual Lines ↓",
      trustPoints: {
        years: { val: "28+ Years", label: "Industrial & Architectural Modeling Pedigree" },
        fidelity: { val: "100%", label: "Visual Fidelity Indistinguishable from Real Cuisine" },
        engineering: { val: "Tier-1 Icons", label: "Serving Premier Hospitality & Enterprise F&B" },
      },
      stampText: "100% REAL VISUAL FIDELITY • 28+ YEARS CITY SCALE GUARANTEE • ARCHITECTURAL QUALITY • ",
    },
    heritage: {
      tag: "THE CITY SCALE ADVANTAGE",
      headline: "Backed by Egypt’s Foremost Authority in Scale Modeling",
      quote: "“A replica is only as compelling as the precision behind it.”",
      p1: "For over 28 years (founded in 1998), City Scale Models has engineered the region’s most complex mega-project masterplans, high-rise architectural models, and industrial replicas with microscopic accuracy.",
      p2: "The Food Models was born from this exact engineering DNA. We harnessed the industrial laser-cutting bays, photogrammetry scanning rigs, industrial thermal curing ovens, and master sculptors of City Scale, directing their precision straight into the culinary and hospitality realm.",
      p3: "When you partner with The Food Models, you are not hiring a novelty prop-maker. You are commissioning an industrial design house capable of translating your signature menu and brand iconography into permanent, museum-grade art.",
      stats: {
        years: { number: "28+", label: "Years Industrial Heritage", desc: "Leading scale architecture in Egypt & Saudi Arabia" },
        fidelity: { number: "100%", label: "Micron-Level Fidelity", desc: "True moisture, glaze & crumb textures" },
        scale: { number: "∞", label: "Scale Feasibility", desc: "From 1:1 miniatures to 10+ meter monuments" },
        freshness: { number: "365", label: "Days Zero Spoilage", desc: "Permanent mouth-watering freshness guaranteed" },
      },
      cta: "Review Our Engineering Credentials",
    },
    lines: {
      sectionTag: "CORE PRODUCT SHOWCASE",
      sectionTitle: "The Three Signature Visual Lines",
      sectionSubtitle: "Engineered for luxury hospitality, high-traffic retail, and viral landmark activations.",
      viewDedicatedPage: "Explore In-Depth Architecture Page →",
      line1: {
        badge: "LINE 01: SENSORY PRECISION",
        title: "Hyper-Realistic Food Replicas & Miniatures",
        tagline: "Stop throwing away display food. Start converting foot traffic into paying guests.",
        overview: "Crafted using food-grade silicone molds, proprietary polymers, and hand-tinted resins, our 1:1 food replicas recreate moisture, glaze, grill marks, caramelization, and delicate textures down to the micron. Whether viewed under museum spotlighting or direct sunlight, the human eye cannot tell the difference.",
        features: [
          {
            title: "Zero Spoilage & Permanent Freshness",
            desc: "Eliminate daily kitchen prep for display cases; your signature dishes look freshly plated 365 days a year with zero ingredient waste.",
          },
          {
            title: "Sensory Cross-Selling & Impulse Lift",
            desc: "Place high-margin items in high-traffic retail points, buffets, and airport lounges to trigger instant subconscious cravings.",
          },
          {
            title: "Bespoke Architectural Presentation",
            desc: "Mounted on custom Italian marble, walnut, treated acrylic, or brushed brass bases harmonizing with your interior architecture.",
          },
        ],
        idealFor: "Luxury pastry vitrines, fine-dining display cases, gourmet burger franchises, QSR flagship counters, and international food trade exhibits.",
        interactiveHint: "Drag the slider to compare real culinary plating with our hand-cast museum replica.",
        sliderRealLabel: "Real Chef Preparation",
        sliderReplicaLabel: "Artisan 1:1 Food Model",
      },
      line2: {
        badge: "LINE 02: SCALE MONUMENTALISM",
        title: "Monumental Outdoor Fiberglass Models",
        tagline: "Turn your brand into an unmissable urban landmark.",
        overview: "Scale has a psychological power that 2D signage can never replicate. Powered by City Scale Models (city-scale.com) engineering, our monumental outdoor models combine hot-dip galvanized steel framing, FRP polymer molding, and industrial thermal curing ovens to withstand extreme sandstorms and desert heat.",
        features: [
          {
            title: "Unrestricted Monumental Scale",
            desc: "Produced in any dimension—from 2-meter entrance activations to multi-story architectural centerpieces visible from kilometers away.",
          },
          {
            title: "Extreme Middle East Weather Resilience",
            desc: "Coated with multi-layer UV-blocking industrial polyurethane thermal finishes built to withstand extreme summer desert heat, sandstorms, and coastal humidity.",
          },
          {
            title: "Certified Structural Steel Engineering",
            desc: "Built around internal hot-dip galvanized steel skeletons, wind-load tested and safety-certified by senior structural engineers.",
          },
          {
            title: "Self-Sustaining Viral TikTok / Selfie Magnet",
            desc: "Acts as a viral landmark, generating tens of thousands of free organic brand impressions every week across Instagram and TikTok.",
          },
        ],
        idealFor: "Drive-thru focal points, mall facade activations, amusement parks, highway brand beacons, and entertainment districts across Egypt and the Gulf.",
        sliderTitle: "Interactive Scale Simulator",
        sliderHint: "Drag the slider to preview your sculpture at heights from 1 meter up to 10+ meters against human scale.",
        currentScale: "Sculpture Height",
        humanHeight: "Human Scale (1.80m)",
      },
      line3: {
        badge: "LINE 03: INTERACTIVE HOSPITALITY",
        title: "Smart Interactive Touch Dining Tables",
        tagline: "Elevate every meal from a passive order into an interactive sensory journey.",
        overview: "Welcome to the next generation of dining. Our industrial-grade, multi-touch interactive tables transform ordinary table surfaces into responsive, ultra-high-definition digital canvases. Inspired by premier experiential dining concepts in Europe, this technology turns waiting for food into an unforgettable guest experience.",
        features: [
          {
            title: "Frictionless Visual Ordering & 3D Upsell",
            desc: "Guests explore a vibrant digital menu right on their tabletop, complete with 3D dish previews and instant add-ons that dramatically boost average ticket sizes (AOV).",
          },
          {
            title: "Interactive Entertainment & Kids’ Mode",
            desc: "Built-in multiplayer arcade games, puzzles, and sensory touch effects (water ripples, digital fireworks) that eliminate wait boredom and delight families.",
          },
          {
            title: "Digital Jukebox & Ambiance Controls",
            desc: "Allow VIP diners to personalize table lighting themes, curate music tracks, and celebrate birthdays with custom on-table visual animations.",
          },
          {
            title: "Heavy-Duty Commercial Durability",
            desc: "IP-rated tempered safety glass resistant to boiling dishes, accidental wine spills, aggressive impacts, and rigorous commercial cleaning routines.",
          },
        ],
        idealFor: "Upscale family restaurants, next-gen American diners, futuristic lounges, luxury kids' entertainment zones, and tech-forward flagship venues.",
        simTitle: "Experience the Smart Table Interface",
        simSubtitle: "Click the simulation controls below to interact with the digital tabletop canvas.",
        tabs: {
          menu: "Digital 3D Menu",
          arcade: "Air-Hockey & Ripples",
          lighting: "Ambiance Glow",
        },
        menuDemo: {
          item: "Truffle Wagyu Double Glaze",
          price: "480 EGP / $28 USD",
          desc: "Smoked aged cheddar, caramelized shallot compote, black truffle emulsion on brioche.",
          pairing: "Recommended Pairing: Hand-cut Truffle Fries & Smoked Blackberry Soda",
        },
        arcadeDemo: {
          prompt: "Interactive Surface Active! Touch or drag to create dynamic water ripples & puck rebounds.",
          score: "Multiplayer Mode • Table 07 Active",
          active: "Touch Wave Frequency: 120Hz",
        },
        lightingDemo: {
          modes: [
            { id: "burgundy", name: "Royal Bordeaux", color: "#4E1420" },
            { id: "gold", name: "Champagne Candlelight", color: "#D8B26E" },
            { id: "crimson", name: "Midnight Berry", color: "#BA2B43" },
            { id: "emerald", name: "Cyber Aurora", color: "#10B981" },
          ],
        },
      },
    },
    outscaleOutdoor: {
      tag: "LINE 02 DEEP DIVE • MONUMENTAL OUTDOOR SCULPTURES",
      headline: "Monumental Outdoor Food Sculptures & Urban Landmarks",
      subtitle: "Engineering massive, weather-proof brand beacons that command urban skylines and generate viral foot traffic.",
      heritageBadge: "Official Engineering by City Scale Models (city-scale.com)",
      introParagraph: "Scale possesses a psychological dominance that no 2D billboard can rival. Backed by City Scale Models—with 28+ years of engineering leadership in large-scale outdoor modeling, monumental sculptures, and mega-installations across Egypt, Saudi Arabia, and internationally—The Food Models engineers permanent outdoor culinary sculptures engineered to survive the harshest desert climates while acting as perpetual selfie magnets for your brand.",
      doctorBio: {
        title: "Artistic Direction & Public Sculpture Leadership",
        name: "Dr. Ahmad Mousa",
        role: "Chief Public Sculptor & Artistic Consultant (City Scale Models Leadership)",
        degrees: [
          "Ph.D. in Public Sculpture (Sculpture & Environmental Relation), Faculty of Fine Arts, Helwan University",
          "Master’s Degree in Public Sculpture (Specialization in Figurative Sculpture)",
          "Lecturer in Public Sculpture at the Faculty of Fine Arts, Zamalek",
          "Lecturer in Sculpture at the Faculty of Arts & Design, Egyptian Russian University",
        ],
        accolades: [
          "Member of the Higher Committee of the International Aswan Sculpture Symposium",
          "Member of the Official Committee for Evaluating & Documenting Works for the Museum of Modern Egyptian Art (Cairo Opera House)",
          "Jury Member for the 'Ibdaa' Ministry of Youth Competition & 'The Dome' Visual Arts on DMC",
          "Key Sculptural Director for COP27 Climate Conference 2022 Monumental Installations",
        ],
      },
      projects: [
        {
          title: "Danette Giant Chocolate Dessert Landmark",
          client: "Danone / Danette",
          desc: "A massive, hyper-detailed outdoor chocolate cup and dipping dessert sculpture executed with high-gloss mirror glaze and realistic fluid cream curls.",
          image: "/outdoor/danette-chocolate.webp",
          scale: "Monumental Outdoor Scale",
          materials: "FRP Polymer, UV Industrial Clearcoat, Steel Subframe",
        },
        {
          title: "Sunbites Giant Snack Pack Facade Model",
          client: "PepsiCo / Sunbites",
          desc: "Architectural outdoor sculpted snack bag and exploding grain textures engineered for high-visibility commercial campaign activations.",
          image: "/outdoor/sunbites-chips.webp",
          scale: "3.5m Architectural Height",
          materials: "Fiberglass Composite, Thermal Curing Resins",
        },
        {
          title: "Playz Chipsy Distinctive Outdoor Display",
          client: "PepsiCo / Chipsy",
          desc: "Dynamic sculpted brand activation featuring oversized chips and vibrant packaging created for high-traffic public installations.",
          image: "/outdoor/chipsy-playz.png",
          scale: "Colossal Outdoor Facade Display",
          materials: "Cast Polymer Resin, Weatherproof Steel Frame",
        },
        {
          title: "Nescafé Giant Coffee Cup & Beans Landmark",
          client: "Nestlé / Nescafé",
          desc: "Multi-meter monumental red mug featuring hand-textured floating froth and oversized roasted coffee beans mounted on an architectural pedestal.",
          image: "/outdoor/nescafe-coffee.webp",
          scale: "4+ Meters Total Height",
          materials: "Hot-Dip Galvanized Core, Cast Resin & Weatherproof FRP",
        },
        {
          title: "FRP Monumental Sculptures & Architectural Art",
          client: "City Scale International Projects",
          desc: "Heavy-duty fiberglass reinforced polymers (FRP) engineered in City Scale's specialized industrial execution centers.",
          image: "/outdoor/frp-sculpture.webp",
          scale: "Multi-Story Capacity",
          materials: "Marine-Grade Resins, Wind-Load Certified 140km/h",
        },
        {
          title: "Vacuum-Formed Outdoor Architectural Models",
          client: "City Scale Engineering",
          desc: "Precision thermoformed exterior architectural facades engineered for extreme dimensional stability and sleek commercial finishes.",
          image: "/outdoor/vacuum-formed.webp",
          scale: "Bespoke Scale Facades",
          materials: "Heavy-Duty Thermoformed Polymers, Protective Clearcoat",
        },
        {
          title: "Monumental Themed Dragon Public Sculpture",
          client: "Theme Park & Entertainment District",
          desc: "Colossal mythical creature crafted with hyper-detailed scaly texturing and internal steel load-bearing truss system.",
          image: "/outdoor/dragon-sculpture.webp",
          scale: "6+ Meters Sculptural Span",
          materials: "Internal Structural Steel Skeleton, Hand-Layered FRP",
        },
        {
          title: "Adam's World Monumental Theme Park Landmark",
          client: "Adam's World Family Destination",
          desc: "Multi-figure monumental cartoon and culinary theme park attraction engineered to withstand year-round direct sunlight.",
          image: "/outdoor/adams-world.webp",
          scale: "Multi-Figure Monumental Display",
          materials: "UV-Resistant Polyurethane, Armored Polymer Matrix",
        },
        {
          title: "Colossal Atlas Bronze-Finish Public Sculpture",
          client: "City Scale Public Arts Division",
          desc: "Museum-grade monumental heroic statue featuring classical bronze patina executed with lightweight structural polymers.",
          image: "/outdoor/atlas-statue.webp",
          scale: "5 Meters Heroic Scale",
          materials: "Cold-Cast Bronze Polymer, Galvanized Mounting Plates",
        },
        {
          title: "Cultural & Figurative Public Monument",
          client: "Civic Public Arts Commission",
          desc: "Realistic figurative public sculpture engineered for cultural plazas, cultural institutions, and high-prestige headquarters.",
          image: "/outdoor/monument-sobhi.webp",
          scale: "Life-and-a-Half Heroic Scale",
          materials: "Sculptural Composite Resin, Anti-Weather Sealants",
        },
        {
          title: "Liberty Monumental Public Sculpture",
          client: "Civic Monumental Commission",
          desc: "Modern allegorical monument engineered for major municipal plazas and roundabouts under the artistic direction of Dr. Ahmad Mousa.",
          image: "/outdoor/liberty-monument.webp",
          scale: "Monumental Public Height",
          materials: "High-Tensile Composite, Dr. Ahmad Mousa Curation",
        },
        {
          title: "Contemporary Curated Public Artworks",
          client: "Fine Arts & Architecture Alliance",
          desc: "Abstract and representational environmental sculptures integrated with civic fountains and landscaped commercial plazas.",
          image: "/outdoor/ahmad-mousa-sculpture.webp",
          scale: "Custom Architectural Dimensions",
          materials: "Multi-Medium Architectural Resins & Stainless Chassis",
        },
      ],
      engineeringSpecs: [
        {
          title: "Structural Skeleton Engineering",
          desc: "Every monumental piece over 2 meters is designed around a CAD-calculated internal chassis built from hot-dip galvanized structural steel, preventing corrosion from interior condensation.",
          items: ["Wind-load calculated up to 140 km/h gusts", "Baseplate anchored with seismic-rated chemical bolts", "Engineered lifting hooks for crane turnkey deployment"],
        },
        {
          title: "Industrial Thermal Oven Finishing",
          desc: "Finished inside dedicated industrial thermal curing chambers with multi-stage polyurethane lacquers that resist thermal expansion and UV-induced chalking.",
          items: ["UV400 chemical inhibitors prevent pigment bleaching", "Hydrophobic ceramic sealants resist road grime & sandstorms", "Scratch-resistant clearcoats withstand public contact"],
        },
        {
          title: "Illumination & Kinetic Integration",
          desc: "Optional architectural illumination transforms the sculpture into a glowing urban landmark after dark.",
          items: ["Internal IP68 LED backlighting for sauces and ice layers", "Dynamic neon accent contouring", "Weatherproof sound & smoke effect integration available"],
        },
      ],
      ctaBox: {
        title: "Commission a Monumental Landmark for Your Brand",
        desc: "Transform your flagship drive-thru or commercial facade into the most photographed location in Egypt and Saudi Arabia.",
        btn: "Request Quotation for Monumental Sculpture",
      },
    },
    smartTablesPage: {
      tag: "LINE 03 DEEP DIVE • EXPERIENTIAL HOSPITALITY TECH",
      headline: "Smart Interactive Touch Dining Tables",
      subtitle: "Transforming dinner tables into responsive digital playgrounds, 3D visual menus, and viral family entertainment.",
      videoBadge: "Live Production Footage Demonstration",
      videoTitle: "Watch the Technology in Action",
      videoDesc: "Experience how our commercial-grade multi-touch tables turn customer wait time into engaging, high-margin brand interactions. Footage showcases live multiplayer gaming, interactive menu ordering, and dynamic touch wave responsiveness.",
      videoClips: [
        {
          id: "clip1",
          title: "Interactive 3D Visual Menu & Instant Upselling",
          time: "0:12",
          desc: "Diners rotate 3D photorealistic renderings of steaks, burgers, and cocktails before ordering, boosting average ticket size by 24%.",
          image: "/smart-tables/youtube-maxres.jpg",
        },
        {
          id: "clip2",
          title: "Kids & Family Multiplayer Arcade Air-Hockey",
          time: "0:45",
          desc: "Family dining friction disappears as children engage in multi-player digital air hockey, puzzles, and interactive coloring right on the tabletop.",
          image: "/smart-tables/youtube-frame1.jpg",
        },
        {
          id: "clip3",
          title: "Dynamic Water Ripple & Touch Sensitivity",
          time: "1:15",
          desc: "Every glass placement and hand gesture generates realistic water ripple physics and bioluminescent particle streams.",
          image: "/smart-tables/youtube-frame2.jpg",
        },
        {
          id: "clip4",
          title: "VIP Ambiance Control & Birthday Animations",
          time: "1:40",
          desc: "Diners personalize their table lighting glow or trigger spectacular custom fireworks and birthday celebration animations on demand.",
          image: "/smart-tables/youtube-frame3.jpg",
        },
      ],
      specifications: [
        {
          category: "Hardware & Physical Armor",
          specs: [
            { label: "Glass Surface", val: "8mm Thermally Toughened Safety Glass (Anti-Shatter)" },
            { label: "Thermal Rating", val: "Withstands boiling pots and sizzle platters up to 120°C" },
            { label: "Water Resistance", val: "IP-65 Hermetically Sealed against beverage spills & heavy cleaning" },
            { label: "Touch Technology", val: "Projected Capacitive (PCAP) with 10 to 40 simultaneous touch points" },
            { label: "Display Resolution", val: "4K Ultra-HD (3840 x 2160) IPS Commercial Grade Panel (700 nits)" },
          ],
        },
        {
          category: "Software Ecosystem & Integration",
          specs: [
            { label: "POS Synchronization", val: "Bi-directional API for Oracle Micros, Revel, Toast, Foodics & Odoo" },
            { label: "Operating System", val: "Industrial Embedded Android / Windows IoT Enterprise" },
            { label: "Content Management", val: "Cloud-based portal to update menu items, prices & promos in real time" },
            { label: "Payment Gateway", val: "NFC / Tap-to-Pay reader & QR billing integration directly on table" },
            { label: "Refresh Rate", val: "Ultra-low latency 120Hz touch response for buttery smooth gaming" },
          ],
        },
      ],
      guestBenefits: [
        {
          title: "24% Increase in Average Order Value (AOV)",
          desc: "Vibrant high-resolution imagery and automatic dessert/drink pairing prompts trigger impulsive high-margin orders without server pressure.",
          icon: "TrendingUp",
        },
        {
          title: "Zero Wait-Time Frustration",
          desc: "The 15-20 minutes between ordering and food arrival is transformed from boring wait time into competitive gaming and brand discovery.",
          icon: "Gamepad2",
        },
        {
          title: "Organic TikTok & Instagram Visibility",
          desc: "Almost 85% of guests pull out their phones to record table games and illuminated dish reveals, generating free viral content.",
          icon: "Sparkles",
        },
        {
          title: "Staff Efficiency Optimization",
          desc: "Servers spend less time reciting menus and taking drink reorders, allowing them to focus on luxury hospitality and table turnaround.",
          icon: "Clock",
        },
      ],
      roiHighlights: [
        { metric: "+24%", label: "Average Check Uplift", desc: "Driven by visual 3D dessert & specialty cocktail prompts" },
        { metric: "120Hz", label: "Touch Responsiveness", desc: "Sub-millisecond latency for fluid gaming and typing" },
        { metric: "IP-65", label: "Liquid Spill Protection", desc: "Built to survive aggressive commercial restaurant environments" },
        { metric: "35%", label: "Faster Table Turnaround", desc: "Instant digital split billing and contactless settlement" },
      ],
    },
    matrix: {
      tag: "ENTERPRISE VALUE MATRIX",
      title: "Why Tier-1 Brands Choose The Food Models",
      subtitle: "A rigorous engineering comparison between local prop workshops and City Scale precision.",
      table: {
        headers: {
          metric: "Evaluation Metric",
          generic: "Generic Display Vendors / Local Prop Shops",
          theFoodModels: "The Food Models (City Scale Heritage)",
        },
        rows: [
          {
            metric: "Parent Engineering Heritage",
            generic: "Small local crafts workshops, unregulated carpentry, or imported plastic props.",
            theFoodModels: "City Scale Models (28+ Years Industrial Scale Engineering on Mega-Projects).",
            advantage: "Architectural Precision",
          },
          {
            metric: "Detail & Visual Realism",
            generic: "Plastic-looking, generic stock molds with unrealistic sheen and fading colors.",
            theFoodModels: "100% Bespoke, matched to your executive chef’s exact plating, moisture, and sear marks.",
            advantage: "Micron-Level Fidelity",
          },
          {
            metric: "Material Science & Durability",
            generic: "Brittle plaster and low-grade resins that crack, warp, and yellow under light within months.",
            theFoodModels: "Industrial-grade polyurethane coatings, UV-inhibiting polymers, and heat-resistant resin matrices.",
            advantage: "Permanent 365 Days Freshness",
          },
          {
            metric: "Technology Integration",
            generic: "None (Static, silent props with zero interactive capability).",
            theFoodModels: "Full hardware/software smart dining ecosystems, multi-touch screens, POS synchronization.",
            advantage: "Experiential Upselling",
          },
          {
            metric: "Scale Feasibility & Safety",
            generic: "Limited to small desk toys; fragile and lacks structural engineering validation.",
            theFoodModels: "Infinite scale: From 1:1 miniature jewelry displays up to 10+ meter wind-load certified landmarks.",
            advantage: "Certified Structural Safety",
          },
        ],
      },
    },
    process: {
      tag: "METHODOLOGY",
      title: "From Culinary Concept to Sustainable Architectural Masterpiece",
      subtitle: "Six comprehensive stages guaranteeing flawless precision, delivery, and ongoing support across Egypt and Saudi Arabia.",
      steps: [
        {
          num: "01",
          title: "Full Branch & Menu Analysis",
          desc: "Detailed audit of all menus across every branch, analyzing viewing angles, ambient lighting, and customer traffic flows to target highest-margin signature dishes.",
          deliverable: "Visual Audit Report & Signature Dish Selection",
        },
        {
          num: "02",
          title: "Comprehensive Product & Branch Plan",
          desc: "Architectural distribution blueprints and scheduling to manufacture and synchronize replicas across your entire regional branch network.",
          deliverable: "Master Deployment Blueprint & Multi-Branch Schedule",
        },
        {
          num: "03",
          title: "Product Samples & Prototype Approval",
          desc: "Fabricating high-fidelity physical sample prototypes for executive review, color matching, and tactile texture sign-off with your culinary leadership.",
          deliverable: "Physical Certified Sample & Master Specification Sign-Off",
        },
        {
          num: "04",
          title: "Commencing Precision Manufacturing",
          desc: "Launching full-scale fabrication inside City Scale industrial facilities using architectural FRP polymers, industrial curing ovens, and master hand-detailing.",
          deliverable: "Structural Integrity & Quality Assurance Certificates",
        },
        {
          num: "05",
          title: "Turnkey Delivery & Installation",
          desc: "Armored transit and on-site deployment by specialized engineering technicians across branches in Egypt and Saudi Arabia.",
          deliverable: "On-Site Turnkey Handover & Commissioning Protocol",
        },
        {
          num: "06",
          title: "Maintenance & Follow-Up",
          desc: "Scheduled detailing cycles, protective recoating, and structural inspections to preserve perpetual culinary freshness and gloss for years to come.",
          deliverable: "Extended Warranty Coverage & Periodic Service Schedule",
        },
      ],
    },
    portfolio: {
      tag: "MASTERPIECE VAULT",
      title: "Handcrafted Visual Masterpieces",
      subtitle: "Explore our archive of hyper-realistic food replicas, monumental sculptures, and smart table installations.",
      categories: {
        all: "All Works",
        replicas: "1:1 Replicas",
        sculptures: "Monumental Scale",
        smart: "Smart Dining",
      },
      items: [
        {
          id: "bazooka-crispy",
          title: "Bazooka Golden Fried Chicken Feast",
          category: "replicas",
          desc: "Flawlessly recreated crunch batter texture, glistening natural oil glazes, and steam-crisp appearance.",
          image: "/food/bazooka.jpeg",
          tags: ["1:1 Scale", "Proprietary Resin", "Zero Spoilage"],
          scale: "1:1 Exact Menu Scale",
          finish: "Triple-Layer Moisture Lacquer",
        },
        {
          id: "artisan-burger",
          title: "Signature Double Stack Gourmet Burger",
          category: "replicas",
          desc: "Simulated melted cheddar cascading over flame-seared beef patties with realistic sesame seed brioche buns.",
          image: "/food/burger.jpg",
          tags: ["1:1 Scale", "Multi-Polymer", "Display Vitrine"],
          scale: "1:1 Master Mold",
          finish: "Automotive Matte & Gloss Finish",
        },
        {
          id: "smash-burger-deluxe",
          title: "Ultra-Crisp Smash Burger with Pickles",
          category: "replicas",
          desc: "Micron-level lacy meat crusts, translucent pickles, and creamy signature sauce folds.",
          image: "/food/burger 2.jfif",
          tags: ["1:1 Scale", "Color Fastness", "Brand Landmark"],
          scale: "1:1 Menu Match",
          finish: "High-Temperature Polymer",
        },
        {
          id: "stone-baked-pizza",
          title: "Stone-Baked Quattro Formaggi Pizza",
          category: "replicas",
          desc: "Authentic wood-fire leopard charring on crust rim, stretched mozzarella strands, and fresh basil texture.",
          image: "/food/Pizza.PNG",
          tags: ["1:1 Scale", "Charred Crust Tech", "Vitrine Mount"],
          scale: "32cm True Diameter",
          finish: "Flexible Silicone & Epoxy Matrix",
        },
        {
          id: "supreme-pizza",
          title: "Supreme Pepperoni & Herb Italian Pie",
          category: "replicas",
          desc: "Hand-painted pepperoni cups with pooling paprika oils and aromatic simulated herbal flakes.",
          image: "/food/pizza 2.PNG",
          tags: ["1:1 Scale", "Glaze Lock", "Drive-Thru Showcase"],
          scale: "36cm True Diameter",
          finish: "Oil-Proof Polyurethane Glaze",
        },
        {
          id: "danette-chocolate-outdoor",
          title: "Danette Giant Chocolate Dessert Landmark",
          category: "sculptures",
          desc: "Monumental outdoor fiberglass dessert landmark engineered with City Scale Models for extreme desert UV.",
          image: "/outdoor/danette-chocolate.webp",
          tags: ["Monumental Scale", "FRP Polymer", "Thermal Cured"],
          scale: "Monumental Scale",
          finish: "Industrial Polyurethane UV Lacquer",
        },
        {
          id: "sunbites-outdoor-facade",
          title: "Sunbites Monumental Architectural Snack Pack",
          category: "sculptures",
          desc: "Massive outdoor commercial packaging sculpture with internal structural steel framework.",
          image: "/outdoor/sunbites-chips.webp",
          tags: ["Outdoor Beacon", "Steel Skeleton", "Wind Certified"],
          scale: "3.5m Architectural Height",
          finish: "Weatherproof Industrial Coating",
        },
        {
          id: "nescafe-giant-mug",
          title: "Nescafé Giant Coffee Cup & Beans Monument",
          category: "sculptures",
          desc: "Multi-meter monumental red mug featuring hand-textured froth and oversized coffee beans.",
          image: "/outdoor/nescafe-coffee.webp",
          tags: ["Landmark Beacon", "Drive-Thru Centerpiece", "City Scale Engineering"],
          scale: "4+ Meters Total Height",
          finish: "Galvanized Core & Marine Resin",
        },
        {
          id: "chipsy-playz-outdoor",
          title: "Chipsy Playz Monumental Outdoor Sculpture",
          category: "sculptures",
          desc: "Dynamic sculpted brand activation featuring oversized chips and vibrant packaging created for high-traffic commercial drive-thrus.",
          image: "/outdoor/chipsy-playz.png",
          tags: ["Landmark Beacon", "FRP Polymer", "Drive-Thru Icon"],
          scale: "5m Monumental Scale",
          finish: "Industrial Polyurethane UV Lacquer",
        },
        {
          id: "vacuum-formed-bottle",
          title: "Vacuum-Formed Giant Bottle Architectural Installation",
          category: "sculptures",
          desc: "Precision thermoformed exterior architectural facade model engineered for extreme dimensional stability and urban presence.",
          image: "/outdoor/vacuum-formed.webp",
          tags: ["Urban Installation", "Thermoformed", "City Scale Models"],
          scale: "6m Monumental Installation",
          finish: "Thermoformed Heavy Polymer",
        },
        {
          id: "dragon-relief-sculpture",
          title: "Architectural Mythological Dragon Facade Relief",
          category: "sculptures",
          desc: "Hand-sculpted architectural bronze-patina relief for luxury Asian hospitality facades and theme park dining.",
          image: "/outdoor/dragon-sculpture.webp",
          tags: ["Architectural Relief", "Patina Bronze", "Luxury Facade"],
          scale: "4m x 3m Architectural Relief",
          finish: "Weatherproof Bronze Composite",
        },
        {
          id: "adams-world-sculpture",
          title: "Adam's World Architectural Theme Park Monument",
          category: "sculptures",
          desc: "Monumental sculptural characters and commercial facade installation for family entertainment centers and theme parks.",
          image: "/outdoor/adams-world.webp",
          tags: ["Theme Park Icon", "FRP Sculpture", "UV Weatherproof"],
          scale: "Monumental Theme Park Scale",
          finish: "Multi-Coat Automotive Polyurethane",
        },
        {
          id: "smart-table-system",
          title: "Smart Touch Interactive Dining Table Station",
          category: "smart",
          desc: "Commercial 4K multi-touch restaurant table with 3D digital menu, family air hockey, and IP-65 glass armor.",
          image: "/smart-tables/youtube-maxres.jpg",
          tags: ["Interactive Table", "4K Multi-Touch", "POS Integrated"],
          scale: "Commercial VIP Table (4-6 Guests)",
          finish: "8mm Thermally Toughened Tempered Glass",
        },
        {
          id: "chocolate-gateau",
          title: "Luxury French Dark Chocolate Gateau",
          category: "replicas",
          desc: "Mirror chocolate ganache with micro gold leaf accents, delicate piped chantilly swirls, and berry gloss.",
          image: "/food/gateau.jpg",
          tags: ["Pâtisserie", "Mirror Glaze", "Fine Dining"],
          scale: "1:1 Vitrine Cake",
          finish: "High-Gloss Mirror Enamel",
        },
        {
          id: "molten-lava-cake",
          title: "Erupting Molten Dark Chocolate Lava Cake",
          category: "replicas",
          desc: "Capturing the split second of molten fudge breaking free from warm sponge cake, with raspberry drizzle.",
          image: "/food/molten cake.jpg",
          tags: ["Pâtisserie", "Liquid Freeze-Action", "Impulse Selling"],
          scale: "1:1 Dynamic Action Replica",
          finish: "Viscous Resin Cast",
        },
        {
          id: "roz-bel-laban",
          title: "Traditional Egyptian Rice Pudding (Roz Bel Laban)",
          category: "replicas",
          desc: "Authentic caramelized wrinkled milk skin surface, crushed pistachio crumbs, and velvety creaminess.",
          image: "/food/rice-pudding.jpg",
          tags: ["Oriental Dessert", "Wrinkle Skin Tech", "Permanent Fresh"],
          scale: "Traditional Clay Bowl 1:1",
          finish: "Textured Translucent Resin",
        },
        {
          id: "kids-happy-box",
          title: "Interactive Kids Joy Box & Toy Meal",
          category: "replicas",
          desc: "Golden shoestring fries, miniature crispy nuggets, and promotional brand mascot toy.",
          image: "/food/kids meal.jpg",
          tags: ["QSR Franchise", "Kids Engagement", "Vibrant Colors"],
          scale: "1:1 Happy Meal",
          finish: "Child-Safe Non-Toxic Coating",
        },
      ],
    },
    lead: {
      tag: "COMMISSION A MASTERPIECE",
      title: "Ready to Make Your Brand the Undisputed Icon of the Industry?",
      intro: "Our bespoke commissions are strictly engineered for brands that refuse to look ordinary. Because of our uncompromising craft and engineering depth, we accept a selective roster of enterprise projects each quarter.",
      ndaBadge: "Strict Non-Disclosure Agreement (NDA) provided upon initial briefing.",
      formTitle: "Request an Executive Quotation & Project Briefing",
      formSubtitle: "Complete the briefing form below. Our executive engineering director will connect within 24 hours.",
      fields: {
        name: "Full Name",
        namePlaceholder: "e.g., Alexander Hayes",
        title: "Job Title",
        titlePlaceholder: "e.g., VP of Brand Development / Head of Culinary",
        company: "Company / Restaurant Brand",
        companyPlaceholder: "e.g., Americana Group / Four Seasons Hospitality",
        phone: "Mobile / WhatsApp Number",
        phonePlaceholder: "+20 100 123 4567 or +966 50 123 4567",
      },
      submitButton: "Request Quotation",
      submitting: "Submitting Briefing...",
      successTitle: "VIP Briefing Received Successfully",
      successMessage: "Thank you. Your project brief has been allocated to our Chief Architectural Officer. A confirmation package has been logged under priority tracking.",
      hotlineLabel: "Executive Concierge Hotline",
      hotline: "+20 100 555 4321",
      email: "concierge@thefoodmodels.com",
    },
    proposalModal: {
      title: "Executive Concept Deck & Architectural Lookbook",
      subtitle: "The Food Models • 2026 Enterprise Edition",
      desc: "Download our confidential portfolio deck featuring material engineering specs, photogrammetry case studies, and enterprise ROI models for hospitality leaders.",
      downloadBtn: "Download PDF Lookbook (Instant Access)",
      features: [
        "Complete technical breakdown of Line 01, Line 02 (Monumental Sculptures), and Line 03",
        "Comparative cost analysis vs daily display food waste",
        "Wind-load & UV weatherproofing engineering certificates",
        "Interactive dining table software & hardware integration guide",
      ],
      close: "Close Preview",
    },
    footer: {
      tagline: "Engineering Irresistible Desire through museum-grade food models and interactive dining innovation.",
      parentCompany: "The Food Models — A Specialized Subsidiary of City Scale Models Engineering S.A.E.",
      locations: ["Egypt (Cairo)", "Saudi Arabia (Riyadh)"],
      quickLinksTitle: "Strategic Navigation",
      contactTitle: "Executive Contacts",
      copyright: "© 2026 The Food Models. All Rights Reserved.",
      rights: "Engineered with architectural precision by City Scale Models.",
    },
  },
  ar: {
    nav: {
      subsidiary: "إحدى شركات مجموعة سيتي للمجسمات (City Scale)",
      home: "الرئيسية",
      links: {
        craft: "قصتنا وإرثنا",
        visualLines: "خطوط الإنتاج",
        heritage: "الاعتماد الهندسي",
        portfolio: "سابقة الأعمال",
        matrix: "العائد الاستثماري",
        process: "مراحل التنفيذ",
        roi: "العائد الاستثماري",
        contact: "طلب عرض سعر",
      },
      lineDropdown: {
        line1: "المجسمات الغذائية فائقة الواقعية (1:1)",
        line1Desc: "مجسمات أطعمة تحاكي الأصل 100% مع صفر هدر يومي",
        line2: "المنحوتات الخارجية والمجسمات العملاقة",
        line2Desc: "معالم فايبر جلاس معمارية ضخمة للواجهات ومسارات درايف ثرو",
        line3: "طاولات الطعام التفاعلية الذكية",
        line3Desc: "شاشات لمس تفاعلية، قوائم ثلاثية الأبعاد وألعاب عائلية",
      },
      cta: "طلب عرض سعر",
      proposalButton: "طلب عرض سعر",
    },
    hero: {
      badge: "إحدى شركات مجموعة «سيتي للمجسمات» ✦ هندسة معمارية دقيقة لأكبر علامات الضيافة في مصر والشرق الأوسط",
      headline: "لا نعرض الطعام فحسب.. نحن نهندس أيقونات بصرية تصنع فارقاً حقيقياً في مبيعاتك",
      subheadline: "من مجسمات الأطعمة فائقة الواقعية بنسبة 100% لصفر هدر بفروعك، إلى المنحوتات الخارجية العملاقة التي تحول فروعك إلى معالم سيلفي شهيرة، وحتى طاولات الطعام التفاعلية الذكية. نبتكر معالم وتجارب حسية تجعل كبرى سلاسل المطاعم والفنادق تتصدر المشهد في مصر والمملكة العربية السعودية والخليج.",
      primaryCta: "اطلب عرض سعر لمشروعك",
      secondaryCta: "اكتشف خطوط الإنتاج الثلاثة ↓",
      trustPoints: {
        years: { val: "+28 عاماً", label: "خبرة هندسية وصناعية معتمدة من سيتي للمجسمات" },
        fidelity: { val: "100%", label: "تطابق بصري تام لا يمكن تمييزه عن أطباق الشيف الحقيقية" },
        engineering: { val: "مصر والسعودية", label: "شريك كبرى سلاسل الفرانشايز والمجموعات الفندقية الكبرى" },
      },
      stampText: "تطابق بصري 100% • خبرة +28 عاماً سيتي للمجسمات • جودة معمارية فائقة • ",
    },
    heritage: {
      tag: "الاعتماد والامتياز الهندسي لسيتي للمجسمات",
      headline: "مدعومون بأكبر صرح هندسي لصناعة المجسمات في مصر والشرق الأوسط (منذ عام 1998)",
      quote: "«الواقعية البصرية المتقنة ليست مجرد عمل فني عابر.. بل هي استثمار تجاري محسوب بأعلى معايير الهندسة الصناعية.»",
      p1: "على مدار أكثر من 28 عاماً (تأسست عام 1998)، تصدّرت سيتي للمجسمات (City Scale Models) المشهد الإقليمي كأكبر كيان متخصص في تجسيد أضخم المخططات العمرانية والمشاريع القومية والأبراج الأيقونية في مصر والمملكة العربية السعودية بأعلى معايير الدقة الميكرونية العالمية.",
      p2: "ومن هذا الإرث الهندسي الراسخ ولدت The Food Models لنحدث ثورة في قطاع الأغذية والمشروبات الفاخر. لقد نقلنا تقنيات المسح الضوئي ثلاثي الأبعاد، وماكينات التصنيع المحوسبة، وأفران الطلاء الحرارية الصناعية، وخبرات كبار استشاريي النحت المعماري لخدمة كبرى سلاسل المطاعم وشركات الأغذية العالمية.",
      p3: "عندما تتعاون معنا، فأنت لا تشتري مجرد ديكورات.. بل تتعاقد مع مؤسسة هندسية متكاملة تقدم حلول Turnkey شاملة (تحليل الفروع، تصميم العينات، التصنيع، الشحن، التوريد والتركيب، وضمان صيانة طويل الأجل) تعزز مكانة علامتك التجارية وتضاعف مبيعاتك لسنوات طويلة.",
      stats: {
        years: { number: "+28", label: "عاماً من الخبرة الهندسية", desc: "ريادة معتمدة في مصر والمملكة العربية السعودية ودول الخليج" },
        fidelity: { number: "100%", label: "دقة مطابقة ميكرونية", desc: "محاكاة واقعية لدرجات الاستواء، لمعان الصلصات، وطراوة المخبوزات" },
        scale: { number: "∞", label: "مرونة في تنفيذ الأحجام", desc: "من مجسمات الأطباق الدقيقة 1:1 وحتى المعالم الخارجية الشاهقة بارتفاع 10+ أمتار" },
        freshness: { number: "365", label: "يوماً من الجاذبية والنضارة", desc: "صفر هدر في الأطعمة يومياً مع توفير هائل في تكاليف التشغيل السنوية" },
      },
      cta: "اكتشف إرث سيتي للمجسمات",
    },
    lines: {
      sectionTag: "حلولنا الاستثمارية المتكاملة",
      sectionTitle: "ثلاثة خطوط إنتاج تمنح علامتك التفوق التجاري المطلق",
      sectionSubtitle: "صُممت خصيصاً لسلاسل المطاعم الكبرى، واجهات الفروع ومسارات درايف ثرو، والوجهات الترفيهية الأكثر ازدحاماً.",
      viewDedicatedPage: "تفاصيل ومواصفات الخط الهندسي بالكامل ←",
      line1: {
        badge: "خط الإنتاج 01 • الواقعية الحسية والاستدامة",
        title: "المجسمات الغذائية فائقة الواقعية (1:1 Food Replicas)",
        tagline: "وداعاً لخسائر هدر الطعام اليومي في واجهات العرض.. مرحباً بجذب بصري فوري يضاعف مبيعاتك.",
        overview: "باستخدام قوالب السيليكون التخصصية وراتنجات البوليمر المعالجة حرارياً، نصنع مجسمات مطابقة تماماً لأطباق مطعمك بنسبة 100%. ننقل بدقة ميكرونية تفاصيل الشواء، قطرات الزيت والصلصة اللامعة، قرمشة المقليات، وطراوة الحلويات والمخبوزات. حتى عند التدقيق عن مسافة سنتيمترات، يستحيل على العين البشرية التمييز بينها وبين الأطباق الساخنة الخارجة للتو من المطبخ.",
        features: [
          {
            title: "صفر هدر يومي في الأطعمة (Zero Food Waste)",
            desc: "وفّر آلاف الجنيهات والريالات شهرياً؛ تخلص تماماً من كلفة طبخ وتغيير أطباق العرض يومياً. واجهاتك ستظل بأعلى درجات الجاذبية والشهية على مدار 365 يوماً في العام.",
          },
          {
            title: "تحفيز فوري للطلب وزيادة متوسط الفاتورة",
            desc: "الدراسات تثبت أن 82% من قرارات الشراء في المطاعم تحركها العين أولاً. وجود مجسم ملموس فائق الجاذبية عند المداخل أو الكاونتر يحفز الضيوف على طلب الأصناف الأكثر ربحية.",
          },
          {
            title: "قواعد عرض معمارية فاخرة حسب الطلب",
            desc: "نوفر منصات عرض متكاملة من الرخام الطبيعي الفاخر، خشب الجوز الأمريكي، أو النحاس المصقول لتنسجم بتناغم هندسي مع ديكورات فرعك الراقية.",
          },
          {
            title: "ثبات لوني لا يتأثر بإضاءات العرض الشديدة",
            desc: "معالجة بطلاءات بوليمرية مقاومة للأكسدة ولحرارة سبوتات الإضاءة لتبقى نضرة وبراقة دون أي تغير في اللون أو القوام.",
          },
        ],
        idealFor: "واجهات مطاعم البرجر والفاست كاجوال، صالونات الحلويات والباتيسيري الفاخرة، بوفيهات الفنادق العالمية، فروع المولات ومطارات مصر والخليج.",
        interactiveHint: "حرّك المؤشر لاختبار التطابق البصري المذهل بين الطبق الحقيقي والمجسم الدقيق.",
        sliderRealLabel: "الطبق الطبيعي من المطبخ",
        sliderReplicaLabel: "مجسم فني دقيق 1:1",
      },
      line2: {
        badge: "خط الإنتاج 02 • المعالم الخارجية والانتشار الفيروسي",
        title: "المنحوتات الخارجية والمجسمات العملاقة (Monumental Sculptures)",
        tagline: "حوّل فرعك إلى معلم سياحي وأيقونة تصوير تتصدر منصات التواصل الاجتماعي.",
        overview: "الضخامة تخلق تأثيراً نفسياً وهيبة لا يمكن لأي لوحة إعلانية تقليدية منافستها. بالاعتماد على التجهيزات والمصانع العملاقة لسيتي للمجسمات (city-scale.com) بإشراف كبار استشاريي النحت، ننفذ مجسمات فايبر جلاس خارجية عملاقة بأي ارتفاع ومقياس تطلبه، مدعومة بهياكل فولاذية مجلفنة ومصممة هندسياً لمقاومة أعتى الظروف المناخية.",
        features: [
          {
            title: "مرونة هندسية مطلقة في المقاييس والارتفاعات",
            desc: "من مجسمات المداخل المبهجة بارتفاع مترين وحتى المنحوتات الإنشائية الضخمة بارتفاع يتجاوز 10 أمتار لتكون علامة بارزة تُشاهد من مسافات بعيدة على الطرق السريعة والمحاور الرئيسية.",
          },
          {
            title: "صمود تام أمام حرارة الخليج وعواصف الصحراء",
            desc: "طبقات بولي يوريثان حرارية صناعية معزولة بمواد UV400 لحماية الألوان من البهتان والاصفرار تحت شمس مصر والخليج الحارقة، ومقاومة تامة للغبار والرطوبة العالية.",
          },
          {
            title: "سلامة إنشائية معتمدة وهياكل حديد مجلفن",
            desc: "تُبنى كل قطعة على شاسيهات فولاذية مجلفنة مقاومة للصدأ، محسوبة بدقة لمقاومة أحمال الرياح العاتية حتى 140 كم/ساعة مع نقاط تثبيت زلزالية معتمدة.",
          },
          {
            title: "تسويق عضوي فيروزي مجاني (Organic Viral Reach)",
            desc: "يتحول مجسمك الخارجي فوراً إلى محطة تصوير وسيلفي يتسابق عليها الزوار لمشاركتها على تيك توك وإنستغرام، مما يمنح علامتك ملايين المشاهدات المجانية دورياً.",
          },
        ],
        idealFor: "مسارات طلبات السيارات (Drive-Thru)، واجهات المطاعم الكبرى على المحاور السريعة، مراكز التسوق الكبرى، الحدائق والمدن الترفيهية في مصر والمملكة العربية السعودية.",
        sliderTitle: "محاكي المقاييس والارتفاعات الهندسية",
        sliderHint: "اسحب المؤشر لاختبار ارتفاع المجسم من مترين وحتى 12 متراً مقارنة بمقياس الإنسان والسيارات.",
        currentScale: "ارتفاع المجسم المعماري",
        humanHeight: "مقياس الإنسان الطبيعي (1.80 م)",
      },
      line3: {
        badge: "خط الإنتاج 03 • الابتكار التقني وتجربة الضيف",
        title: "طاولات الطعام التفاعلية الذكية (Smart Interactive Dining Tables)",
        tagline: "مستقبل الضيافة.. تحويل فترة انتظار الطعام من لحظات ملل إلى تجربة ترفيهية استثنائية.",
        overview: "حلول متطورة صُممت لأصحاب المطاعم الراقية وصناع الترفيه الذين يسعون لتقديم تجربة حصرية لا ينساها الضيف. نحوّل أسطح طاولات الطعام العادية إلى منصات تفاعلية ذكية فائقة الوضوح والسرعة، تجمع بين استعراض المنيو ثلاثي الأبعاد، والألعاب الجماعية التنافسية للأسر والأطفال، والربط المباشر مع أنظمة الكاشير.",
        features: [
          {
            title: "قوائم طعام ثلاثية الأبعاد وطلب فوري يرفع المبيعات",
            desc: "يستعرض الضيوف أطباقك ومشروباتك مجسمة بدقة 4K مع ترشيحات تلقائية ذكية للحلويات والأطباق الجانبية، مما يرفع متوسط الفاتورة الإجمالية بنسبة تصل إلى +24%.",
          },
          {
            title: "ألعاب تفاعلية عائلية تقضي تماماً على ملل الانتظار",
            desc: "ألعاب هوكي هوائي، وألغاز ذكية، ورسم وتلوين تفاعلي يمتص طاقة الأطفال ويمنح العائلات تجربة طعام هادئة وممتعة أثناء تحضير الطلب.",
          },
          {
            title: "زجاج أمان تجاري مقسّى 8 ملم عازل للسوائل IP-65",
            desc: "سطح مدرع شديد الصلابة يتحمل الصدمات القوية، والأطباق الساخنة حتى 120 درجة مئوية، ومقاوم بنسبة 100% لانسكاب السوائل وسهل التعقيم الفوري.",
          },
          {
            title: "ربط تقني سلس مع أنظمة نقاط البيع (POS)",
            desc: "توافق كامل عبر واجهات API مع كبرى أنظمة إدارة المطاعم (فودكس Foodics، ميكروس Micros، أودو Odoo وغيرها) لترحيل الطلبات للمطبخ مباشرة.",
          },
        ],
        idealFor: "المطاعم العائلية الراقية، سلاسل البرجر والداينر الحديثة، لاونجات الفنادق، ومراكز الترفيه العائلي ومناطق VIP في مصر والخليج.",
        simTitle: "اختبر محاكاة سطح الطاولة الذكية التفاعلي",
        simSubtitle: "اضغط على الأوضاع التفاعلية أدناه لاكتشاف تجربة الضيف الحية على الطاولة.",
        tabs: {
          menu: "قائمة طعام تفاعلية 3D",
          arcade: "ألعاب هوكي وتموجات حركية",
          lighting: "إضاءة مزاجية واحتفالات",
        },
        menuDemo: {
          item: "برجر واجيو دبل ترافل مع صوص الجبن الذهبي",
          price: "480 ج.م / 58 ر.س",
          desc: "شريحتان من لحم الواجيو المشوي على اللهب، بصل مكرمل مدخن، مستحلب الكمأة السوداء والجبن الذائب على خبز البريوش الفرنسي الطازج.",
          pairing: "اقتراح الشيف التلقائي: بطاطس ويدجز ببهارات الأعشاب وصوص الترافل (+95 ج.م / +12 ر.س)",
        },
        arcadeDemo: {
          prompt: "السطح التفاعلي جاهز! حرّك مؤشر الماوس أو المس الشاشة لتوليد تموجات مائية وردود أفعال سريعة للقرص.",
          score: "نمط التحدي الثنائي • الطاولة VIP-04 متصلة",
          active: "معدل استجابة لمس فائق: 120 هرتز",
        },
        lightingDemo: {
          modes: [
            { id: "burgundy", name: "نبيذي ملكي (Royal Bordeaux)", color: "#4E1420" },
            { id: "gold", name: "شمبانيا ذهبية (Warm Gold)", color: "#D8B26E" },
            { id: "crimson", name: "توت منتصف الليل (Crimson Velvet)", color: "#BA2B43" },
            { id: "emerald", name: "شفق الزمرد (Emerald Glow)", color: "#10B981" },
          ],
        },
      },
    },
    outscaleOutdoor: {
      tag: "ملف خط الإنتاج 02 التخصصي • المنحوتات والمجسمات العملاقة",
      headline: "مجسمات الفايبر جلاس الخارجية العملاقة والمعالم المعمارية",
      subtitle: "صناعة معالم بصرية عملاقة تقاوم أقسى الظروف المناخية وتتصدر منصات التواصل الاجتماعي.",
      heritageBadge: "خبرة واعتماد هندسي رسمي من سيتي للمجسمات (city-scale.com) منذ 1998",
      introParagraph: "الحجم والضخامة لهما تأثير سيكولوجي طاغٍ لا تضاهيه أي لافتة إعلانية تقليدية. بدعم من مجموعة سيتي للمجسمات الرائدة منذ أكثر من 28 عاماً في المجسمات الخارجية الضخمة والمنحوتات الميدانية الكبرى في مصر والمملكة العربية السعودية، تقوم The Food Models بتصميم وتصنيع مجسمات أطعمة خارجية عملاقة مصممة هندسياً لتقاوم حرارة الصيف الشديدة والعواصف الرملية، لتتحول فوراً إلى علامة جغرافية ونقطة التقاط صور وفيديوهات سيلفي لا تتوقف.",
      doctorBio: {
        title: "القيادة الفنية والاستشارات النحتية العامة",
        name: "د. أحمد موسى",
        role: "كبير استشاريي النحت الميداني (فريق الإشراف الفني بسيتي للمجسمات و The Food Models)",
        degrees: [
          "دكتوراه في النحت الميداني (النحت العام وعلاقته بالبيئة المحيطة) - كلية الفنون الجميلة بالزمالك، جامعة حلوان",
          "ماجستير في النحت الميداني (تخصص نحت تشخيصي)",
          "مدرس النحت الميداني بكلية الفنون الجميلة بالزمالك",
          "مدرس النحت بكلية الفنون والتصميم بالجامعة المصرية الروسية",
        ],
        accolades: [
          "عضو اللجنة العليا لسمبوزيوم أسوان الدولي لفن النحت",
          "عضو لجنة تقييم وتوثيق مقتنيات متحف الفن المصري الحديث بدار الأوبرا المصرية",
          "عضو لجان تحكيم مسابقة «إبداع» بوزارة الشباب والرياضة وبرنامج «الدوم» للفنون التشكيلية",
          "المشرف الفني على تنفيذ المنحوتات الميدانية الكبرى في قمة المناخ COP27 بشرم الشيخ",
        ],
      },
      projects: [
        {
          title: "مجسم حلوى وشوكولاتة دانيت العملاقة (Danette)",
          client: "دانون / دانيت (Danone)",
          desc: "مجسم خارجي ضخم ومتقن للغاية لكوب وحلوى شوكولاتة دانيت مع تموجات القشطة اللامعة بتقنية أفران الطلاء الحرارية الصناعية.",
          image: "/outdoor/danette-chocolate.webp",
          scale: "مقياس ميداني ضخم",
          materials: "بوليمر فايبر جلاس FRP، طلاء بولي يوريثان حراري عازل",
        },
        {
          title: "مجسم واجهة إعلان صن بايتس المعماري (Sunbites)",
          client: "بيبسيكو / صن بايتس (PepsiCo)",
          desc: "مجسم معماري ضخم لكيس رقائق الخبز المقرمشة مع تطاير المكونات في الهواء لواجهات الفروع ومحطات التوزيع الرئيسية.",
          image: "/outdoor/sunbites-chips.webp",
          scale: "ارتفاع 3.5 أمتار",
          materials: "مركبات فايبر جلاس عالية الصلابة، أصباغ بوليمرية معالجة ضد الشمس",
        },
        {
          title: "مجسم شيبسي بلايز المميز للعرض الخارجي (Chipsy Playz)",
          client: "بيبسيكو / شيبسي (PepsiCo)",
          desc: "مجسم إعلاني ميداني ضخم يبرز عبوة شيبسي مع رقائق بطاطس عملاقة معلقة بالهواء بتصميم يجذب آلاف الزوار والتقاط الصور.",
          image: "/outdoor/chipsy-playz.png",
          scale: "عرض واجهات ميداني ضخم",
          materials: "راتنجات بوليمر صلبة، شاسيه فولاذي مقاوم للرياح",
        },
        {
          title: "مجسم كوب وحبوب قهوة نسكافيه الميداني (Nescafé)",
          client: "نستله / نسكافيه (Nestlé)",
          desc: "كوب نسكافيه أحمر ضخم بعدة أمتار مع محاكاة لرغوة القهوة الساخنة وحبات البن الكبيرة على قاعدة معمارية بارزة.",
          image: "/outdoor/nescafe-coffee.webp",
          scale: "ارتفاع أكثر من 4 أمتار",
          materials: "هيكل حديد مجلفن، راتنجات فايبر جلاس بحرية مقاومة للرطوبة",
        },
        {
          title: "منحوتات الفايبر جلاس الإنشائية FRP Sculptures",
          client: "مشاريع سيتي الدولية والإقليمية",
          desc: "بوليمرات مقواة بألياف زجاجية عالية التحمل بالتعاون مع مراكز التصنيع الهندسية التابعة لمجموعة سيتي للمجسمات.",
          image: "/outdoor/frp-sculpture.webp",
          scale: "قدرة على تنفيذ ارتفاعات متعددة الطوابق",
          materials: "راتنجات مقاومة للحرارة والرياح حتى 140 كم/س",
        },
        {
          title: "مجسمات معمارية خارجية بتقنية الفاكيوم (Vacuum-Formed)",
          client: "سيتي للمجسمات الهندسية",
          desc: "ألواح ومجسمات مشكلة حرارياً بالضغط والتفريغ الهوائي لواجهات الفروع التجارية فائقة الدقة والانسيابية.",
          image: "/outdoor/vacuum-formed.webp",
          scale: "واجهات مخصصة حسب الطلب",
          materials: "بوليمرات حرارية عالية المتانة، طبقات حماية شفافة",
        },
        {
          title: "مجسم التنين الأسطوري العملاق للمدن الترفيهية",
          client: "وجهات ترفيهية ومراكز تسوق كبرى",
          desc: "منحوتة تنين أسطوري عملاق بملمس حراشف واقعي مذهل وهيكل إنشائي داخلي معتمد لتحمل الأوزان والرياح.",
          image: "/outdoor/dragon-sculpture.webp",
          scale: "امتداد نحتي يتجاوز 6 أمتار",
          materials: "هيكل جملونات حديد مجلفن، فايبر جلاس مشكل يدوياً",
        },
        {
          title: "معلم عرض خارجي عملاق لعالم آدم الترفيهي (Adam’s World)",
          client: "مدينة عالم آدم الترفيهية العائلية",
          desc: "مجموعة منحوتات مجسمة خارجية ضخمة لشخصيات كرتونية ومطاعم عائلية مصممة للبقاء الدائم تحت أشعة الشمس المباشرة.",
          image: "/outdoor/adams-world.webp",
          scale: "مجموعة ميدانية متعددة العناصر",
          materials: "بولي يوريثان مقاوم للأشعة فوق البنفسجية، قوالب مقواة",
        },
        {
          title: "تمثال أطلس الميداني العملاق بطلاء البرونز المعماري",
          client: "قطاع الفنون العامة والميادين بسيتي للمجسمات",
          desc: "تمثال تاريخي عملاق بمظهر البرونز الكلاسيكي المنحوت، مصنع بخامات بوليمرية خفيفة الوزن وشديدة الصلابة للميادين.",
          image: "/outdoor/atlas-statue.webp",
          scale: "ارتفاع بطولي 5 أمتار",
          materials: "بوليمر بصبغات البرونز البارد، لوحات تثبيت مجلفنة",
        },
        {
          title: "تمثال ونصب الفنان محمد صبحي الميداني التذكاري",
          client: "لجنة الفنون الميدانية والثقافية",
          desc: "تمثال تشخيصي واقعي عالي الدقة لشخصية عامة يجسد أدق تعبيرات الوجه والملابس المعمارية للمراكز الثقافية والمسارح.",
          image: "/outdoor/monument-sobhi.webp",
          scale: "مقياس بطولي 1.5 مرة من الحجم الطبيعي",
          materials: "مركبات راتنج نحتي، عوازل حرارية ومناخية كاملة",
        },
        {
          title: "منحوتة الحرية الميدانية (إشراف د. أحمد موسى)",
          client: "إدارة تجميل الميادين العامة والمحاور الرئيسية",
          desc: "عمل نحتي ميداني تجريدي حديث يعبر عن الانطلاق والريادة، مصمم لميادين العواصم والتقاطعات الكبرى.",
          image: "/outdoor/liberty-monument.webp",
          scale: "ارتفاع معماري بارز للميادين",
          materials: "مركبات عالية الشد، تشطيب نهائي بإشراف استشاري النحت",
        },
        {
          title: "منحوتات ميدانية ومعالم معمارية متنوعة",
          client: "تحالف الفنون المعمارية والتصميم الإنشائي",
          desc: "سلسلة أعمال نحتية وبيئية متكاملة مع النوافير والحدائق المفتوحة للشركات الكبرى والفنادق الفاخرة.",
          image: "/outdoor/ahmad-mousa-sculpture.webp",
          scale: "أبعاد هندسية مخصصة حسب المشروع",
          materials: "راتنجات معمارية متعددة الخامات، شاسيهات ستانلس ستيل",
        },
      ],
      engineeringSpecs: [
        {
          title: "الهيكل الفولاذي الداخلي المعتمد",
          desc: "كل مجسم يتجاوز ارتفاعه مترين يُبنى داخلياً على شاسيه من الحديد المجلفن ضد الصدأ ومحسوب عبر برامج CAD لمقاومة التآكل والتكثف الداخلي.",
          items: ["مقاومة أحمال الرياح العاتية حتى 140 كم/ساعة", "تثبيت كيميائي للأرضيات بمسامير زلزالية معتمدة", "شناكل رفع مدمجة لتسهيل التركيب بالأوناش الهندسية"],
        },
        {
          title: "أفران الطلاء الحرارية الصناعية",
          desc: "تشطيب نهائي داخل كبائن رش أفران الطلاء الحرارية الصناعية بدهانات بولي يوريثان متعددة الطبقات تمنع التمدد الحراري والبهتان الشمسي.",
          items: ["مركبات UV400 تمنع اصفرار الألوان أو تغير درجاتها في صيف مصر والخليج", "عزل سيراميكي طارد للغبار والرمال والأمطار", "طبقة حماية ضد الخدوش ولمس الجمهور المباشر"],
        },
        {
          title: "الإضاءة المعمارية والمؤثرات المدمجة",
          desc: "إمكانية دمج الإضاءات الذكية لتحويل المجسم إلى منارة بصرية ساطعة تجذب الأنظار ليلاً من مسافات شاسعة.",
          items: ["إضاءة LED داخلية معزولة IP68 للصلصات والطبقات الشفافة", "خطوط نيون خارجية لتحديد الحواف في الظلام", "أنظمة بخار ومؤثرات صوتية مقاومة للمطر"],
        },
      ],
      ctaBox: {
        title: "اطلب تصنيع مجسم خارجي عملاق لعلامتك التجارية",
        desc: "اجعل فرعك الرئيسي أو مسار طلبات السيارات (Drive-Thru) المعلم الأكثر تصويراً وتداولاً في مصر والمملكة العربية السعودية.",
        btn: "طلب عرض سعر للمنحوتات العملاقة",
      },
    },
    smartTablesPage: {
      tag: "ملف خط الإنتاج 03 التخصصي • حلول الضيافة الذكية",
      headline: "طاولات الطعام التفاعلية الذكية (Smart Tables)",
      subtitle: "تحويل طاولات المطاعم إلى منصات رقمية ذكية، وقوائم تفاعلية ثلاثية الأبعاد، وتجارب ترفيهية عائلية تأسر الضيوف.",
      videoBadge: "معاينة تشغيلية حية للطاولات داخل المطعم",
      videoTitle: "شاهد كيف تغير الطاولات الذكية تجربة تناول الطعام بالكامل",
      videoDesc: "شاهد كيف تحول طاولات اللمس الذكية الصناعية وقت انتظار الضيوف إلى تجربة تفاعلية ممتعة ترفع مبيعات المطعم بشكل ملحوظ. يعرض الفيديو التفاعل الحي مع الألعاب الجماعية، وقوائم الطعام التفاعلية، وتموجات الماء المستجيبة لحركة اليدين.",
      videoClips: [
        {
          id: "clip1",
          title: "قوائم الطعام ثلاثية الأبعاد والطلب الفوري المربح",
          time: "0:12",
          desc: "يقوم الضيوف بتدوير ومطالعة أطباق الستيك والبرجر والمشروبات ثلاثية الأبعاد بدقة واقعية قبل الطلب، مما يرفع متوسط الفاتورة بنسبة 24%.",
          image: "/smart-tables/youtube-maxres.jpg",
        },
        {
          id: "clip2",
          title: "ألعاب الهوكي والآركيد للأطفال والعائلات",
          time: "0:45",
          desc: "يقضي تماماً على ملل انتظار الطعام؛ حيث يتنافس أفراد العائلة في لعبة الهوكي الهوائي الذكية وحل الألغاز والتلوين مباشرة على الطاولة.",
          image: "/smart-tables/youtube-frame1.jpg",
        },
        {
          id: "clip3",
          title: "تموجات الماء الحية وحساسية اللمس الفائقة",
          time: "1:15",
          desc: "تتفاعل الطاولة فورياً مع حركة الأيدي ووضع الأكواب والأطباق بمؤثرات فيزيائية تحاكي أمواج الماء والجسيمات الضوئية المضيئة.",
          image: "/smart-tables/youtube-frame2.jpg",
        },
        {
          id: "clip4",
          title: "التحكم في الإضاءة المزاجية واحتفالات أعياد الميلاد",
          time: "1:40",
          desc: "يمكن للضيوف اختيار ألوان الإضاءة المحيطية للطاولة أو إطلاق مؤثرات الألعاب النارية والتهاني الرقمية بمناسبة أعياد الميلاد.",
          image: "/smart-tables/youtube-frame3.jpg",
        },
      ],
      specifications: [
        {
          category: "المتانة الفيزيائية والدرع الزجاجي",
          specs: [
            { label: "سطح الطاولة", val: "زجاج أمان مقسّى حرارياً بسمك 8 ملم مضاد للكسر والتناثر" },
            { label: "مقاومة الحرارة", val: "تتحمل الأطباق الساخنة والأواني المغلية حتى 120 درجة مئوية" },
            { label: "مقاومة السوائل", val: "معزولة كلياً بمعيار IP-65 ضد المشروبات المسكوبة وعمليات التعقيم اليومية الشاقة" },
            { label: "تقنية اللمس", val: "لمس سعوي متطور (PCAP) يدعم من 10 إلى 40 نقطة لمس متزامنة" },
            { label: "دقة الشاشة", val: "شاشة عرض تجارية بدقة 4K Ultra-HD وسطوع 700 nits مقاوم للإضاءة العالية" },
          ],
        },
        {
          category: "البرمجيات والربط مع أنظمة المطاعم",
          specs: [
            { label: "الربط مع الكاشير (POS)", val: "واجهات برمجية API متوافقة مع فودكس Foodics، وميكروس Micros، وأودو Odoo، وتوست Toast" },
            { label: "نظام التشغيل", val: "نظام أندرويد صناعي مدمج أو Windows IoT Enterprise المخصص للعمل الشاق" },
            { label: "إدارة المحتوى السحابية", val: "لوحة تحكم سحابية لتحديث أصناف المنيو والأسعار والعروض فورياً" },
            { label: "الدفع عند الطاولة", val: "دعم مدمج لشرائح NFC ورموز QR للدفع الفوري دون انتظار الجرسون" },
            { label: "سرعة الاستجابة", val: "معدل تحديث فائق 120 هرتز يمنح استجابة فورية وسلسة للألعاب واللمس" },
          ],
        },
      ],
      guestBenefits: [
        {
          title: "زيادة متوسط قيمة الفاتورة بنسبة تصل إلى +24%",
          desc: "الصور والفيديوهات المغرية ثلاثية الأبعاد واقتراحات الحلويات والمشروبات الإضافية تحفز الشراء اللحظي دون أي إلحاح من طاقم الخدمة.",
          icon: "TrendingUp",
        },
        {
          title: "القضاء التام على ملل فترة انتظار الطعام",
          desc: "تتحول فترة الـ 15-20 دقيقة بين الطلب ووصول الطعام من وقت ملل وتوتر إلى متعة ومنافسة ترفيهية بين أفراد الأسرة.",
          icon: "Gamepad2",
        },
        {
          title: "انتشار فيروزي عضوي على تيك توك وإنستغرام",
          desc: "يقوم أكثر من 85% من الضيوف بإخراج هواتفهم وتصوير شاشة الطاولة وألعابها، مما يوفر لعلامتك ملايين المشاهدات المجانية.",
          icon: "Sparkles",
        },
        {
          title: "رفع كفاءة وسرعة دورة الطاولات (Table Turnover)",
          desc: "طلب أسرع ودفع ذاتي فوري يوفر وقت النادل بنسبة 35%، مما يتيح استقبال عدد أكبر من الضيوف في ساعات الذروة.",
          icon: "Clock",
        },
      ],
      roiHighlights: [
        { metric: "+24%", label: "ارتفاع في قيمة الفاتورة", desc: "بفضل عروض الأطباق الجانبية والحلويات التلقائية" },
        { metric: "120Hz", label: "استجابة لمس فورية", desc: "أداء ناعم للغاية للألعاب والتصفح بدون أي تقطيع" },
        { metric: "IP-65", label: "حماية تامة من السوائل", desc: "صُممت لتتحمل أصعب ظروف العمل في كبرى المطاعم" },
        { metric: "35%", label: "سرعة في دوران الطاولة", desc: "دفع سريع وتقسيم إلكتروني للفاتورة عند الطاولة" },
      ],
    },
    matrix: {
      tag: "مقارنة الجودة والاستثمار",
      title: "لماذا تختار كبرى العلامات The Food Models؟",
      subtitle: "مقارنة معيارية صريحة بين الورش التقليدية والحلول الهندسية المعتمدة من سيتي للمجسمات.",
      table: {
        headers: {
          metric: "معيار التقييم",
          generic: "ورش العمل التقليدية والمستوردون",
          theFoodModels: "The Food Models (إرث سيتي للمجسمات)",
        },
        rows: [
          {
            metric: "المرجعية الهندسية والتاريخ",
            generic: "ورش فردية تفتقر للدقة الهندسية والاعتمادات الرسمية.",
            theFoodModels: "إحدى شركات سيتي للمجسمات (خبرة +28 عاماً في المشاريع القومية والعمرانية الكبرى).",
            advantage: "دقة معمارية صناعية",
          },
          {
            metric: "مستوى الواقعية والتفاصيل",
            generic: "مواد بلاستيكية باهتة وقوالب جاهزة غير متطابقة مع أطباقك.",
            theFoodModels: "تفصيل يدوي 100% مطابق تماماً لطريقة تقديم شيف مطعمك ودرجات استواء ولزوجة المكونات.",
            advantage: "مطابقة ميكرونية 100%",
          },
          {
            metric: "المتانة ومقاومة العوامل الجوية",
            generic: "خامات رديئة تتشقق وتتغير ألوانها سريعاً بفعل الحرارة والإضاءة.",
            theFoodModels: "فايبر جلاس معالج بأفران طلاء حرارية صناعية ومواد عزل UV تضمن البقاء لسنوات دون بهتان.",
            advantage: "نضارة دائمة 365 يوماً",
          },
          {
            metric: "التقنيات الذكية والتفاعلية",
            generic: "غير متوفرة إطلاقاً (مجسمات وديكورات صامتة فقط).",
            theFoodModels: "حلول هاردوير وسوفت وير ذكية لطاولات طعام تفاعلية متكاملة ومتوافقة مع أنظمة نقاط البيع.",
            advantage: "تجربة ترفع قيمة الفاتورة",
          },
          {
            metric: "القدرة على تنفيذ الأحجام الكبرى",
            generic: "مقيدة بأحجام ومقاييس صغيرة ومواد قابلة للكسر.",
            theFoodModels: "أي حجم يخطر ببالك.. من السنتيمترات الدقيقة إلى منحوتات عملاقة بارتفاع 10+ أمتار معتمدة إنشائياً.",
            advantage: "أمان هيكلي وهندسة معتمدة",
          },
        ],
      },
    },
    process: {
      tag: "منهجية العمل والتنفيذ",
      title: "من الفكرة المطبخية إلى التحفة المعمارية المستدامة",
      subtitle: "ست مراحل هندسية متكاملة تضمن أعلى درجات الدقة والجاهزية التشغيلية في مصر والمملكة العربية السعودية.",
      steps: [
        {
          num: "01",
          title: "تحليل للفروع والمنيو كامل",
          desc: "دراسة شاملة لقائمة الطعام بكافة الفروع، وتحليل زوايا الرؤية وشدة الإضاءة وحركة الزوار لاختيار الأطباق الأكثر ربحية وجاذبية.",
          deliverable: "تقرير التدقيق البصري واختيار الأصناف المستهدفة",
        },
        {
          num: "02",
          title: "خطة كاملة للمنتجات والفروع",
          desc: "إعداد خطة توزيع متكاملة، ومخططات CAD الهندسية، وجدول زمني دقيق لإنتاج وتوزيع المجسمات عبر شبكة الفروع لضمان التناسق البصري للهوية.",
          deliverable: "المخطط التنفيذي الشامل وجدول التوريد للفروع",
        },
        {
          num: "03",
          title: "عينات من المنتجات",
          desc: "تصنيع نماذج عينات أولية دقيقة، واختبار الألوان، ومحاكاة ملمس الطهي واللمعان لاعتمادها المباشر من إدارة العلامة والشيف التنفيذي.",
          deliverable: "عينة نموذج معتمدة وتوقيع المواصفات الفنية القياسية",
        },
        {
          num: "04",
          title: "بدأ التصنيع",
          desc: "بدء خطوط الإنتاج داخل مصانع سيتي للمجسمات باستخدام خامات البوليمر المعمارية، وأفران الطلاء الحرارية الصناعية، والتشطيب اليدوي الدقيق.",
          deliverable: "شهادات ضبط الجودة الهيكلية والتحمل",
        },
        {
          num: "05",
          title: "التوريد والتركيب",
          desc: "شحن وتوريد المجسمات في صناديق هندسية مصفحة مع فرق تركيب متخصصة للتثبيت الاحترافي في فروع مصر والمملكة العربية السعودية.",
          deliverable: "محضر الفحص والتسليم النهائي المعتمد بالفروع",
        },
        {
          num: "06",
          title: "الصيانة والمتابعة",
          desc: "برامج دورية مجدولة للتنظيف الاحترافي، وإعادة التلميع التخصصي، ومعاينة التثبيت لضمان استدامة النضارة والبريق لسنوات طويلة.",
          deliverable: "وثيقة الضمان الشامل وجداول الصيانة الدورية",
        },
      ],
    },
    portfolio: {
      tag: "سابقة الأعمال والتحف الفنية",
      title: "أعمال نفخر بصناعتها لكبرى العلامات التجارية",
      subtitle: "استكشف نماذج من أعمالنا المصنعة يدوياً بأعلى مقاييس الواقعية والجودة الهندسية عبر الخطوط الثلاثة.",
      categories: {
        all: "جميع الأعمال",
        replicas: "مجسمات 1:1",
        sculptures: "منحوتات عملاقة",
        smart: "طاولات ذكية",
      },
      items: [
        {
          id: "bazooka-crispy",
          title: "وليمة دجاج بازوكا المقرمش الذهبي",
          category: "replicas",
          desc: "محاكاة تامة لقرمشة الخلطة السرية، واللمعان الدهني الطبيعي، ومظهر القلي الطازج الساخن.",
          image: "/food/bazooka.jpeg",
          tags: ["مقياس 1:1", "راتنج حصري", "صفر هدر"],
          scale: "مطابق للأصل 1:1",
          finish: "طلاء رطوبة ثلاثي الطبقات",
        },
        {
          id: "artisan-burger",
          title: "شطيرة برجر اللحم الفاخر مع الشيدر السائل",
          category: "replicas",
          desc: "طبقات البرجر المشوي على اللهب، وتدفق الجبن الذائب بدقة ميكرونية على خبز البريوش بالسمسم.",
          image: "/food/burger.jpg",
          tags: ["مقياس 1:1", "بوليمر متقدم", "عرض واجهات"],
          scale: "قالب رئيسي مخصص 1:1",
          finish: "دهانات حرارية مطفية ولامعة",
        },
        {
          id: "smash-burger-deluxe",
          title: "سماش برجر كرسبي مع المخلل والصلصة الخاصة",
          category: "replicas",
          desc: "حواف اللحم المقرمشة المتفحمة بدقة، والمخلل الشفاف، والصلصة الكريمية الغنية.",
          image: "/food/burger 2.jfif",
          tags: ["مقياس 1:1", "ثبات لوني دائم", "تسويق مرئي"],
          scale: "مطابق لوصفة الشيف",
          finish: "بوليمر مقاوم للحرارة العالية",
        },
        {
          id: "stone-baked-pizza",
          title: "بيتزا كواترو فورماجي مخبوزة على الحجر",
          category: "replicas",
          desc: "نقاط التفحم الخفيفة على حواف العجين الإيطالي، ومحاكاة تمدد أجبان الموزاريلا وأوراق الريحان الطازجة.",
          image: "/food/Pizza.PNG",
          tags: ["مقياس 1:1", "حواف مقرمشة", "قاعدة عرض"],
          scale: "قطر حقيقي 32 سم",
          finish: "مصفوفة سيليكون وإيبوكسي مرنة",
        },
        {
          id: "supreme-pizza",
          title: "بيتزا سوبريم مع شرائح البيبروني وزيت البابريكا",
          category: "replicas",
          desc: "شرائح بيبروني مقعرة مرسومة يدوياً مع لمعان زيت التوابل الطبيعي ورقائق الأعشاب العطرية.",
          image: "/food/pizza 2.PNG",
          tags: ["مقياس 1:1", "تثبيت لمعان", "واجهات طلبات"],
          scale: "قطر حقيقي 36 سم",
          finish: "طلاء بولي يوريثان مقاوم للزيوت",
        },
        {
          id: "danette-chocolate-outdoor",
          title: "مجسم حلوى وشوكولاتة دانيت العملاقة الميداني",
          category: "sculptures",
          desc: "معلم فايبر جلاس خارجي ضخم مصنع بتقنيات سيتي للمجسمات ومقاوم لحرارة الشمس.",
          image: "/outdoor/danette-chocolate.webp",
          tags: ["مقياس عملاق", "بوليمر FRP", "معالجة حرارية"],
          scale: "مقياس ميداني ضخم",
          finish: "بولي يوريثان حراري صناعي عازل للأشعة UV",
        },
        {
          id: "sunbites-outdoor-facade",
          title: "مجسم إعلان واجهات صن بايتس المعماري",
          category: "sculptures",
          desc: "مجسم معماري خارجي عملاق لكيس رقائق الخبز المقرمشة مع هيكل فولاذي داخلي.",
          image: "/outdoor/sunbites-chips.webp",
          tags: ["منارة بصرية", "هيكل حديدي", "معتمد ضد الرياح"],
          scale: "ارتفاع 3.5 م",
          finish: "دهانات صناعية حرارية مقاومة للعوامل الجوية",
        },
        {
          id: "nescafe-giant-mug",
          title: "مجسم كوب وحبوب قهوة نسكافيه الميداني الضخم",
          category: "sculptures",
          desc: "مجسم أحمر ضخم بعدة أمتار مع محاكاة رغوة القهوة وحبات البن لواجهات المطاعم والفروع.",
          image: "/outdoor/nescafe-coffee.webp",
          tags: ["معلم تجاري", "محطات درايف ثرو", "سيتي للمجسمات"],
          scale: "أكثر من 4 أمتار",
          finish: "حديد مجلفن وراتنجات بحرية",
        },
        {
          id: "chipsy-playz-outdoor",
          title: "مجسم شيبسي وبلايز المعماري الخارجي العملاق",
          category: "sculptures",
          desc: "مجسم فايبر جلاس عملاق لأكياس المقرمشات مع شاسيه داخلي معالج حرارياً ومقاوم للعوامل الجوية.",
          image: "/outdoor/chipsy-playz.png",
          tags: ["معلم تجاري", "فايبر جلاس", "واجهات درايف ثرو"],
          scale: "ارتفاع 5 أمتار معماري",
          finish: "طلاء بولي يوريثان حراري مقاوم لـ UV",
        },
        {
          id: "vacuum-formed-bottle",
          title: "مجسم الزجاجة الهندسية العملاقة بتقنية الفاكيوم",
          category: "sculptures",
          desc: "مجسم تجاري عملاق بتقنية التشكيل الحراري (الفاكيوم) للواجهات والميادين مع دقة تفاصيل العبوة.",
          image: "/outdoor/vacuum-formed.webp",
          tags: ["تنصيب مدني", "فاكيوم حراري", "سيتي سكيل"],
          scale: "ارتفاع 6 أمتار معمارية",
          finish: "بوليمر حراري صلب عالي المقاومة",
        },
        {
          id: "dragon-relief-sculpture",
          title: "منحوتة التنين المعمارية ثلاثية الأبعاد للواجهات الفاخرة",
          category: "sculptures",
          desc: "منحوتة جدارية بارزة ثلاثية الأبعاد بطلاء البرونز العتيق لواجهات المطاعم الفاخرة ومدن الترفيه.",
          image: "/outdoor/dragon-sculpture.webp",
          tags: ["منحوتة جدارية", "برونز معتق", "واجهات فاخرة"],
          scale: "4م × 3م أبعاد جدارية",
          finish: "مركب برونزي مقاوم للمناخ الخارجي",
        },
        {
          id: "adams-world-sculpture",
          title: "مجسمات مدينة عالم أدم الترفيهية العملاقة",
          category: "sculptures",
          desc: "نصب ومجسمات ضخمة معمارية لمدن الملاهي ومراكز الترفيه العائلي وسلاسل المطاعم الكبرى.",
          image: "/outdoor/adams-world.webp",
          tags: ["مدن ترفيهية", "مجسم فايبر جلاس", "مقاوم للشمس"],
          scale: "مقياس مدن ترفيهية عملاق",
          finish: "طلاء بولي يوريثان متعدد الطبقات",
        },
        {
          id: "smart-table-system",
          title: "محطة طاولات الطعام الذكية التفاعلية 4K",
          category: "smart",
          desc: "طاولة لمس تجارية مقاومة للسوائل بدقة 4K مع ألعاب عائلية وقوائم طعام ثلاثية الأبعاد متصلة بالكاشير.",
          image: "/smart-tables/youtube-maxres.jpg",
          tags: ["طاولات ذكية", "لمس 4K متعدد", "ربط مع الكاشير"],
          scale: "طاولة مطعم لـ 4-6 أفراد",
          finish: "زجاج أمان مقسّى حرارياً 8 ملم",
        },
        {
          id: "chocolate-gateau",
          title: "جاتوه الشوكولاتة الفرنسية الفاخرة",
          category: "replicas",
          desc: "جناش الشوكولاتة العاكس كالمرآة مع لمسات ورق الذهب، وتموجات الشانتيلي وتوت العليق الطازج.",
          image: "/food/gateau.jpg",
          tags: ["حلويات راقية", "جليز عاكس", "ضيافة فاخرة"],
          scale: "كعكة عرض واجهات 1:1",
          finish: "مينا زجاجية فائقة اللمعان",
        },
        {
          id: "molten-lava-cake",
          title: "مولتن لافا كيك بلحظة تدفق الشوكولاتة الساخنة",
          category: "replicas",
          desc: "تجميد فني للحظة انفجار الشوكولاتة السائلة الذائبة من قلب الكيكة الدافئة مع صوص التوت.",
          image: "/food/molten cake.jpg",
          tags: ["حلويات", "حركة مجمدة", "إغراء بصري"],
          scale: "مجسم ديناميكي 1:1",
          finish: "صب راتنج لزج عالي الشفافية",
        },
        {
          id: "roz-bel-laban",
          title: "أرز باللبن مصري أصيل بالقشطة والمكسرات",
          category: "replicas",
          desc: "محاكاة قشرة الحليب المجعدة التقليدية المحمرة، مع فتات الفستق الحلبي والقوام الكريمي الأصيل.",
          image: "/food/rice-pudding.jpg",
          tags: ["حلويات شرقية", "محاكاة القشرة", "نضارة دائمة"],
          scale: "طاجن فخاري تقليدي 1:1",
          finish: "راتنج شبه شفاف عالي الملمس",
        },
        {
          id: "kids-happy-box",
          title: "وجبة الأطفال السعيدة مع اللعبة التفاعلية",
          category: "replicas",
          desc: "أصابع البطاطس المقرمشة، وقطع الناجتس الذهبية، مع مجسم اللعبة الكرتونية الترويجية للعلامة.",
          image: "/food/kids meal.jpg",
          tags: ["مطاعم سريعة", "جذب الأطفال", "ألوان زاهية"],
          scale: "وجبة أطفال متكاملة 1:1",
          finish: "طلاء آمن وغير سام مطابق للمواصفات",
        },
      ],
    },
    lead: {
      tag: "طلب استشارة هندسية وعرض سعر",
      title: "هل أنت مستعد لتجعل علامتك التجارية الأيقونة البصرية الأولى في مجالك؟",
      intro: "نظراً للدقة الهندسية العالية والاهتمام الاستثنائي بالتفاصيل في كل عمل نصنعه، فإننا نقبل عدداً محدوداً ومختاراً من المشاريع الكبرى في كل ربع سنوي لضمان أعلى مستويات الإبهار والتميز لشركائنا في مصر والخليج.",
      ndaBadge: "اتفاقية سرية معلومات رسمية (NDA) متوفرة وموقعة فور استلام ملخص المشروع.",
      formTitle: "طلب عرض سعر واجتماع استشاري",
      formSubtitle: "سجّل بيانات مشروعك أدناه وسيتواصل معك المدير الهندسي التنفيذي لمناقشة التفاصيل خلال 24 ساعة.",
      fields: {
        name: "الاسم بالكامل",
        namePlaceholder: "مثال: م. أحمد منصور",
        title: "المسمى الوظيفي",
        titlePlaceholder: "مثال: مدير التطوير / الشيف التنفيذي / مدير العمليات",
        company: "الشركة / العلامة التجارية",
        companyPlaceholder: "اسم مطعمك أو مجموعتك الفندقية",
        phone: "الموبايل / واتساب",
        phonePlaceholder: "+20 100 000 0000 أو +966 50 000 0000",
      },
      submitButton: "طلب عرض سعر",
      submitting: "جاري إرسال طلب الاستشارة...",
      successTitle: "تم استلام طلبكم بنجاح",
      successMessage: "شكراً لتواصلكم. تم تحويل بيانات مشروعكم إلى الإدارة الهندسية المركزية وسيتم التواصل معكم خلال أقل من 24 ساعة.",
      hotlineLabel: "الخط الساخن المباشر / واتساب الإدارة",
      hotline: "+20 100 555 4321",
      email: "concierge@thefoodmodels.com",
    },
    proposalModal: {
      title: "الملف التعريفي للشركات ودليل المواصفات الهندسية 2026",
      subtitle: "The Food Models • إحدى شركات سيتي للمجسمات",
      desc: "احصل على نسختك الحصرية من الدليل الفني للشركات الذي يتضمن المواصفات الميكانيكية للبوليمرات، واختبارات مقاومة الطقس في الخليج، ودراسات جدوى العائد الاستثماري لمجسمات العرض والطاولات الذكية.",
      downloadBtn: "تحميل الملف التنفيذي الشامل (PDF)",
      features: [
        "شرح تفصيلي للمواصفات الهندسية للخطوط الإنتاجية الثلاثة",
        "دراسة مقارنة التكاليف مقابل الهدر اليومي لأطباق العرض (صفر هدر)",
        "شهادات اختبار مقاومة الرياح والأشعة فوق البنفسجية في مصر والخليج",
        "دليل الربط التقني والهندسي للطاولات الذكية مع أنظمة الكاشير",
      ],
      close: "إغلاق المعاينة",
    },
    footer: {
      tagline: "نهندس أيقونات بصرية لا تُنسى وتجارب تفاعلية استثنائية لأكبر علامات الضيافة في مصر والشرق الأوسط.",
      parentCompany: "The Food Models — إحدى الشركات التابعة لمجموعة سيتي للمجسمات الهندسية ش.م.م. (City Scale Models).",
      locations: ["مصر (القاهرة)", "المملكة العربية السعودية (الرياض)"],
      quickLinksTitle: "روابط سريعة",
      contactTitle: "التواصل المباشر للإدارة",
      copyright: "جميع الحقوق محفوظة © 2026 The Food Models.",
      rights: "صُمم ونُفّذ بأعلى معايير الهندسة المعمارية بواسطة سيتي للمجسمات.",
    },
  },
};
