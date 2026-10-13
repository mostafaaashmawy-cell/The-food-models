export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    subsidiary: string;
    links: {
      craft: string;
      visualLines: string;
      heritage: string;
      portfolio: string;
      matrix: string;
      process: string;
      roi: string;
    };
    lineDropdown: {
      line1: string;
      line2: string;
      line3: string;
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
      company: string;
      companyPlaceholder: string;
      branches: string;
      branchOptions: string[];
      lines: string;
      lineOptions: { id: string; label: string }[];
      city: string;
      cityOptions: string[];
      phone: string;
      phonePlaceholder: string;
      notes: string;
      notesPlaceholder: string;
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
      links: {
        craft: "01. Craft & Heritage",
        visualLines: "02. Visual Lines",
        heritage: "03. City Scale Pedigree",
        portfolio: "04. Masterpiece Gallery",
        matrix: "05. Enterprise ROI",
        process: "06. Commission Process",
        roi: "Enterprise ROI",
      },
      lineDropdown: {
        line1: "Line 01: Hyper-Realistic Replicas (1:1)",
        line2: "Line 02: Monumental Fiberglass Sculptures",
        line3: "Line 03: Smart Interactive Dining Tables",
      },
      cta: "Request Private Briefing",
      proposalButton: "Executive Concept Deck",
    },
    hero: {
      badge: "A Subsidiary of City Scale Models ✦ Architectural Precision Meets Culinary Art",
      headline: "We Don’t Just Display Food. We Engineer Irresistible Desire.",
      subheadline: "From 100% hyper-realistic food replicas to monumental outdoor fiberglass landmarks and futuristic touch-interactive dining tables—we create sensory brand experiences that dominate the Middle East’s F&B landscape.",
      primaryCta: "Commission a Masterpiece",
      secondaryCta: "Explore The 3 Visual Lines ↓",
      trustPoints: {
        years: { val: "15+ Years", label: "Industrial & Architectural Modeling Pedigree" },
        fidelity: { val: "100%", label: "Visual Fidelity Indistinguishable from Real Cuisine" },
        engineering: { val: "Tier-1 Icons", label: "Serving Premier Hospitality & Enterprise F&B" },
      },
      stampText: "100% REAL VISUAL FIDELITY • CITY SCALE GUARANTEE • ARCHITECTURAL QUALITY • ",
    },
    heritage: {
      tag: "THE CITY SCALE ADVANTAGE",
      headline: "Backed by Egypt’s Foremost Authority in Scale Modeling",
      quote: "“A replica is only as compelling as the precision behind it.”",
      p1: "For over a decade and a half, City Scale Models has engineered the region’s most complex mega-project masterplans, high-rise architectural models, and industrial replicas with microscopic accuracy.",
      p2: "The Food Models was born from this exact engineering DNA. We harnessed the industrial laser-cutting bays, photogrammetry scanning rigs, automotive paint ovens, and master sculptors of City Scale, directing their precision straight into the culinary and hospitality realm.",
      p3: "When you partner with The Food Models, you are not hiring a novelty prop-maker. You are commissioning an industrial design house capable of translating your signature menu and brand iconography into permanent, museum-grade art.",
      stats: {
        years: { number: "15+", label: "Years Industrial Heritage", desc: "Leading scale architecture in Egypt & GCC" },
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
        overview: "Scale has a psychological power that 2D signage can never replicate. From a 6-meter towering ice cream swirl visible from the highway to a massive, hyper-detailed burger atop a flagship drive-thru, our outdoor fiberglass sculptures command immediate attention and dominate social media feeds.",
        features: [
          {
            title: "Unrestricted Monumental Scale",
            desc: "Produced in any dimension—from 2-meter entrance activations to multi-story architectural centerpieces visible from kilometers away.",
          },
          {
            title: "Extreme Middle East Weather Resilience",
            desc: "Coated with multi-layer UV-blocking automotive polyurethane lacquers built to withstand extreme summer desert heat, sandstorms, and coastal humidity.",
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
            theFoodModels: "City Scale Models (15+ Years Industrial Scale Engineering on Mega-Projects).",
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
            theFoodModels: "Automotive-grade polyurethane coatings, UV-inhibiting polymers, and heat-resistant resin matrices.",
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
      title: "Our 4-Stage Architectural Delivery Process",
      subtitle: "From culinary identity audit to turnkey white-glove deployment across Egypt and the GCC.",
      steps: [
        {
          num: "01",
          title: "The Culinary & Brand Audit",
          desc: "We meet with your executive culinary team, brand directors, and interior architects to analyze plating nuances, lighting environments, and revenue goals.",
          deliverable: "Custom Material Matrix & Visual Goal Deck",
        },
        {
          num: "02",
          title: "3D Photogrammetry & Digital CAD Blueprint",
          desc: "Utilizing City Scale’s multi-angle scanning rigs, we capture millimeter-accurate geometry of your real culinary items before producing technical CAD blueprints.",
          deliverable: "High-Resolution 3D Mesh & Scale Schematics",
        },
        {
          num: "03",
          title: "Master Artisan Fabrication",
          desc: "Hand-painted multi-layer glazes, automotive paint curing ovens, food-grade silicone molds, and internal galvanized steel framing executed by senior artisans.",
          deliverable: "Handcrafted Masterpiece Undergoing Quality Audit",
        },
        {
          num: "04",
          title: "Turnkey White-Glove Deployment",
          desc: "Professional on-site mounting, structural anchoring, vitrine integration, and full hardware/software calibration anywhere in Egypt and the Middle East.",
          deliverable: "Permanent Landmark Installation & Lifetime Warranty",
        },
      ],
    },
    portfolio: {
      tag: "MASTERPIECE VAULT",
      title: "Handcrafted Visual Masterpieces",
      subtitle: "Explore our archive of hyper-realistic food replicas and landmark installations crafted for premier brands.",
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
      formTitle: "Request a VIP Project Briefing",
      formSubtitle: "Complete the briefing form below. Our executive engineering director will connect within 24 hours.",
      fields: {
        name: "Full Name & Corporate Title",
        namePlaceholder: "e.g., Tarek Mansour — VP of Brand Development",
        company: "Restaurant Brand / Enterprise Group",
        companyPlaceholder: "e.g., Americana Group / Four Seasons Hospitality",
        branches: "Current Operational Branches",
        branchOptions: ["1 - 3 Boutique Locations", "4 - 10 Multi-Unit Branches", "10+ Enterprise Regional Fleet"],
        lines: "Product Lines of Interest",
        lineOptions: [
          { id: "replicas", label: "Line 01: Hyper-Realistic Food Replicas (1:1)" },
          { id: "monumental", label: "Line 02: Monumental Outdoor Fiberglass Sculptures" },
          { id: "smart", label: "Line 03: Smart Interactive Dining Tables" },
          { id: "full", label: "Full Turnkey Architectural Suite" },
        ],
        city: "Target Deployment Location",
        cityOptions: ["Cairo & Giza", "New Administrative Capital", "Riyadh, Saudi Arabia", "Dubai & Abu Dhabi, UAE", "Alexandria & North Coast", "Other Middle East Destination"],
        phone: "Direct Phone / Executive WhatsApp",
        phonePlaceholder: "+20 100 123 4567 or +966 50 123 4567",
        notes: "Project Scope & Target Launch Date",
        notesPlaceholder: "Describe your menu items, scale requirements, or branch roll-out timeline...",
      },
      submitButton: "Schedule Enterprise Consultation & Deck",
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
        "Complete technical breakdown of Line 01, Line 02, and Line 03",
        "Comparative cost analysis vs daily display food waste",
        "Wind-load & UV weatherproofing engineering certificates",
        "Interactive dining table software & hardware integration guide",
      ],
      close: "Close Preview",
    },
    footer: {
      tagline: "Engineering Irresistible Desire through museum-grade food models and interactive dining innovation.",
      parentCompany: "The Food Models — A Specialized Subsidiary of City Scale Models Engineering S.A.E.",
      locations: ["Cairo", "New Administrative Capital", "Dubai", "Riyadh"],
      quickLinksTitle: "Strategic Navigation",
      contactTitle: "Executive Contacts",
      copyright: "© 2026 The Food Models. All Rights Reserved.",
      rights: "Engineered with architectural precision by City Scale Models.",
    },
  },
  ar: {
    nav: {
      subsidiary: "إحدى شركات سيتي للمجسمات (City Scale)",
      links: {
        craft: "01. الإرث والاعتماد",
        visualLines: "02. خطوط الإنتاج",
        heritage: "03. امتياز سيتي",
        portfolio: "04. معرض الأعمال",
        matrix: "05. العائد الاستثماري",
        process: "06. رحلة الشراكة",
        roi: "العائد الاستثماري",
      },
      lineDropdown: {
        line1: "خط 01: المجسمات فائقة الواقعية (1:1)",
        line2: "خط 02: منحوتات الفايبر جلاس العملاقة",
        line3: "خط 03: طاولات الطعام التفاعلية الذكية",
      },
      cta: "احجز استشارة خاصة لمشروعك",
      proposalButton: "الملف التعريفي للشركات",
    },
    hero: {
      badge: "إحدى شركات \"سيتي للمجسمات\" ✦ حيث تلتقي الهندسة المعمارية الدقيقة بفنون الضيافة الراقية",
      headline: "نحن لا نعرض الطعام.. نحن نهندس رغبة بصرية لا تُقاوم.",
      subheadline: "من مجسمات الأطعمة فائقة الواقعية بنسبة 100%، إلى المنحوتات الخارجية العملاقة بأي حجم، وصولاً إلى طاولات الطعام التفاعلية الذكية. نبتكر معالم بصرية وتجارب حسية تجعل كبرى علامات الأغذية والمشروبات تلمع كالألماس في مصر والشرق الأوسط.",
      primaryCta: "اطلب تنفيذ تحفتك الخاصة",
      secondaryCta: "اكتشف خطوط الإنتاج الثلاثة ↓",
      trustPoints: {
        years: { val: "+15 عاماً", label: "من الريادة في التصنيع الهندسي والمجسمات المعمارية" },
        fidelity: { val: "100%", label: "تطابق بصري تام لا يمكن تمييزه بالعين عن الأطباق الحقيقية" },
        engineering: { val: "شريك كبرى العلامات", label: "وسلاسل الضيافة والمطاعم الراقية في المنطقة" },
      },
      stampText: "تطابق بصري 100% • ضمان سيتي للمجسمات • جودة معمارية فائقة • ",
    },
    heritage: {
      tag: "الامتياز الهندسي لسيتي للمجسمات",
      headline: "مدعومون بأكبر صرح هندسي لصناعة المجسمات في مصر والشرق الأوسط",
      quote: "«الواقعية المتقنة لا تأتي صدفة.. بل هي نتاج هندسة بالغة الدقة.»",
      p1: "على مدار أكثر من عقد ونصف، تصدّرت سيتي للمجسمات (City Scale Models) المشهد الإقليمي في تجسيد أضخم المخططات العمرانية والمشاريع القومية والأبراج السكنية بأعلى معايير الدقة الميكرونية العالمية.",
      p2: "ومن هذا الصرح العريق ولدت The Food Models. لقد قمنا بنقل ماكينات القطع الليزري المتطورة، وغرف دهانات السيارات الحرارية، وتقنيات المسح ثلاثي الأبعاد، وخبرات كبار النحاتين والمهندسين لخدمة قطاع الأغذية والمشروبات الراقي.",
      p3: "عندما تتعاون معنا، فأنت لا تشتري مجرد \"ديكورات\".. بل تتعاقد مع مؤسسة هندسية متكاملة تترجم هوية علامتك التجارية وقائمة أطباقك المميزة إلى أعمال فنية استثمارية مستدامة تدوم لسنوات.",
      stats: {
        years: { number: "+15", label: "عاماً من الإرث الهندسي", desc: "ريادة المجسمات المعمارية في مصر والخليج" },
        fidelity: { number: "100%", label: "دقة بصرية ميكرونية", desc: "محاكاة واقعية للمعان الصلصات وطراوة المخبوزات" },
        scale: { number: "∞", label: "مرونة هندسية بلا حدود", desc: "من المجسمات الفردية 1:1 حتى المعالم العملاقة بارتفاع 10+ أمتار" },
        freshness: { number: "365", label: "يوماً من النضارة الدائمة", desc: "صفر هدر طعام مع جاذبية بصرية مستمرة طوال العام" },
      },
      cta: "اطّلع على اعتمادنا الهندسي",
    },
    lines: {
      sectionTag: "خطوط الإنتاج الثلاثة الرئيسية",
      sectionTitle: "ثلاثة مسارات إبداعية تمنح علامتك التفوق",
      sectionSubtitle: "صُممت خصيصاً لسلاسل المطاعم الراقية، ومواقع البيع المزدحمة، والمعالم الترفيهية الفيروسية.",
      line1: {
        badge: "خط الإنتاج 01: الواقعية الحسية",
        title: "المجسمات الغذائية فائقة الواقعية (1:1 Food Replicas)",
        tagline: "وداعاً لهدر الطعام اليومي في واجهات العرض.. مرحباً بتحويل المارة إلى عملاء دائمين.",
        overview: "باستخدام قوالب السيليكون المخصصة وراتنجات البوليمر المعالجة كيميائياً، نصنع مجسمات مطابقة لأطباقك الحقيقية بنسبة 100%. نحاكي لمعان الصلصات، ودرجات الاستواء الدقيقة، وطراوة المخبوزات، وتدرجات ألوان الخضروات الطازجة. حتى عند الاقتراب الشديد، تعجز العين البشرية عن تصديق أنه ليس طبقاً حقيقياً خرج لتوه من المطبخ.",
        features: [
          {
            title: "استدامة مطلقة وصفر هدر (Zero Spoilage)",
            desc: "تخلص تماماً من كلفة إعداد وتغيير أطباق العرض يومياً؛ واجهاتك ستظل بأعلى درجات الجاذبية والشهية على مدار 365 يوماً في العام.",
          },
          {
            title: "تحفيز الشراء اللحظي (Impulse Buying)",
            desc: "عرض مجسم واقعي في نقاط الازدحام أو مداخل المطاعم وبوفيهات الفنادق يحفز الشراء بمعدلات تفوق الصور الورقية والرقمية بشكل ملموس.",
          },
          {
            title: "قواعد عرض معمارية فاخرة",
            desc: "ندمج المجسمات مع قواعد من الرخام الإيطالي، أو الخشب الطبيعي، أو الأكريليك المعالج، أو النحاس المصقول بما يتماشى مع فخامة ديكوراتك.",
          },
        ],
        idealFor: "صالونات الحلويات الفاخرة، واجهات مطاعم البرجر الراقية، بوفيهات الفنادق العالمية، صالات المطارات، وأجنحة المعارض الدولية.",
        interactiveHint: "اسحب شريط المقارنة لاكتشاف التطابق البصري المذهل بين الطبق الحقيقي والمجسم الفني.",
        sliderRealLabel: "الطبق الحقيقي من المطبخ",
        sliderReplicaLabel: "مجسم فني دقيق 1:1",
      },
      line2: {
        badge: "خط الإنتاج 02: الضخامة والمعالم",
        title: "مجسمات الفايبر جلاس الخارجية الضخمة (Monumental Sculptures)",
        tagline: "اجعل فرعك علامة جغرافية بارزة يتحدث عنها الجميع.",
        overview: "الحجم والضخامة لهما تأثير سيكولوجي طاغٍ لا تضاهيه أي لافتة إعلانية تقليدية. نصمم وننفذ مجسمات فايبر جلاس عملاقة بأي قياس تطلبه—سواء كان مخروط آيس كريم بارتفاع 6 أمتار يُرى من الطرق السريعة، أو مجسم شطيرة برجر عملاق يعتلي مبنى الفرع الرئيسي أو محطات طلبات السيارات (Drive-Thru).",
        features: [
          {
            title: "مرونة هندسية بلا حدود للأحجام",
            desc: "من مجسمات المداخل بارتفاع مترين وحتى المنحوتات المعمارية الضخمة التي تمتد لعدة طوابق وتُشاهد من مسافات بعيدة.",
          },
          {
            title: "مقاومة فائقة للمناخ الصحراوي والساحلي",
            desc: "معالجة بمواد عزل وبويات سيارات حرارية ومواد مانعة للأشعة فوق البنفسجية (UV) لتتحمل حرارة الصيف الشديدة، والعواصف الرملية، ورطوبة السواحل.",
          },
          {
            title: "أمان هيكلي معتمد وهياكل فولاذية",
            desc: "مدعومة بهياكل داخلية من الحديد المجلفن ضد الصدأ ومحسوبة هندسياً لمقاومة أحمال الرياح العاتية وفق أعلى معايير السلامة الإنشائية.",
          },
          {
            title: "تسويق ذاتي فيروسي (Viral Marketing)",
            desc: "يتحول المجسم فوراً إلى نقطة التقاط صور وسيلفي تتصدر تيك توك وإنستغرام، مما يمنحك ملايين المشاهدات المجانية دورياً.",
          },
        ],
        idealFor: "ممرات طلبات السيارات (Drive-Thru)، واجهات المراكز التجارية الكبرى، مدن الملاهي والترفيه، والفروع الرئيسية لسلاسل الأغذية الشهيرة في مصر والخليج.",
        sliderTitle: "محاكي المقاييس التفاعلي",
        sliderHint: "اسحب المؤشر لاختبار ارتفاع المجسم من متر واحد وحتى أكثر من 10 أمتار مقارنة بحجم الإنسان.",
        currentScale: "ارتفاع المنحوتة المعمارية",
        humanHeight: "مقياس الإنسان الطبيعي (1.80 م)",
      },
      line3: {
        badge: "خط الإنتاج 03: التجارب التفاعلية",
        title: "طاولات الطعام التفاعلية الذكية (Smart Interactive Dining Tables)",
        tagline: "مستقبل قطاع الضيافة.. حيث يتحول وقت الانتظار إلى تجربة استثنائية تأسر الضيوف.",
        overview: "تقنية متطورة صُممت للمطاعم المبتكرة التي تسعى لتقديم تجربة حصرية. نحول أسطح طاولات الطعام العادية إلى شاشات لمس عملاقة عالية الوضوح وسريعة الاستجابة، مستوحاة من أحدث المطاعم الذكية في أوروبا وألمانيا.",
        features: [
          {
            title: "قوائم طعام رقمية تفاعلية بصرية",
            desc: "يتصفح الضيف صور وفيديوهات الأطباق التفاعلية مباشرة على سطح الطاولة، مع إمكانية الطلب والإضافة الفورية، مما يرفع متوسط الفاتورة الإجمالية (AOV).",
          },
          {
            title: "ألعاب تفاعلية جماعية للأطفال والعائلات",
            desc: "باقة مدمجة من الألعاب الترفيهية الذكية وألغاز التسلية أثناء انتظار تحضير الطعام، مما يقضي على ملل الأطفال ويوفر تجربة مريحة للأسر.",
          },
          {
            title: "صندوق موسيقى ومؤثرات ضوئية مخصصة",
            desc: "إمكانية اختيار الموسيقى، أو تفعيل مؤثرات بصرية مذهلة تتفاعل مع حركة الأيدي وحرارة الأكواب، مع إمكانية إرسال تهاني أعياد الميلاد المخصصة على سطح الطاولة.",
          },
          {
            title: "تحمل تجاري شاق وزجاج أمان مقسّى",
            desc: "زجاج أمان مقسّى (Tempered Glass) مقاوم تماماً للسوائل المنسكبة، ودرجات حرارة الأطباق الساخنة، والصدمات القوية، وسهل التعقيم الفوري.",
          },
        ],
        idealFor: "المطاعم العائلية الراقية، مطاعم البرجر والأمريكان داينر الذكية، اللاونجات المتميزة، ومناطق الضيافة في وجهات الألعاب والترفيه الفاخرة.",
        simTitle: "اختبر واجهة الطاولة الذكية التفاعلية",
        simSubtitle: "اضغط على الأزرار التجريبية أدناه للتفاعل الحي مع شاشة الطاولة الرقمية.",
        tabs: {
          menu: "قائمة طعام تفاعلية ثلاثية الأبعاد",
          arcade: "ألعاب الهوكي وتموجات الماء",
          lighting: "الإضاءة المحيطية والمزاجية",
        },
        menuDemo: {
          item: "برجر واجيو دبل ترافل مع صوص الكراميل",
          price: "480 جنيه / 28 دولار",
          desc: "شيدر معتق، بصل مكرمل مدخن، مستحلب الكمأة السوداء الفاخرة على خبز بريوش طازج.",
          pairing: "اقتراح الشيف: بطاطس مقرمشة بزيت الكمأة مع صودا التوت الأسود المدخنة",
        },
        arcadeDemo: {
          prompt: "السطح التفاعلي نشط! المس أو اسحب مؤشر الماوس لتوليد تموجات مائية وردود فعل القرص السريعة.",
          score: "وضع اللعب الجماعي • الطاولة 07 متصلة",
          active: "تردد استجابة اللمس: 120 هرتز",
        },
        lightingDemo: {
          modes: [
            { id: "burgundy", name: "نبيذي ملكي (Royal Bordeaux)", color: "#4E1420" },
            { id: "gold", name: "شمبانيا دافئة (Candlelight)", color: "#D8B26E" },
            { id: "crimson", name: "توت منتصف الليل (Midnight Berry)", color: "#BA2B43" },
            { id: "emerald", name: "شفق إلكتروني (Cyber Aurora)", color: "#10B981" },
          ],
        },
      },
    },
    matrix: {
      tag: "مقارنة الريادة الاستثمارية",
      title: "لماذا تختار كبرى العلامات The Food Models؟",
      subtitle: "مقارنة معيارية صريحة بين الورش التقليدية والامتياز الهندسي لسيتي للمجسمات.",
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
            theFoodModels: "إحدى شركات سيتي للمجسمات (خبرة 15+ عاماً في المشاريع القومية والعمرانية الكبرى).",
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
            theFoodModels: "فايبر جلاس معالج بدهانات سيارات حرارية ومواد عزل UV تضمن البقاء لسنوات دون بهتان.",
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
      tag: "رحلة الشراكة والإنتاج",
      title: "من الفكرة المطبخية إلى التحفة المعمارية المستدامة",
      subtitle: "أربع مراحل احترافية تضمن تسليم العمل بأعلى درجات الدقة والجاهزية في مصر والخليج العربي.",
      steps: [
        {
          num: "01",
          title: "الاستشارة وتحليل الهوية (Culinary Audit)",
          desc: "نجتمع مع مسؤولي التسويق والشيف التنفيذي لدراسة تفاصيل الأطباق، وزوايا الإضاءة، ومواقع التثبيت، والهدف التجاري والتسويقي للمشروع.",
          deliverable: "تقرير الخامات والمواصفات المعمارية",
        },
        {
          num: "02",
          title: "المسح ثلاثي الأبعاد والتخطيط (3D Scanning & CAD)",
          desc: "نستخدم تقنيات المسح الضوئي (Photogrammetry) داخل معامل سيتي للمجسمات لرفع أبعاد الأطباق الحقيقية بدقة ميكرونية وإعداد المخططات الهندسية.",
          deliverable: "مخططات رقمية ثلاثية الأبعاد ونماذج CAD دقيقة",
        },
        {
          num: "03",
          title: "التشكيل والتصنيع الفني (Master Fabrication)",
          desc: "تشكيل قوالب السيليكون المخصصة، وصب البوليمرات المقاومة، والتلوين اليدوي متعدد الطبقات، وتجهيز الهياكل الفولاذية داخل ورشنا المركزية.",
          deliverable: "تحفة فنية تخضع لفحص الجودة الدقيق",
        },
        {
          num: "04",
          title: "التوريد والتركيب الشامل (Turnkey Deployment)",
          desc: "شحن آمن وتثبيت هندسي دقيق مع اختبارات السلامة وتشغيل البرمجيات في أي موقع داخل مصر ودول مجلس التعاون الخليجي.",
          deliverable: "معلم دائم جاهز للتشغيل مع ضمان معتمد",
        },
      ],
    },
    portfolio: {
      tag: "خزينة التحف الفنية",
      title: "أعمال نفخر بصناعتها لكبرى العلامات",
      subtitle: "استكشف نماذج من أعمالنا المصنعة يدوياً بأعلى مقاييس الواقعية والجودة الهندسية.",
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
      tag: "طلب استشارة هندسية خاصة",
      title: "هل أنت مستعد لتجعل علامتك التجارية الأيقونة البصرية الأولى في مجالك؟",
      intro: "نظراً للدقة الهندسية العالية والاهتمام الاستثنائي بالتفاصيل في كل عمل نصنعه، فإننا نقبل عدداً محدوداً ومختاراً من المشاريع الكبرى في كل ربع سنوي لضمان أعلى مستويات الإبهار.",
      ndaBadge: "اتفاقية سرية معلومات رسمية (NDA) متوفرة وموقعة فور استلام ملخص المشروع.",
      formTitle: "نموذج التواصل لكبار العملاء وحجز الاستشارة",
      formSubtitle: "املأ البيانات أدناه وسيتواصل معك المدير الهندسي التنفيذي لمناقشة مشروعك خلال 24 ساعة.",
      fields: {
        name: "الاسم الكريم والمنصب الوظيفي",
        namePlaceholder: "مثال: م. طارق منصور — مدير تطوير العلامة التجارية",
        company: "اسم العلامة التجارية / المجموعة",
        companyPlaceholder: "مثال: مجموعة أمريكانا / فنادق الفورسيزونز",
        branches: "عدد الفروع الحالية للعلامة",
        branchOptions: ["1 - 3 فروع مميزة (بوتيك)", "4 - 10 فروع قيد التوسع", "أكثر من 10 فروع (سلسلة إقليمية كبرى)"],
        lines: "خط الإنتاج المطلوب لمشروعك",
        lineOptions: [
          { id: "replicas", label: "خط 01: مجسمات أطعمة فائقة الواقعية (1:1)" },
          { id: "monumental", label: "خط 02: منحوتات فايبر جلاس خارجية عملاقة" },
          { id: "smart", label: "خط 03: طاولات طعام تفاعلية ذكية" },
          { id: "full", label: "باقة هندسية ومعمارية متكاملة لجميع الخطوط" },
        ],
        city: "الموقع الجغرافي المستهدف للتركيب",
        cityOptions: ["القاهرة والجيزة", "العاصمة الإدارية الجديدة", "الرياض، المملكة العربية السعودية", "دبي وأبوظبي، الإمارات", "الإسكندرية والساحل الشمالي", "وجهة أخرى في الشرق الأوسط"],
        phone: "رقم الهاتف المباشر / واتساب الإدارة",
        phonePlaceholder: "+20 100 123 4567 أو +966 50 123 4567",
        notes: "تفاصيل المشروع وموعد الافتتاح المستهدف",
        notesPlaceholder: "اذكر الأصناف المراد تجسيدها، أو الأحجام المطلوبة، أو الجدول الزمني للتوسع...",
      },
      submitButton: "طلب اجتماع استشاري وملف الأعمال الشامل",
      submitting: "جاري إرسال طلب الاستشارة...",
      successTitle: "تم استلام طلب الاستشارة بنجاح",
      successMessage: "شكراً لاهتمامكم. تم تحويل ملخص مشروعكم إلى الإدارة الهندسية المركزية وسيتم التواصل معكم خلال أقل من 24 ساعة.",
      hotlineLabel: "الخط الساخن المباشر / واتساب الإدارة",
      hotline: "+20 100 555 4321",
      email: "concierge@thefoodmodels.com",
    },
    proposalModal: {
      title: "الملف التعريفي للشركات ودليل المواصفات الهندسية 2026",
      subtitle: "The Food Models • إحدى شركات سيتي للمجسمات",
      desc: "حمّل نسختك الحصرية من الدليل الفني للشركات الذي يتضمن تفاصيل المواد، ودراسات المسح ثلاثي الأبعاد، ونماذج العائد الاستثماري لكبرى سلاسل الضيافة.",
      downloadBtn: "تحميل الدليل الفني التنفيذي (PDF)",
      features: [
        "شرح تفصيلي للمواصفات الهندسية للخطوط الثلاثة",
        "دراسة مقارنة التكاليف مقابل الهدر اليومي لأطباق العرض",
        "شهادات اختبار مقاومة الرياح والأشعة فوق البنفسجية في الخليج",
        "دليل الربط البرمجي والهندسي للطاولات الذكية مع أنظمة الكاشير",
      ],
      close: "إغلاق المعاينة",
    },
    footer: {
      tagline: "نهندس رغبة بصرية لا تُقاوم من خلال مجسمات الأطعمة فائقة الواقعية والابتكارات التفاعلية.",
      parentCompany: "The Food Models — إحدى الشركات التابعة لمجموعة سيتي للمجسمات الهندسية ش.م.م.",
      locations: ["القاهرة", "العاصمة الإدارية الجديدة", "دبي", "الرياض"],
      quickLinksTitle: "روابط سريعة",
      contactTitle: "التواصل التنفيذي المباشر",
      copyright: "جميع الحقوق محفوظة © 2026 The Food Models.",
      rights: "هندسة وتصنيع سيتي للمجسمات المعمارية.",
    },
  },
};
