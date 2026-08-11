export const site = {
  name: "NIVENTRA",
  fullName: "NIVENTRA Medical Affairs",
  domain: "niventra.in",
  tagline: "Advancing Medical Affairs with Insight, Integrity and Impact",
  contactEmail: "hello@niventra.in",
};

export const nav = [
  { href: "/", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership Team" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/awards", label: "Awards & Recognition" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const about = {
  eyebrow: "Founder-Led Medical Affairs Advisory",
  headline: site.tagline,
  lede: "NIVENTRA is a Founder-led advisory, evidence and capability-building partner for pharmaceutical organisations.",
  paragraphs: [
    "NIVENTRA is focussed on enabling meaningful, strategic and scientifically robust Medical Affairs engagement.",
    "NIVENTRA represents the convergence of scientific knowledge, strategic thinking and trusted medical partnerships that drive better healthcare decisions.",
  ],
  stat: {
    value: "25+",
    unit: "years",
    label: "of Applied Medical Affairs Leadership bringing sound judgment, credible science and practical execution.",
  },
  closing:
    "NIVENTRA Medical Affairs combines the depth of multinational Medical Affairs experience with a commitment to scientific excellence, ethical governance and meaningful stakeholder engagement to improve patient care.",
};

export type LifecycleStage = {
  key: "prelaunch" | "launch" | "postlaunch";
  label: string;
  items: string[];
};

export const services = {
  eyebrow: "Services",
  headline: "NIVENTRA helps lead medical strategy across the product lifecycle",
  closing:
    "One medical strategy linking scientific need, stakeholder insight, evidence generation and execution.",
  lifecycle: [
    {
      key: "prelaunch",
      label: "Prelaunch",
      items: [
        "Unmet medical need assessment",
        "Identification of evidence gaps",
        "Mapping KOL landscape",
        "Medical rationale",
        "Medical readiness",
      ],
    },
    {
      key: "launch",
      label: "Launch",
      items: [
        "Scientific narrative",
        "Internal team scientific capability",
        "Medical education plan",
        "Implementation of actionable insights",
        "MSL deployment",
        "Governance framework",
        "KOL scientific engagement",
      ],
    },
    {
      key: "postlaunch",
      label: "Postlaunch",
      items: [
        "Real world evidence strategy",
        "Investigator initiated study plan",
        "Speaker programs",
        "Scientific communication plan",
      ],
    },
  ] satisfies LifecycleStage[],
};

export const leadership = {
  eyebrow: "Leadership Team",
  founder: {
    name: "Dr Nivedita Telang",
    role: "Founder and CEO",
    photo: "/images/founder.jpg",
    bio: [
      "Dr Nivedita Telang is a Medical Affairs leader with over two decades of experience across leading pharmaceutical organisations: Cipla, Merck Serono, MSD, Janssen Pharmaceuticals (Johnson & Johnson), GSK, Alkem, Sanofi and Opella Healthcare.",
      "Her experience spans medical strategy for more than 100 brands, multiple therapy areas, and leadership of medical, regulatory and evidence-generation initiatives across India and global stakeholder networks.",
    ],
    disclaimer:
      "The organisations mentioned are former employers of Dr Nivedita Telang and are referenced solely to describe her professional experience. NIVENTRA Medical Affairs LLP is independent and is not affiliated with, endorsed by, or authorised to represent these organisations.",
  },
  team: [
    { name: "Dr Omkar Telang", role: "President" },
    { name: "Ojayit Telang", role: "Technical Director" },
  ],
};

export const qualifications = {
  eyebrow: "Qualifications of the Founder & CEO",
  headline: "Credentials built over two decades in medicine and healthcare leadership",
  items: [
    { text: "MBBS, Lokmanya Tilak Municipal Medical College, Mumbai", images: [] as string[] },
    { text: "Postgraduate qualification in Anaesthesiology, Grant Medical College, Mumbai", images: [] as string[] },
    { text: "BMJ Certificate Course in Medical Writing", images: ["/images/qualifications/q1.jpg"] },
    {
      text: "International Fellowship in Cosmetology and Trichology, International Education Board, UK",
      images: ["/images/qualifications/q2.jpg", "/images/qualifications/q3.jpg", "/images/qualifications/q4.jpg"],
    },
    { text: "Certified Independent Director from Indian Institute of Corporate Affairs", images: ["/images/qualifications/q5.jpg"] },
    { text: "Crucibold Women Leader", images: ["/images/qualifications/q6.jpg", "/images/qualifications/q7.jpg"] },
    {
      text: "Global Fellow, WomenLift Health Network",
      images: ["/images/qualifications/q8.jpg", "/images/qualifications/q9.jpg", "/images/qualifications/q10.jpg"],
    },
  ],
};

export const awards = {
  eyebrow: "Awards and Recognition",
  headline:
    "Dr Telang has received multiple leadership, collaboration, innovation and launch-excellence awards during her career with multinational pharmaceutical organisations.",
  categories: [
    {
      key: "launch-excellence",
      title: "Launch Excellence Awards",
      items: [
        "MD Special Recognition Award for Cardiovascular Launch Excellence",
        "Launch Excellence Awards for specialty and consumer-healthcare launches in India",
        "Medical Leadership and Immunology Transition Recognition Awards",
      ],
      images: ["/images/awards/launch-excellence/1.jpg", "/images/awards/launch-excellence/2.jpg", "/images/awards/launch-excellence/3.jpg"],
    },
    {
      key: "leadership-growth",
      title: "Leadership and Growth Awards",
      items: [
        "Brand Leadership and cross-functional collaboration awards",
        "Leadership and Growth Award for digital medical-representation implementation",
        "Global Medical Team Collaboration Award for investigator-meeting leadership",
      ],
      images: [
        "/images/awards/leadership-growth/1.jpg",
        "/images/awards/leadership-growth/2.jpg",
        "/images/awards/leadership-growth/3.jpg",
        "/images/awards/leadership-growth/4.jpg",
        "/images/awards/leadership-growth/5.jpg",
        "/images/awards/leadership-growth/6.jpg",
        "/images/awards/leadership-growth/7.jpg",
        "/images/awards/leadership-growth/8.jpg",
      ],
    },
    {
      key: "medical-excellence",
      title: "Medical Excellence Awards",
      items: [
        "Innovation Fund Award for advancing medical-education processes",
        "Global Medical Affairs Award for a rural medical-education initiative",
        "Medical Excellence Award for medico-marketing governance capability building",
      ],
      images: [
        "/images/awards/medical-excellence/1.jpg",
        "/images/awards/medical-excellence/2.jpg",
        "/images/awards/medical-excellence/3.jpg",
        "/images/awards/medical-excellence/4.jpg",
        "/images/awards/medical-excellence/5.jpg",
      ],
    },
  ],
};

export const expertise = {
  eyebrow: "Expertise",
  headline: "Depth across capability building, governance and scientific engagement",
  capabilityBuilding: {
    title: "Capability Building",
    intro:
      "Dr Telang has built and developed medical teams comprising medical advisors, MSLs, medical operations and regulatory professionals. She has led recruitment, onboarding, coaching and career development across Medical Affairs and cross-functional teams.",
    items: [
      "Delivering 100+ scientific, therapeutic-area and product-training sessions for internal medical and commercial teams",
      "Training sales teams at scale, at quarterly cycle meetings with about 200–400 representatives per cycle meeting",
      "Designing induction programmes of 4–7 days for new teams and specialised therapeutic-area teams",
      "Building and developing MSL teams, including competency frameworks, stakeholder-engagement models, KPI tracking and coaching",
      "Supporting onboarding, mentoring and career transitions from MSL to Medical Advisor and leadership roles",
      "Establishing scientific communication and internal-speaker development programmes",
      "Leading faculty-development models that enabled 250 trained faculty members to support education reaching approximately 2,500–3,000 HCPs",
      "Conducting regular one-to-one coaching and mentoring to develop team capability and accountability",
    ],
    images: [
      "/images/expertise/capability-building/1.jpg",
      "/images/expertise/capability-building/2.jpg",
      "/images/expertise/capability-building/3.jpg",
      "/images/expertise/capability-building/4.jpg",
      "/images/expertise/capability-building/5.jpg",
      "/images/expertise/capability-building/6.jpg",
      "/images/expertise/capability-building/7.jpg",
      "/images/expertise/capability-building/8.jpg",
    ],
  },
  governance: {
    title: "Governance Expertise",
    intro:
      "Dr Telang brings extensive experience in establishing compliant, scalable and audit-ready Medical Affairs processes for pharmaceutical organisations.",
    items: [
      "Medical Affairs strategy and operational governance across portfolios",
      "Review and approval of promotional and scientific materials across therapy areas",
      "Adaptation of global SOPs and processes for Indian requirements",
      "Implementation of medical education and medical-information workflows",
      "UCPMP-compliant scientific communication and clear separation of medical and commercial activities",
      "Governance of advisory boards, investigator and KOL engagement, research grants, independent medical education and congress activities",
      "Regulatory scientific engagement, including 50+ Subject Expert Committee regulatory presentations at CDSCO office",
      "Prescribing information updates, safety communications and pharmacovigilance collaboration",
      "Audit-readiness monitoring, documentation trails, approval workflows and CAPA oversight",
      "Crisis-management leadership during product withdrawals, regulatory communication and relaunches",
    ],
    images: [
      "/images/expertise/governance/1.jpg",
      "/images/expertise/governance/2.jpg",
      "/images/expertise/governance/3.jpg",
      "/images/expertise/governance/4.jpg",
    ],
  },
  strategicEngagement: {
    title: "Strategic Scientific Engagement Expertise",
    intro:
      "Dr Telang has led scientific engagement across the product lifecycle at Cipla, Merck Serono, MSD, Janssen, GSK and Sanofi/Opella Healthcare. Her experience spans critical care, respiratory, immunology, cardiovascular, nephrology, gastroenterology, neurology, endocrinology, consumer healthcare and other therapy areas. She has engaged a broad network of hundreds of KOLs across disciplines including respiratory medicine, rheumatology, dermatology, gastroenterology, nephrology, cardiology, endocrinology, paediatrics, gynaecology, neurology and critical care.",
    stages: [
      {
        key: "prelaunch",
        label: "Pre-launch Initiatives",
        items: [
          "Defining unmet medical needs and local scientific rationale for new therapies",
          "Mapping and engaging KOLs, associations and multidisciplinary stakeholders",
          "Developing medical strategies, evidence-generation plans and disease-awareness initiatives for multiple pre-launch assets",
          "Conducting advisory boards to refine place-in-therapy, patient-pathway and evidence-generation plans",
          "Supporting protocol development, site feasibility, investigator identification and scientific training for clinical, Phase IV and real-world evidence studies",
          "Preparing scientific presentations and engagement with regulatory authorities",
          "Developing launch-ready scientific resources, including dossiers, monographs, prescribing information, scientific slide decks and internal training materials",
        ],
        images: ["/images/expertise/strategic-prelaunch/1.jpg", "/images/expertise/strategic-prelaunch/2.jpg", "/images/expertise/strategic-prelaunch/3.jpg"],
      },
      {
        key: "launch",
        label: "Launch Initiatives",
        intro: "Dr Telang has contributed to the launch of products across specialty medicines and consumer-healthcare portfolios.",
        items: [
          "Designing and executing medical launch strategies",
          "Training internal teams, HCPs and specialist audiences at national and zonal meetings",
          "Building compliant KOL-engagement and scientific-speaker programmes",
          "Delivering 20+ advisory boards and numerous scientific forums across therapy areas",
          "Supporting international speaker programmes and cross-specialty meetings",
          "Translating global evidence into locally relevant, balanced scientific exchange",
          "Supporting scientific differentiation through evidence summaries, guideline alignment, disease-state education and place-in-therapy communication",
          "Partnering with Commercial, Regulatory, Clinical, Pharmacovigilance and Compliance teams for coordinated, compliant execution",
        ],
        images: ["/images/expertise/strategic-launch/1.jpg", "/images/expertise/strategic-launch/2.jpg", "/images/expertise/strategic-launch/3.jpg", "/images/expertise/strategic-launch/4.jpg"],
      },
      {
        key: "postlaunch",
        label: "Post-launch Initiatives",
        intro: "Dr Telang has led or supported multiple Phase IV, real-world evidence, post-authorisation safety and physician-insight programmes.",
        items: [
          "Supporting evidence-generation programmes from protocol development through site initiation, recruitment, monitoring, data interpretation, publication and scientific dissemination",
          "Leading medical-education initiatives including 350 accredited CMEs nationwide",
          "Measuring medical-education impact through participant feedback, insight capture and NPS-based evaluation",
          "Managing international speaker programmes, cross-specialty forums and national congress scientific sessions",
          "Generating KOL insights to refine medical strategy and address ongoing unmet patient needs",
          "Creating scientific newsletters, medical-information systems, HCP-engagement platforms, podcasts and omnichannel medical initiatives",
          "Supporting publication, abstract and congress dissemination of scientific evidence",
          "Maintaining lifecycle governance through safety communication, label updates, regulatory engagement and continuous medical-strategy refinement",
        ],
        images: ["/images/expertise/strategic-postlaunch/1.jpg", "/images/expertise/strategic-postlaunch/2.jpg", "/images/expertise/strategic-postlaunch/3.jpg", "/images/expertise/strategic-postlaunch/4.jpg"],
      },
    ],
  },
};

export const contact = {
  eyebrow: "Contact Us",
  headline: "Start a conversation about your Medical Affairs strategy",
  email: site.contactEmail,
};
