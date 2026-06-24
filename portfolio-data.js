// Shared content extracted from Felipe's resume, used by all direction mocks
window.FELIPE = {
  name: "Felipe Gutierrez",
  title: "Mechanical Engineering (Honours) Student",
  uni: "University of Technology Sydney",
  tagline: "Third-year mechanical engineering student focused on mechanical design, structural analysis and SolidWorks CAD, applying it to real engineering problems.",
  email: "fguti003@gmail.com",
  phone: "(61) 414 047 747",
  linkedin: "felipexgutierrez",
  linkedinUrl: "https://www.linkedin.com/in/felipexgutierrez",
  // URL where this portfolio is hosted — the QR code on the CV points here. Replace after deploying.
  portfolioUrl: "https://felipexgutierrez.github.io/portfolio",
  projects: [
    {
      id: "warman",
      code: "PRJ-01",
      name: "Weir Warman Design & Build Competition",
      course: "41059 Mechanical Design Fundamentals · UTS",
      date: "Autumn 2026 to Present",
      role: "Chassis & Drivetrain · Research & Safety Lead",
      tools: "SolidWorks 2025 · AS1100 · Laser cutting · 3D printing · Manual fabrication",
      summary: "Autonomous robot designed and built in a five-person team to collect and deposit 3D-printed rocks within 120 seconds, for the 39th Weir Warman Competition. I owned the chassis sub-system, covering the structural deck, drivetrain and motor mounting.",
      details: [
        "Led the chassis sub-system: designed the structural deck, drivetrain layout and motor/wheel mounting from concept through to final build.",
        "Served as Research Lead and Quality & Safety Lead, producing risk assessments and Safe Work Method Statements (SWMS).",
        "Produced AS1100-compliant engineering drawings and 3D CAD models using SolidWorks 2025.",
        "Applied morphological tables, weighted decision matrices, and iterative design reviews to select the final robot concept."
      ],
      photo: "warman robot: team build photo",
      hasPhoto: true,
      gallery: [
        { src: "assets/warman/12-demo.png", title: "Demonstration day — Warman REEP track", note: "Ran the robot on the official competition track at the final demonstration." },
        { src: "assets/warman/11-weighin.png", title: "Weigh-in — verifying the mass budget", note: "Checked the build against the competition mass limit on the bench scale." },
        { src: "assets/warman/10-assembly.png", title: "Assembly — the integrated robot", note: "Brought the mechanical, electrical and software sub-systems together." },
        { src: "assets/warman/09-electronics.png", title: "Integration — wiring the control system", note: "Mounted and wired the Arduino, motor drivers and sensors onto the chassis." },
        { src: "assets/warman/08-brackets.png", title: "Fabrication — bent sheet-metal brackets", note: "Folded aluminium brackets in the workshop from the dimensioned drawings." },
        { src: "assets/warman/07-printing.png", title: "Prototyping — 3D-printing custom mounts", note: "Printed motor and wheel mounts to test fit before final fabrication." },
        { src: "assets/warman/06-drawing.png", title: "AS1100 engineering drawing", note: "Produced standard-compliant orthographic + isometric drawings for manufacture." },
        { src: "assets/warman/05-fea.png", title: "FEA — structural stress & deflection study", note: "Validated the hand calcs with a finite-element stress check on the chassis." },
        { src: "assets/warman/04-calcs.png", title: "Engineering analysis — chassis load hand calcs", note: "Hand-calculated reaction forces on the acrylic deck to size the structure." },
        { src: "assets/warman/03-cad.png", title: "SolidWorks CAD — full chassis assembly", note: "Modelled the complete robot as a parametric assembly in SolidWorks 2025." },
        { src: "assets/warman/02-matrix.png", title: "Concept selection — weighted decision matrix", note: "Scored drivetrains against cost, turning, weight & complexity to justify the choice." },
        { src: "assets/warman/01-ideation.png", title: "Ideation — hand-sketched drivetrain & chassis concepts", note: "Generated and compared concepts before committing to CAD." }
      ]
    },
    {
      id: "mott",
      code: "PRJ-02",
      name: "Industrial Partner Project",
      course: "UTS ENG SOC × Mott MacDonald",
      date: "Autumn 2026",
      role: "Project team member",
      tools: "Real client brief · industry mentoring",
      summary: "Industry project delivered with Mott MacDonald through the UTS Engineering Society, working a real client brief alongside practising engineers.",
      details: [
        "Collaborated in a student team on a brief set by Mott MacDonald, with guidance from practising engineers.",
        "Awarded a Certificate of Participation by UTS ENG SOC with Mott MacDonald."
      ],
      photo: "industrial partner project",
      hasPhoto: false,
      gallery: [
        { src: "assets/mott/01-banner.jpg", title: "UTS ENG SOC × Mott MacDonald", note: "The Industry Partner Project: a real client brief run with Mott MacDonald through the UTS Engineering Society." },
        { src: "assets/mott/02-briefing.jpg", title: "Project briefing — the client problem", note: "Practising Mott MacDonald engineers set the brief and outlined the real-world problem to solve." },
        { src: "assets/mott/03-workshop.jpg", title: "Team workshop — developing the solution", note: "Worked in a student team to research, ideate and build out a response to the brief." },
        { src: "assets/mott/04-group.jpg", title: "Cohort showcase — final presentations", note: "Teams presented their solutions to the engineers and the wider cohort on showcase day." },
        { src: "assets/mott/05-certificate.jpg", title: "Certificate of Participation", note: "Recognised by UTS ENG SOC and Mott MacDonald for completing the Industry Partner Project." }
      ]
    },
    {
      id: "heatx",
      code: "PRJ-03",
      name: "Counter-Flow Heat Exchanger",
      course: "41057 Thermofluids A · UTS",
      date: "Autumn 2025",
      role: "Design, CFD & analysis",
      tools: "SolidWorks Flow Simulation · NTU method",
      summary: "Multiple double-pipe heat exchanger configurations designed and CFD-simulated, including an octagonal counter-flow variant produced as a 3D-printed prototype.",
      details: [
        "Ran CFD simulations using SolidWorks Flow Simulation to analyse temperature distribution and heat transfer performance.",
        "Applied the NTU method to analytically validate simulation results across design variants.",
        "Synthesised experimental, computational and theoretical findings into a detailed technical report."
      ],
      photo: "CFD temperature plot / printed prototype",
      hasPhoto: true,
      gallery: [
        { src: "assets/heatx/01-prototype.png", title: "3D-printed octagonal prototype", note: "The counter-flow octagonal heat exchanger printed in PETG, showing the double-pipe geometry and central octagonal core." },
        { src: "assets/heatx/02-cutplot-iso.png", title: "CFD cut plot — temperature contours", note: "SolidWorks Flow Simulation cut plot of the full assembly at iteration 100, with counter-flowing hot and cold streams (293–330 K)." },
        { src: "assets/heatx/03-temperature-section.png", title: "Temperature distribution — longitudinal section", note: "Section view of the fluid temperature field developing along the exchanger length, peaking at 317.95 K." },
        { src: "assets/heatx/04-inlet-massflow.png", title: "Inlet boundary condition", note: "Annular inlet with a prescribed mass flow of 0.0665 kg/s applied to the cold stream." },
        { src: "assets/heatx/05-avg-temp-iterations.png", title: "Convergence — average fluid temperature", note: "Goal plot of average fluid temperature converging to ~304 K over 100 iterations." }
      ]
    },
    {
      id: "vawt",
      code: "PRJ-04",
      name: "Vertical Axis Wind Turbine",
      course: "41053 Materials & Manufacturing A · UTS",
      date: "Spring 2025",
      role: "Design, fabrication & testing (team of 4)",
      tools: "SolidWorks · sheet-metal fab · PETG 3D printing",
      summary: "Lenz2-style six-blade VAWT designed, fabricated and wind-tunnel tested in a four-person team, scoring 70 for generating measurable electrical output at low wind speeds.",
      details: [
        "Adapted a Cammeraygal/Lenz2 drag-and-lift rotor with six 0.5mm galvanised steel blades on a 12mm aluminium shaft, prioritising self-start torque at low wind speeds.",
        "Designed dimensionally accurate 3D-printed PETG central connectors for a secure, repeatable fit and easy part replacement.",
        "Fabricated blades on UTS workshop equipment (guillotine, slip roller, drill press) with fully bolted joints for disassembly, balancing and inspection.",
        "Tested in a wind-tunnel rig, recording rotational speed and electrical output under simulated wind."
      ],
      photo: "turbine under wind-tunnel test",
      hasPhoto: true,
      gallery: [
        { src: "assets/vawt/01-wind-tunnel.png", title: "Wind-tunnel test setup", note: "The assembled six-blade turbine mounted on its base inside the perspex wind tunnel, fan and anemometer in position for performance testing." },
        { src: "assets/vawt/02-connector.png", title: "3D-printed PETG central connector", note: "Top-down view of a PETG connector joining the six galvanised steel blades to the 12mm aluminium shaft via bolted joints." },
        { src: "assets/vawt/03-assembly-drawing.png", title: "Turbine assembly drawing", note: "SolidWorks assembly drawing: 12mm main shaft (×1), main central connector (×2) and blades (×6)." },
        { src: "assets/vawt/04-fabrication.png", title: "Workshop fabrication", note: "Shaft clamped in a vice during assembly of the curved galvanised steel blades in the UTS workshop." }
      ]
    }
  ],
  certificates: [
    { id: "whitecard", name: "White Card", issuer: "Construction induction (NSW)", status: "Held",
      detail: "General construction induction training: authorised to work on Australian construction sites." },
    { id: "firstaid", name: "First Aid Certificate", issuer: "Provide First Aid", status: "Held",
      detail: "Trained in emergency response and CPR; supports safety roles on team projects and site work." },
    { id: "matlab", name: "MATLAB Certification", issuer: "Planned (in progress)", status: "Planned",
      detail: "Preparing for MATLAB certification to formalise programming, control and data-analysis proficiency." },
    { id: "sw", name: "SolidWorks Certification", issuer: "Planned (in progress)", status: "Planned",
      detail: "Preparing for SolidWorks certification to formalise CAD and simulation proficiency." }
  ],
  skills: [
    { name: "SolidWorks", level: "Proficient", note: "Design, simulation & CFD (Flow Simulation)" },
    { name: "MATLAB · Python · C++", level: "Proficient", note: "Control & data analysis scripts" },
    { name: "Mechatronics Integration", level: "Proficient", note: "Mechanical + electrical + software in lab" },
    { name: "English · Spanish", level: "Bilingual", note: "Full professional proficiency in both" }
  ],
  experience: [
    { role: "Residential Tutor", org: "Warrane College, Sydney", date: "Feb 2026 to Present", note: "Pastoral care, mentorship and community-building for university residents." },
    { role: "Barista & Waiter", org: "Pastelería Álvarez Carmona, Chile", date: "Nov 2018 to Apr 2022", note: "Customer service, barista and inventory in a busy café." }
  ],
  offDuty: ["Rugby & gym", "Chess (club president '24)", "Reading", "Country music", "Volunteering (Little Sisters Nursing Home)", "Faith & community"]
};
