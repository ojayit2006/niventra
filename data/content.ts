export const site = {
  name: "NIVENTRA",
  fullName: "NIVENTRA Medical Affairs",
  domain: "niventra.in",
  tagline: "Advancing Medical Affairs with Insight, Integrity and Impact",
  contactEmail: "drnivedita@niventra.in",
};

export const nav = [
  { href: "/", label: "About Us" },
  { href: "/leadership", label: "Leadership Team" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/awards", label: "Awards & Recognition" },
  { href: "/expertise", label: "Expertise" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const about = {
  eyebrow: "Founder-Led Medical Affairs Advisory",
  headline: site.tagline,
  lede: "NIVENTRA is where scientific rigour meets strategic clarity, a founder-led advisory, evidence and capability-building partner for pharmaceutical organisations navigating complex medical terrain.",
  paragraphs: [
    "Every product has a moment where science must speak with one voice, to the right stakeholder, at the right time. NIVENTRA exists to find that voice, enabling meaningful, strategic and scientifically robust Medical Affairs engagement at every stage of the journey.",
    "NIVENTRA is where scientific knowledge, strategic thinking and trusted medical partnerships converge, turning evidence into decisions that move medicine, and patients, forward.",
  ],
  stat: {
    value: "25+",
    unit: "years",
    label: "of Applied Medical Affairs Leadership bringing sound judgment, credible science and practical execution.",
  },
  closing:
    "NIVENTRA Medical Affairs combines the depth of multinational Medical Affairs leadership with an unwavering commitment to scientific excellence, ethical governance and meaningful stakeholder engagement, because better decisions start with better medicine.",
};

export type LifecycleStage = {
  key: "prelaunch" | "launch" | "postlaunch";
  label: string;
  intro: string;
  items: string[];
};

export const teaser = {
  eyebrow: "Niventra Medical Affairs",
  headline: "Medical Affairs, elevated to a strategic engine.",
  subhead:
    "Founder-led advisory, evidence and capability-building support for pharmaceutical organisations.",
  sectionTitle: "When Medical Affairs must do more than support.",
  sectionIntro:
    "NIVENTRA turns scientific need, stakeholder insight, evidence generation and execution into one connected strategic engine.",
  pillars: [
    {
      icon: "rocket",
      title: "Launch Readiness",
      text: "Scientific positioning, local insight and aligned clinical narratives.",
    },
    {
      icon: "target",
      title: "Evidence Strategy",
      text: "India-relevant RWE, HEOR and evidence plans that support decisions.",
    },
    {
      icon: "users",
      title: "Capability Transformation",
      text: "Medical Affairs models, governance and teams built for lasting impact.",
    },
  ],
  closing: "Identify where Medical Affairs can create the greatest strategic value.",
  closingCta: "Let's start with a focused conversation.",
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
      intro: "Building the scientific foundation before a product reaches the market.",
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
      intro: "Turning scientific groundwork into a coordinated, credible market entry.",
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
      intro: "Sustaining scientific relevance and evidence long after launch.",
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
    linkedin: "",
    intro:
      "A Medical Affairs leader with over two decades of experience across leading pharmaceutical organisations, translating science into strategy at every stage of the product journey.",
    highlights: [
      { value: "25+", label: "Years in Medical Affairs" },
      { value: "100+", label: "Brands led" },
      { value: "6", label: "Global pharma organisations" },
    ],
    bio: [
      "Medical Affairs leader with over two decades of experience across leading pharmaceutical organisations.",
      "Career spans Cipla, Merck Serono, MSD, Janssen Pharmaceuticals (Johnson & Johnson), GSK, Alkem, Sanofi and Opella Healthcare.",
      "Led medical strategy for more than 100 brands across multiple therapy areas.",
      "Directed medical, regulatory and evidence-generation initiatives across India and global stakeholder networks.",
    ],
    disclaimer:
      "The organisations mentioned are former employers of Dr Nivedita Telang and are referenced solely to describe her professional experience. NIVENTRA Medical Affairs LLP is independent and is not affiliated with, endorsed by, or authorised to represent these organisations.",
    proof: {
      eyebrow: "Track Record",
      headline: "Proven industry leadership",
      stats: [
        { value: "30+", label: "Product launches led across specialty and consumer-healthcare portfolios" },
        { value: "50+", label: "CDSCO Subject Expert Committee presentations" },
        { value: "1000+", label: "KOLs engaged across therapy areas and disciplines" },
        {
          value: "20",
          label: "Awards for medical excellence, governance and launch success",
        },
        { value: "12", label: "Therapy areas spanned, from respiratory to oncology" },
        { value: "6", label: "Global pharmaceutical organisations, in senior strategy roles" },
      ],
      logosIntro: "Career built across senior roles at",
      logos: [
        { name: "GSK", src: "/images/logos/gsk.png", width: 70 },
        { name: "Sanofi", src: "/images/logos/sanofi.png", width: 110 },
        { name: "Janssen", src: "/images/logos/janssen.png", width: 110 },
        { name: "MSD", src: "/images/logos/msd.png", width: 90 },
        { name: "Cipla", src: "/images/logos/cipla.svg", width: 90 },
        { name: "Alkem", src: "/images/logos/alkem.png", width: 90 },
      ],
    },
  },
  team: [
    {
      name: "Dr Omkar Telang",
      role: "Co-founder",
      photo: "/images/leadership/omkar.png",
      linkedin: "",
      bio: [
        "MBBS from Lokmanya Tilak Municipal Medical College, Mumbai (1998), with distinction in ENT and Ophthalmology.",
        "MS in Ophthalmology from Grant Medical College, Mumbai (2004).",
        "Over 20 years of experience in ophthalmology, joining K. J. Somaiya Medical College in January 2005 and progressing to Professor and Head of the Ophthalmology Department.",
        "A key figure in shaping the department's academic and clinical practice, combining medical education with hands-on patient care.",
        "Specialises in advanced diagnostic techniques, cataract and refractive surgery, and glaucoma, with numerous cataract surgeries performed to date.",
        "Known for a patient-centric approach that pairs cutting-edge medical technology with compassionate, holistic eye care.",
        "Active researcher focused on the prevention and management of common eye diseases, particularly among the ageing population.",
        "Leads academic programmes, seminars and workshops that disseminate the latest research and clinical practice within the ophthalmic community.",
        "Examiner for undergraduate and postgraduate ophthalmology examinations, and faculty at national ophthalmology conferences.",
        "President of the Bombay Ophthalmologists Association (Secretary, 2016–2017).",
        "Mentors medical students and fellow professionals, fostering a collaborative environment that builds both technical skill and ethical grounding in patient care.",
      ],
    },
    {
      name: "Ojayit Telang",
      role: "Technical Director",
      photo: "/images/leadership/ojayit.png",
      linkedin: "",
      bio: [
        "Leads technology and digital strategy for NIVENTRA, building the platforms and systems behind the firm's advisory and evidence-generation work.",
        "Oversees the tools and infrastructure that support the firm's evidence generation, data management and reporting workflows.",
        "Works closely with the founder to translate Medical Affairs strategy into practical, technology-enabled delivery for client engagements.",
        "Focused on keeping NIVENTRA's systems secure, scalable and aligned with the firm's governance standards.",
      ],
    },
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
  snapshotStats: [
    { value: 100, suffix: "+", label: "SKUs" },
    { value: 12, suffix: "+", label: "Launches" },
    { value: 1000, suffix: "+", label: "KOLs Engaged" },
    { value: 45, suffix: "+", label: "DCGI Presentations" },
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
    substats: [
      { value: 100, suffix: "+", label: "Training sessions delivered" },
      { value: "200–400", suffix: "", label: "Reps trained per cycle meeting" },
      { value: 250, suffix: "", label: "Faculty developed" },
      { value: 1000, suffix: "+", label: "HCPs reached via faculty" },
    ],
    items: [
      "Delivering 100+ scientific, therapeutic-area and product-training sessions for internal medical and commercial teams",
      "Training sales teams at scale, at quarterly cycle meetings with about 200–400 representatives per cycle meeting",
      "Designing induction programmes of 4–7 days for new teams and specialised therapeutic-area teams",
      "Building and developing MSL teams, including competency frameworks, stakeholder-engagement models, KPI tracking and coaching",
      "Supporting onboarding, mentoring and career transitions from MSL to Medical Advisor and leadership roles",
      "Establishing scientific communication and internal-speaker development programmes",
      "Leading faculty-development models that enabled 250 trained faculty members to support education reaching 1000+ HCPs",
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
    ],
  },
  governance: {
    title: "Governance Expertise",
    intro:
      "Dr Telang brings extensive experience in establishing compliant, scalable and audit-ready Medical Affairs processes for pharmaceutical organisations.",
    substats: [
      { value: 50, suffix: "+", label: "CDSCO SEC presentations" },
      { value: 10, suffix: "", label: "Governance domains covered" },
    ],
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
        substats: [{ value: 20, suffix: "+", label: "Advisory boards delivered" }],
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
        substats: [{ value: 350, suffix: "", label: "Accredited CMEs led" }],
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
        images: [
          "/images/expertise/strategic-postlaunch/1.jpg",
          "/images/expertise/strategic-postlaunch/2.jpg",
          "/images/expertise/strategic-postlaunch/3.jpg",
          "/images/expertise/strategic-postlaunch/4.jpg",
          "/images/expertise/strategic-postlaunch/5.png",
        ],
      },
    ],
  },
};

export const contact = {
  eyebrow: "Contact Us",
  headline: "Start a conversation about your Medical Affairs strategy",
  email: site.contactEmail,
};
