// =============================================
// OPERUM — MOCK DATA
// =============================================

const OPERUM_DATA = {
  org: { name: "J.C. V V", slug: "jcvv", plan: "Unlimited" },
  user: { name: "Koketso Speco", email: "speconasdaq@gmail.com", initials: "KS" },

  projects: [
    {
      id: "proj-001",
      name: "Commercial Construction Project",
      client: "ABC Developer",
      location: "Johannesburg, South Africa",
      industry: "Commercial",
      projectSize: "Large (R0M-R0M)",
      status: "analyzed",
      isSample: true,
      created: "Nov 01, 2025",
      documents: [
        { type: "Scope of Works", count: 1 },
        { type: "Bill of Quantities", count: 1 },
        { type: "Conditions of Contract", count: 1 },
        { type: "Tender Conditions", count: 2 },
      ]
    },
    {
      id: "proj-002",
      name: "HV Terminations — Substation Upgrade",
      client: "PowerCo Energy",
      location: "Cape Town, South Africa",
      industry: "Industrial",
      projectSize: "Medium (RM-R0M)",
      status: "analyzed",
      isSample: false,
      created: "Jan 15, 2026",
      documents: [
        { type: "Scope of Works", count: 1 },
        { type: "Drawings", count: 3 },
        { type: "Specifications", count: 1 },
      ]
    },
    {
      id: "proj-003",
      name: "Residential Apartment Complex — Stage 2",
      client: "Urban Living Group",
      location: "Durban, South Africa",
      industry: "Residential",
      projectSize: "Large (R0M-R0M)",
      status: "pending",
      isSample: false,
      created: "Feb 10, 2026",
      documents: []
    }
  ],

  tenderAnalysis: {
    "proj-001": {
      projectOverview: {
        status: "Found & verified",
        summary: "Design and construction of a new 3-storey sustainable commercial office building (approx. 12,000 m² GFA) for the City of Johannesburg at 45 Sandton Drive, Johannesburg. Works include base build and selected tenant fit-out areas, targeting a 5-Star Green Star rating. Scope also includes civil/structural works, façade, building services, internal fit-out, and external works such as carparking and landscaping.",
        cards: [
          { icon: "building", label: "PROJECT TYPE", value: "Building – Design & Construction (Commercial Office Base Build + Partial Fitout); Building – New Build (Civil/Structural, Façade, Building Services, Fitout & External Works)" },
          { icon: "calendar", label: "DURATION", value: "Tender closes: 4:00 PM, 30 September 2025 · Works commence: 1 November 2025 · Practical completion: 30 November 2026" },
          { icon: "map-pin", label: "LOCATION", value: "45 Sandton Drive, Johannesburg" },
          { icon: "file-contract", label: "CONTRACT MODEL", value: "AS 4000 General Conditions of Contract (Principal: City of Johannesburg; Contractor: ABC Constructions Pty Ltd)" }
        ]
      },
      submissionRequirements: {
        closingDate: "4:00 PM, 30 September 2025",
        submissionMethod: "City of Johannesburg Procurement Portal. Invitation to Tender also requires two hard copies and one electronic copy.",
        requiredItems: "Conflicting counts stated: 5 required items (Invitation to Tender.pdf) and 7 required items (Tender Returnable Schedule.pdf).",
        components: [
          { required: true,  document: "Letter of Offer",              description: "Signed offer on company letterhead",                          reference: "Invitation to Tender – Section 3" },
          { required: true,  document: "Tender Returnable Schedule",   description: "Completed returnable schedule with all sections filled",      reference: "Tender Returnable Schedule.pdf" },
          { required: true,  document: "Pricing Schedule",             description: "Detailed breakdown of all cost elements",                    reference: "Bill of Quantities.pdf" },
          { required: true,  document: "Programme",                    description: "Proposed construction programme in Gantt chart format",       reference: "Scope of Works.pdf – Section 4" },
          { required: true,  document: "Insurance Certificates",       description: "Evidence of required insurances (PL, WC, Contract Works)",    reference: "Conditions of Contract.pdf – Section 8" },
          { required: false, document: "Company Profile",              description: "Company overview and similar project experience",             reference: "Invitation to Tender – Section 5" },
          { required: false, document: "Safety Management Plan",       description: "Site-specific WHS management plan",                          reference: "Scope of Works.pdf – Section 6" },
        ]
      },
      drawings: {
        summary: "The drawing set covers site establishment, clearing and grubbing, bulk earthworks to form a berm (imported fill placement and compaction), and excavation of a 2-ft (approx 600mm) deep sediment basin, including temporary erosion and sediment controls, drainage tie-ins, and reinstatement. Quantities are primarily driven by clearing extents, fill volumes for the berm, sediment basin excavation/spoil management, and erosion-control materials (silt fence, geotextile, aggregate, outlet protection). Several items require contractor confirmation.",
        keyQuantities: [
          { item: "Clearing & grubbing area",      quantity: "8,500 m2",   source: "Drg C-102 Clearing & Grubbing Plan" },
          { item: "Topsoil strip (nominal 100mm)",  quantity: "850 m3",    source: "Drg C-103 Earthworks Plan & Notes" },
          { item: "Berm fill (compacted)",          quantity: "1,200 m3",  source: "Drg C-104 Berm Section & Notes" },
          { item: "Sediment basin excavation",      quantity: "480 m3",    source: "Drg C-105 Sediment Basin Plan" },
          { item: "Silt fence (Type 1)",            quantity: "620 m",     source: "Drg C-106 ESCP Plan" },
          { item: "Geotextile lining",             quantity: "2,400 m2",  source: "Drg C-105, C-106" },
          { item: "Aggregate surfacing",            quantity: "95 m3",     source: "Drg C-104 Notes" },
          { item: "Outlet structure (concrete)",   quantity: "2 No.",      source: "Drg C-107 Outlet Details" },
          { item: "Drainage reinstatement pipe",   quantity: "45 m",       source: "Drg C-108 Drainage Plan" },
          { item: "Site access stabilisation",     quantity: "180 m2",     source: "Drg C-102 Access Detail" },
        ]
      },
      billOfQuantities: [
        { trade: "PRELIMINARIES", items: [
          { id: "1.0", description: "Preliminaries – site establishment, insurances, temp works", qty: "1", unit: "LS", rate: "R45,000", amount: "R45,000" },
          { id: "1.1", description: "Site offices and amenities",   qty: "12", unit: "months", rate: "R3,500",  amount: "R42,000" },
          { id: "1.2", description: "Safety and security",          qty: "12", unit: "months", rate: "R2,800",  amount: "R33,600" },
          { id: "1.3", description: "Site-specific induction",      qty: "1",  unit: "LS",     rate: "R5,500",  amount: "R5,500" },
        ]},
        { trade: "STRUCTURAL CONCRETE", items: [
          { id: "2.1", description: "Excavation to basement slab FFL", qty: "3,200", unit: "m3", rate: "R48", amount: "R153,600" },
          { id: "2.2", description: "Concrete – 40 MPa slab on ground", qty: "820",  unit: "m3", rate: "R380", amount: "R311,600" },
          { id: "2.3", description: "Concrete – columns and walls",     qty: "640",  unit: "m3", rate: "R420", amount: "R268,800" },
          { id: "2.4", description: "Reinforcement bar – supply & fix", qty: "185",  unit: "t",  rate: "R1,850", amount: "R342,250" },
        ]},
        { trade: "FAÇADE & GLAZING", items: [
          { id: "3.1", description: "Curtain wall system – double-glazed", qty: "4,800", unit: "m2", rate: "R950", amount: "R4,560,000" },
          { id: "3.2", description: "Louvres and sunshading",            qty: "620",   unit: "m2", rate: "R380", amount: "R235,600" },
          { id: "3.3", description: "Entrance feature glazing",          qty: "180",   unit: "m2", rate: "R1,200", amount: "R216,000" },
        ]},
      ],
      requirementsRegister: [
        { id: "REQ-001", description: "Preliminaries including site establishment, insurances, and temporary works.", quantityBasis: "Lump Sum (BOQ item 1.0).", source: "Bill of Quantities.pdf Page 1", citation: "EXPLICIT" },
        { id: "REQ-002", description: "Provide all necessary labour, plant, materials, and supervision to complete the works in accordance with drawings, specifications, and contract conditions.", quantityBasis: "Lump sum (entire scope); duration TBA.", source: "Scope of Works.pdf Page 1 – General Requirements", citation: "EXPLICIT" },
        { id: "REQ-003", description: "Site establishment including temporary fencing, security, safety signage, and environmental management measures.", quantityBasis: "Extent/duration TBA (Scope of Works); included as LS in BOQ preliminaries item 1.0.", source: "Scope of Works.pdf Page 1", citation: "EXPLICIT" },
        { id: "REQ-004", description: "Provide and maintain site offices of sufficient standard for client representative use.", quantityBasis: "12 months based on programme (BOQ item 1.1).", source: "Scope of Works.pdf Page 2 – Site Requirements", citation: "EXPLICIT" },
        { id: "REQ-005", description: "All concrete elements to achieve minimum 5-Star Green Star credit requirements under Materials category.", quantityBasis: "Per structural engineer specifications.", source: "Conditions of Contract.pdf Page 14", citation: "EXPLICIT" },
        { id: "REQ-006", description: "Site utilities and temporary power provisions as required throughout construction.", quantityBasis: "Implied from programme duration and scope.", source: "Scope of Works.pdf Page 3", citation: "IMPLICIT" },
        { id: "REQ-007", description: "Completion of all works in line with construction programme and milestones.", quantityBasis: "14-month programme based on contract dates.", source: "Conditions of Contract.pdf Page 21", citation: "EXPLICIT" },
        { id: "REQ-008", description: "Façade and curtain wall system to achieve 6-star NatHERS energy rating.", quantityBasis: "Per architect's specification – 4,800 m2 curtain wall.", source: "Scope of Works.pdf Page 8 – Façade", citation: "EXPLICIT" },
      ],
      contract: {
        model: "AS 4000 – General Conditions of Contract",
        principal: "City of Johannesburg",
        contractor: "ABC Constructions Pty Ltd",
        paymentTerms: "Monthly progress claims assessed within 15 business days; payment within 10 days of assessment.",
        retentionRate: "5% of each progress claim, capped at 2.5% of contract sum",
        defectsLiability: "12 months from practical completion",
        liquidatedDamages: "R18,500 per day",
        keyRisks: [
          { risk: "Liquidated Damages clause is onerous at R8,500/day", severity: "HIGH" },
          { risk: "Unresolved conflicting submission requirements between tender documents", severity: "HIGH" },
          { risk: "5% retention with no time-release mechanism specified", severity: "MEDIUM" },
          { risk: "AS 4000 insurance provisions require review against current coverage levels", severity: "MEDIUM" },
          { risk: "Design obligations may be broader than standard construct-only scope", severity: "LOW" },
        ]
      },
      rfis: [
        { id: "RFI-001", question: "Conflict between Invitation to Tender (5 required documents) and Returnable Schedule (7 required documents) – which governs?", status: "Open", priority: "HIGH" },
        { id: "RFI-002", question: "Green Star certification responsibility – is it contractor-led or consultant-led?", status: "Open", priority: "MEDIUM" },
        { id: "RFI-003", question: "Exact haul routes and tipping fees for spoil disposal from basement excavation?", status: "Open", priority: "MEDIUM" },
        { id: "RFI-004", question: "Confirmation of foundation type – piled or pad footings? No geotechnical report provided.", status: "Open", priority: "HIGH" },
        { id: "RFI-005", question: "Are existing underground services located and documented? Request feature survey.", status: "Open", priority: "MEDIUM" },
        { id: "RFI-006", question: "Tenant fit-out extent – which tenancy levels and what scope is included?", status: "Open", priority: "MEDIUM" },
        { id: "RFI-007", question: "Clarification on programme milestone for façade completion relative to practical completion date.", status: "Open", priority: "LOW" },
      ],
      risks: [
        { title: "Conflicting Submission Requirements", description: "Tender documents list different numbers of required submission items (5 vs 7), creating ambiguity about what must be submitted.", level: "HIGH", mitigation: "Issue RFI immediately and confirm with the principal before tender close. Price based on the more onerous requirement." },
        { title: "Onerous Liquidated Damages", description: "R18,500/day LD provision is significantly above industry norms for a project of this size (<R0M).", level: "HIGH", mitigation: "Quantify total LD exposure against programme. Consider programme contingency buffer of 3–4 weeks. Seek reduction to R,000/day." },
        { title: "No Geotechnical Report Provided", description: "Foundation design cannot be confirmed without a geotechnical investigation. Risk of unforeseen ground conditions.", level: "HIGH", mitigation: "Request geotech report via RFI. Carry contingency sum for piling or ground treatment. Include exclusion for rock or contamination." },
        { title: "Green Star Design Obligation", description: "5-Star Green Star rating required. Responsibility split between consultant and contractor is not clearly defined in scope.", level: "MEDIUM", mitigation: "Clarify Green Star target achievement responsibility. Price for Green Star documentation assistance but exclude design liability." },
        { title: "Retention Rate and Release", description: "5% retention with no time-based release schedule creates cash-flow risk for extended periods.", level: "MEDIUM", mitigation: "Negotiate 50% release at practical completion and remainder at end of DLP. Standard AS 4000 position." },
        { title: "Spoil Disposal Cost Uncertainty", description: "No haul distance or EPA-approved facility identified for basement excavation spoil (approx. 3,200 m3).", level: "MEDIUM", mitigation: "Obtain tip quotes from 3 suppliers within 20 km radius. Carry contingency of 15% for disposal cost escalation." },
        { title: "Existing Underground Services",  description: "No services location plan or feature survey provided with tender. Risk of service strikes during excavation.", level: "LOW", mitigation: "Dial Before You Dig search required. Include 2-week allowance for service relocation in programme." },
        { title: "Programme Duration Constraint",  description: "14-month programme from November 2025 to November 2026 is tight for a building of this complexity.", level: "LOW", mitigation: "Develop detailed programme with float for façade procurement. Identify long-lead items (curtain wall, lifts) immediately." },
      ]
    }
  },

  resources: [
    { id: "r1",  description: "Boom Pump Surcharge",          type: "Subcontractor", unit: "/m3",    rate: "R10.00", comments: "" },
    { id: "r2",  description: "Concrete Tools",               type: "Plant",         unit: "/m3",    rate: "R14.00", comments: "" },
    { id: "r3",  description: "Ceiling Productivity",         type: "Productivity",  unit: "m²/hr",  rate: "4",      comments: "Self-perform" },
    { id: "r4",  description: "Post Pour Inspection",         type: "Subcontractor", unit: "/each",  rate: "R2.00",  comments: "" },
    { id: "r5",  description: "Carpenter",                    type: "Labour",        unit: "mhr",    rate: "R70.00", comments: "Self-perform" },
    { id: "r6",  description: "Temporary Works Site Visit",   type: "Subcontractor", unit: "/each",  rate: "R2.00",  comments: "" },
    { id: "r7",  description: "Electrical Lighting",          type: "Subcontractor", unit: "/fitting",rate: "R180.00",comments: "5,000 fittings" },
    { id: "r8",  description: "COMMERCIAL MANAGER",           type: "Labour",        unit: "mhr",    rate: "R180.00",comments: "" },
    { id: "r9",  description: "Imported Fill",                type: "Material",      unit: "m3",     rate: "R25.00", comments: "Supplier quote" },
    { id: "r10", description: "Concrete Pump",                type: "Plant",         unit: "hr",     rate: "R220.00",comments: "" },
    { id: "r11", description: "Steel Fixer",                  type: "Labour",        unit: "mhr",    rate: "R75.00", comments: "EBA rates" },
    { id: "r12", description: "Formwork – Ply",               type: "Material",      unit: "m2",     rate: "R22.00", comments: "" },
    { id: "r13", description: "Excavator – 20t",              type: "Plant",         unit: "hr",     rate: "R185.00",comments: "Including operator" },
    { id: "r14", description: "General Labourer",             type: "Labour",        unit: "mhr",    rate: "R58.00", comments: "Award rates" },
    { id: "r15", description: "Curtain Wall Supply",          type: "Subcontractor", unit: "m2",     rate: "R950.00",comments: "Based on quote" },
  ],

  workbookTemplates: [
    { id: "t1", name: "Scaffolding Rates",        desc: "Standard scaffolding cost template with area and height variables", items: 12, updated: "Jan 2026" },
    { id: "t2", name: "Concrete Works",           desc: "Full concrete package from excavation to finishing",                 items: 28, updated: "Dec 2025" },
    { id: "t3", name: "Structural Steel",         desc: "Fabrication, supply, and erection rates",                           items: 18, updated: "Nov 2025" },
    { id: "t4", name: "Building Services – HVAC", desc: "Mechanical services estimation template",                           items: 35, updated: "Jan 2026" },
    { id: "t5", name: "Civil Earthworks",         desc: "Cut, fill, compaction and disposal volumes",                        items: 22, updated: "Feb 2026" },
    { id: "t6", name: "Fit-Out & Finishes",       desc: "Interior fitout from partitions to floor finishes",                 items: 45, updated: "Feb 2026" },
  ],

  wbsData: [
    {
      id: "s1", name: "Preliminaries", packages: [
        { name: "Site Facilities",       desc: "Temporary offices, amenities, utilities",  code: 220, type: "Self perform",  status: "N/A" },
        { name: "Design Services",       desc: "Architectural and engineering design",       code: 210, type: "Subcontract",   status: "Awarded" },
        { name: "Project Management",    desc: "PM, supervision, administration",            code: 230, type: "Self perform",  status: "N/A" },
      ]
    },
    {
      id: "s2", name: "Construction", packages: [
        { name: "Lifts",                 desc: "Two passenger lifts",                       code: 190, type: "Subcontract",   status: "Draft" },
        { name: "Structural Concrete",   desc: "Slabs, columns, cores",                    code: 310, type: "Self perform",  status: "N/A" },
        { name: "Structural Steel",      desc: "Steel frame and connections",               code: 320, type: "Subcontract",   status: "Awarded" },
        { name: "Façade & Glazing",      desc: "Curtain wall and glazing system",           code: 410, type: "Subcontract",   status: "Draft" },
      ]
    },
    {
      id: "s3", name: "Building Services", packages: [
        { name: "Mechanical – HVAC",     desc: "Air-conditioning and ventilation",          code: 510, type: "Subcontract",   status: "Draft" },
        { name: "Electrical",            desc: "Power, lighting, CCTV, access control",    code: 520, type: "Subcontract",   status: "Draft" },
        { name: "Hydraulics",            desc: "Water, sewer, stormwater",                 code: 530, type: "Subcontract",   status: "N/A" },
        { name: "Fire Protection",       desc: "Sprinklers, detection, suppression",       code: 540, type: "Subcontract",   status: "Draft" },
      ]
    }
  ]
};

// Expose globally
window.OPERUM_DATA = OPERUM_DATA;
