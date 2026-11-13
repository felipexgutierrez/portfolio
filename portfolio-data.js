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
      course: "41059 Mechanical Design Fundamentals Studio 1 · UTS",
      date: "Spring 2026",
      role: "Mechatronics & Code Lead · Chassis sub-system",
      tools: "SolidWorks · AS1100 · Laser cutting · 3D printing (PLA) · Arduino (C++) · Soldering & wiring",
      summary: "Autonomous rover designed and built in a five-person team for the 39th Weir Warman Competition (Project REEP): collect six 3D-printed rocks and deposit them in a hopper within 120 seconds, starting inside a 400 mm cube and under 6 kg. I led the mechatronics and code, and designed the chassis as my individual component, taking it through three prototypes to a 2.164 kg laser-cut acrylic double deck.",
      details: [
        "Designed the chassis from requirements to final build: five hand-sketched concepts, a weighted scoring matrix, then three prototypes in cardboard, laser-cut plywood and laser-cut acrylic, changing the design after each test.",
        "Final chassis: two 390 × 290 mm decks in 4.5 mm acrylic on four 3D-printed PLA motor connectors with a centre pillar for load sharing and cable routing, assembled with screws only. 2.164 kg with wheels and electronics, and it fits the 400 mm start cube with 4 mm to spare.",
        "Selected the YG2732 gear motors with a scoring matrix and hand calculations (55.4 mN·m needed per wheel against 155.3 mN·m stall, safety factor 2.8). Predicted 0.244 m/s; measured about 0.30 m/s on the track.",
        "Tested against the requirement list: the chassis carried a 4 kg load without damage and the complete robot weighed 5.225 kg against the 6 kg limit.",
        "Redesigned the 3D-printed wheel connector after the first version snapped at the centre shaft, adding supports between the wheel spokes to share the torque. The redesign has not failed.",
        "Wired the full electrical system (4S LiPo, blade fuse, switch, buck converter, two L298N drivers, Arduino Mega-compatible board), diagnosed a dead controller board by swapping in a spare, and combined the team's code into one autonomous sequence tuned by time on a taped track.",
        "Produced AS1100 drawing packages in SolidWorks: 9 sheets for the chassis and 16 sheets for the competition track, with exploded views, BOMs and part drawings."
      ],
      photo: "warman rover: finished robot on the practice track",
      hasPhoto: true,
      gallery: [
        { src: "assets/warman-spring26/13-full-run.webp", title: "Full autonomous run on the practice track", note: "The finished robot with scoop, scissor lift and deposit box, tuned by time on a taped copy of the competition track." },
        { src: "assets/warman-spring26/12-weighin.webp", title: "Weigh-in: 5.225 kg against the 6 kg limit", note: "The complete robot on the lab scale, 0.775 kg under the competition mass limit." },
        { src: "assets/warman-spring26/11-loadtest.webp", title: "Load test: 4 kg on the top deck", note: "The acrylic chassis carried two 2 kg plates on the competition track with no damage and only slight bending at the ends." },
        { src: "assets/warman-spring26/10-electronics.webp", title: "Integration: wiring between the decks", note: "Controller, two L298N motor drivers, buck converter, fuse and switch wired on the bottom deck, with cables routed through the centre pillar." },
        { src: "assets/warman-spring26/09-wheel-connector.webp", title: "Iteration: wheel connector redesign", note: "The first printed connector drove the wheel through its centre shaft and snapped. The redesign adds supports between the spokes to share the torque." },
        { src: "assets/warman-spring26/08-lasercut.webp", title: "Fabrication: laser-cutting the acrylic decks", note: "Both decks and the centre-pillar panels cut from 4.5 mm acrylic straight from the SolidWorks model." },
        { src: "assets/warman-spring26/07-drawing.webp", title: "AS1100 drawing: exploded assembly and BOM", note: "Sheet 2 of the 9-sheet chassis package, with balloons and a bill of materials." },
        { src: "assets/warman-spring26/06-cad.webp", title: "SolidWorks CAD: Prototype 3 chassis", note: "Two acrylic decks, four printed motor connectors and the centre pillar, modelled as an assembly with a reusable drive-module sub-assembly." },
        { src: "assets/warman-spring26/14-track-cad.webp", title: "SolidWorks CAD: the competition track", note: "The 2026 Warman track modelled from the official drawings and documented in a 16-sheet AS1100 package." },
        { src: "assets/warman-spring26/05-fbd-calcs.webp", title: "Engineering analysis: free body diagram", note: "Hand FBD of the robot accelerating on the flat track, used to size wheel torque and check traction at the 6 kg limit." },
        { src: "assets/warman-spring26/04-prototype2-plywood.webp", title: "Prototype 2: laser-cut plywood on the track", note: "0.845 kg and it carried 4.9 kg, but it was too wide for the start cube once the wheels were on, which drove the narrower Prototype 3." },
        { src: "assets/warman-spring26/03-prototype1-cardboard.webp", title: "Prototype 1: cardboard layout check", note: "A quick, cheap mock-up to settle the footprint and wheel positions before cutting any real material." },
        { src: "assets/warman-spring26/02-matrix.webp", title: "Concept selection: scoring matrix", note: "Five whole-robot concepts from the team scored against nine criteria to choose the design direction." },
        { src: "assets/warman-spring26/01-ideation.webp", title: "Ideation: hand-sketched chassis concept", note: "One of five chassis concepts sketched and compared before committing to the double deck." }
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
        { src: "assets/mott/01-banner.webp", title: "UTS ENG SOC × Mott MacDonald", note: "The Industry Partner Project: a real client brief run with Mott MacDonald through the UTS Engineering Society." },
        { src: "assets/mott/02-briefing.webp", title: "Project briefing — the client problem", note: "Practising Mott MacDonald engineers set the brief and outlined the real-world problem to solve." },
        { src: "assets/mott/03-workshop.webp", title: "Team workshop — developing the solution", note: "Worked in a student team to research, ideate and build out a response to the brief." },
        { src: "assets/mott/04-group.webp", title: "Cohort showcase — final presentations", note: "Teams presented their solutions to the engineers and the wider cohort on showcase day." },
        { src: "assets/mott/05-certificate.webp", title: "Certificate of Participation", note: "Recognised by UTS ENG SOC and Mott MacDonald for completing the Industry Partner Project." }
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
        { src: "assets/heatx/01-prototype.webp", title: "3D-printed octagonal prototype", note: "The counter-flow octagonal heat exchanger printed in PETG, showing the double-pipe geometry and central octagonal core." },
        { src: "assets/heatx/02-cutplot-iso.webp", title: "CFD cut plot — temperature contours", note: "SolidWorks Flow Simulation cut plot of the full assembly at iteration 100, with counter-flowing hot and cold streams (293–330 K)." },
        { src: "assets/heatx/03-temperature-section.webp", title: "Temperature distribution — longitudinal section", note: "Section view of the fluid temperature field developing along the exchanger length, peaking at 317.95 K." },
        { src: "assets/heatx/04-inlet-massflow.webp", title: "Inlet boundary condition", note: "Annular inlet with a prescribed mass flow of 0.0665 kg/s applied to the cold stream." },
        { src: "assets/heatx/05-avg-temp-iterations.webp", title: "Convergence — average fluid temperature", note: "Goal plot of average fluid temperature converging to ~304 K over 100 iterations." }
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
        { src: "assets/vawt/01-wind-tunnel.webp", title: "Wind-tunnel test setup", note: "The assembled six-blade turbine mounted on its base inside the perspex wind tunnel, fan and anemometer in position for performance testing." },
        { src: "assets/vawt/02-connector.webp", title: "3D-printed PETG central connector", note: "Top-down view of a PETG connector joining the six galvanised steel blades to the 12mm aluminium shaft via bolted joints." },
        { src: "assets/vawt/03-assembly-drawing.webp", title: "Turbine assembly drawing", note: "SolidWorks assembly drawing: 12mm main shaft (×1), main central connector (×2) and blades (×6)." },
        { src: "assets/vawt/04-fabrication.webp", title: "Workshop fabrication", note: "Shaft clamped in a vice during assembly of the curved galvanised steel blades in the UTS workshop." }
      ]
    }
  ],
  certificates: [
    { id: "whitecard", name: "White Card", issuer: "Construction induction (NSW)", status: "Held",
      detail: "General construction induction training: authorised to work on Australian construction sites." },
    { id: "firstaid", name: "First Aid Certificate", issuer: "Provide First Aid", status: "Held",
      detail: "Trained in emergency response and CPR; supports safety roles on team projects and site work." },
    { id: "ausimm", name: "AusIMM Student Member", issuer: "The Australasian Institute of Mining and Metallurgy", status: "Held",
      detail: "Student member (SAusIMM, 2026) of AusIMM, the professional body for the resources sector, with access to industry events, publications and professional networks." },
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
