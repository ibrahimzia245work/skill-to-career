/**
 * SKILL → CAREER: Core Interactive Engine
 * Provides state management, dynamic career matching algorithms,
 * visual roadmap computation, skill gap analytics, and UI responsiveness.
 */

// 1. SKILLS DATA MATRIX
const SKILLS_DATA = [
  { id: "programming", name: "Programming", icon: "💻", category: "Technical" },
  { id: "design", name: "Design", icon: "🎨", category: "Creative" },
  { id: "data-analysis", name: "Data Analysis", icon: "📊", category: "Analytical" },
  { id: "communication", name: "Communication", icon: "🗣️", category: "Soft Skills" },
  { id: "writing", name: "Writing", icon: "✍️", category: "Content" },
  { id: "ai", name: "AI", icon: "🤖", category: "Cutting-Edge" },
  { id: "marketing", name: "Marketing", icon: "📱", category: "Growth" },
  { id: "business", name: "Business", icon: "📈", category: "Strategy" },
  { id: "problem-solving", name: "Problem Solving", icon: "🔧", category: "Analytical" },
  { id: "leadership", name: "Leadership", icon: "👥", category: "Management" }
];

// 2. CAREER DATABASE WITH CORE SKILLS, ROADMAPS, AND CAPSTONES
const CAREERS_DATA = [
  {
    id: "software-developer",
    name: "Software Developer",
    category: "Engineering",
    tagline: "Architect robust, scalable web services and distributed software systems.",
    requiredSkills: ["programming", "problem-solving", "ai", "communication"],
    difficulty: "Moderate",
    difficultyLevel: 2, // 1: Beginner, 2: Moderate, 3: Advanced
    timeline: "6 - 9 Months",
    demand: "Very High 🔥",
    roadmapPreview: "Master Git & JS → Build REST APIs → Deploy Fullstack App",
    recommendedNextStep: "Build a full-stack CRUD application with database integration, authentication, and live cloud deployment.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Programming Foundations & CS Basics",
        duration: "Month 1 - 2",
        description: "Learn modern JavaScript/TypeScript or Python, Git version control, data structures, and algorithmic logic.",
        completed: false
      },
      {
        phase: 2,
        title: "Frontend & Backend Web Architecture",
        duration: "Month 3 - 4",
        description: "Develop reactive interfaces (HTML/CSS/JS/React) and build backend RESTful microservices with Node/Express or FastAPI.",
        completed: false
      },
      {
        phase: 3,
        title: "Database Modeling & API Security",
        duration: "Month 5 - 6",
        description: "Design relational & NoSQL schemas (PostgreSQL, MongoDB), implement JWT authentication and secure endpoints.",
        completed: false
      },
      {
        phase: 4,
        title: "Full-Stack Deployment & CI/CD",
        duration: "Month 7+",
        description: "Dockerize applications, setup automated CI/CD workflows, configure cloud hosting (AWS/Vercel) and pass technical interviews.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "AI-Powered SaaS Dashboard",
        description: "Full-stack web application with user auth, stripe billing, and automated LLM summary generation.",
        tags: ["TypeScript", "Node.js", "Postgres", "OpenAI"]
      },
      {
        title: "Real-Time Collaborative Workspace",
        description: "WebSocket-based live whiteboard & markdown doc editing platform supporting multi-tenancy.",
        tags: ["WebSockets", "Docker", "Redis"]
      }
    ]
  },
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    category: "Product & Design",
    tagline: "Design human-centered digital experiences, wireframes, and design systems.",
    requiredSkills: ["design", "communication", "problem-solving", "writing"],
    difficulty: "Beginner-Friendly",
    difficultyLevel: 1,
    timeline: "4 - 6 Months",
    demand: "High ⚡",
    roadmapPreview: "Design Fundamentals → Figma Systems → Usability Testing",
    recommendedNextStep: "Conduct user interviews on an existing friction-heavy app and redesign its onboarding flow in Figma.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Design Principles & Visual Hierarchy",
        duration: "Month 1",
        description: "Master typography, color theory, spacing, accessibility (WCAG), and responsive layout grids.",
        completed: false
      },
      {
        phase: 2,
        title: "User Research & Information Architecture",
        duration: "Month 2 - 3",
        description: "Map user personas, conduct user interviews, build journey flows, and craft low-fidelity wireframes.",
        completed: false
      },
      {
        phase: 3,
        title: "High-Fidelity Prototyping & Design Systems",
        duration: "Month 4 - 5",
        description: "Build component libraries, auto-layout tokens, and micro-interaction prototypes using Figma and Framer.",
        completed: false
      },
      {
        phase: 4,
        title: "Design Hand-off & Portfolio Showcase",
        duration: "Month 6+",
        description: "Package case studies emphasizing problem-solution metrics, usability tests, and engineer handoff specs.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "Fintech Mobile App Re-imagining",
        description: "Complete redesign of a peer-to-peer payment app solving friction in international currency remittances.",
        tags: ["Figma", "User Journey", "Design System"]
      },
      {
        title: "Healthcare Patient Portal",
        description: "Accessible, WCAG AAA-compliant web application for telemedicine appointments and prescription tracking.",
        tags: ["Accessibility", "Wireframing", "Usability Lab"]
      }
    ]
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    category: "Analytics & BI",
    tagline: "Transform messy enterprise datasets into actionable visual business intelligence.",
    requiredSkills: ["data-analysis", "problem-solving", "business", "communication"],
    difficulty: "Moderate",
    difficultyLevel: 2,
    timeline: "5 - 7 Months",
    demand: "High 📈",
    roadmapPreview: "Advanced Excel/SQL → Python for Data → PowerBI Dashboards",
    recommendedNextStep: "Analyze a public Kaggle dataset using SQL and produce an executive KPI summary in PowerBI or Tableau.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Advanced Spreadsheets & Analytical Thinking",
        duration: "Month 1",
        description: "Master formulas, pivot tables, statistical distributions, and hypothesis framing on structured tabular datasets.",
        completed: false
      },
      {
        phase: 2,
        title: "Relational Databases & SQL Querying",
        duration: "Month 2 - 3",
        description: "Write joins, subqueries, aggregations, window functions, and CTEs to extract actionable business segments.",
        completed: false
      },
      {
        phase: 3,
        title: "Python Data Stack (Pandas & Seaborn)",
        duration: "Month 4 - 5",
        description: "Data wrangling, cleansing null records, exploratory data analysis (EDA), and automated statistical reporting.",
        completed: false
      },
      {
        phase: 4,
        title: "BI Dashboards & Executive Storytelling",
        duration: "Month 6+",
        description: "Design interactive dashboards in PowerBI/Tableau and practice translating technical analytics into executive revenue drivers.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "E-Commerce Customer Churn Analysis",
        description: "End-to-end data pipeline identifying 4 critical churn factors with cohort retention charts.",
        tags: ["SQL", "Python", "Tableau", "Pandas"]
      },
      {
        title: "Supply Chain Logistics Optimization",
        description: "Real-time PowerBI dashboard tracking shipment delays, route efficiencies, and freight expenses.",
        tags: ["PowerBI", "PostgreSQL", "ETL"]
      }
    ]
  },
  {
    id: "ai-specialist",
    name: "AI Specialist / ML Engineer",
    category: "Artificial Intelligence",
    tagline: "Build, fine-tune, and deploy machine learning models and modern GenAI agents.",
    requiredSkills: ["ai", "programming", "data-analysis", "problem-solving"],
    difficulty: "Advanced",
    difficultyLevel: 3,
    timeline: "8 - 12 Months",
    demand: "Explosive 🚀",
    roadmapPreview: "Linear Algebra & Python → PyTorch/Transformers → RAG & Agents",
    recommendedNextStep: "Create a domain-specific Retrieval Augmented Generation (RAG) assistant with vector embeddings and LangChain.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Python, Math & ML Foundations",
        duration: "Month 1 - 3",
        description: "Deep dive into linear algebra, calculus, probability, NumPy, SciPy, and classical scikit-learn models.",
        completed: false
      },
      {
        phase: 2,
        title: "Neural Networks & Deep Learning",
        duration: "Month 4 - 6",
        description: "Train CNNs, RNNs, and Transformer architectures using PyTorch; understand backpropagation and loss optimization.",
        completed: false
      },
      {
        phase: 3,
        title: "Modern LLMs, Vector DBs & RAG",
        duration: "Month 7 - 9",
        description: "Harness embeddings, vector databases (Pinecone/Chroma), chunking strategies, and LangChain/LlamaIndex pipelines.",
        completed: false
      },
      {
        phase: 4,
        title: "Model Serving & MLOps Infrastructure",
        duration: "Month 10+",
        description: "Deploy models via FastAPI and vLLM, manage inference latency, quantization, and monitor model drift in production.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "Multimodal Document Intelligence Agent",
        description: "Agentic system parsing PDFs and financial tables into embeddings with cited source validation.",
        tags: ["PyTorch", "LangChain", "VectorDB", "FastAPI"]
      },
      {
        title: "Autonomous Code-Review Bot",
        description: "Fine-tuned small language model (SLM) performing security checks on GitHub Pull Requests.",
        tags: ["Transformers", "LoRA", "HuggingFace", "Docker"]
      }
    ]
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer",
    category: "Growth & Marketing",
    tagline: "Drive user acquisition, paid performance channels, and conversion funnels.",
    requiredSkills: ["marketing", "data-analysis", "writing", "communication"],
    difficulty: "Beginner-Friendly",
    difficultyLevel: 1,
    timeline: "3 - 5 Months",
    demand: "High 📈",
    roadmapPreview: "Copywriting & SEO → Paid Ads (Meta/Google) → Funnel Attribution",
    recommendedNextStep: "Launch an A/B tested landing page campaign with Google Analytics 4 event tracking and conversion goals.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Marketing Strategy & Audience Psychology",
        duration: "Month 1",
        description: "Define value propositions, ICP (Ideal Customer Profile), customer journey stages, and storytelling fundamentals.",
        completed: false
      },
      {
        phase: 2,
        title: "Organic Growth & Content SEO",
        duration: "Month 2",
        description: "Search keyword research, technical on-page SEO, backlink outreach, and high-ranking content creation.",
        completed: false
      },
      {
        phase: 3,
        title: "Performance Ads & Paid Media",
        duration: "Month 3 - 4",
        description: "Launch targeted campaigns on Meta Ads Manager and Google Search Ads; calculate ROAS, CAC, and LTV.",
        completed: false
      },
      {
        phase: 4,
        title: "Analytics, Attribution & Retention",
        duration: "Month 5+",
        description: "Master GA4 custom events, build automated email drip funnels, and run continuous multivariate conversion rate tests.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "B2B SaaS Growth Engine Campaign",
        description: "End-to-end inbound marketing plan with 10 SEO pillar posts and automated email nurturing flow.",
        tags: ["SEO", "GA4", "Email Automation", "Copywriting"]
      },
      {
        title: "E-Commerce Paid Ads Funnel Audit",
        description: "Comprehensive audit decreasing CAC by 28% through creative refreshes and landing page speed improvements.",
        tags: ["Meta Ads", "A/B Testing", "CRO"]
      }
    ]
  },
  {
    id: "content-strategist",
    name: "Content Strategist",
    category: "Brand & Editorial",
    tagline: "Architect brand narratives, editorial frameworks, and multi-channel engagement.",
    requiredSkills: ["writing", "communication", "marketing", "business"],
    difficulty: "Beginner-Friendly",
    difficultyLevel: 1,
    timeline: "3 - 5 Months",
    demand: "Moderate ✍️",
    roadmapPreview: "Audience Analysis → Editorial Calendars → Omnichannel Distribution",
    recommendedNextStep: "Create a 3-month editorial governance model and brand voice stylebook for an emerging tech startup.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Brand Voice & Content Architecture",
        duration: "Month 1",
        description: "Define tone guidelines, editorial pillars, taxonomy, and multi-stakeholder messaging matrices.",
        completed: false
      },
      {
        phase: 2,
        title: "Long-Form & Thought Leadership",
        duration: "Month 2 - 3",
        description: "Produce technical whitepapers, executive op-eds, research reports, and case studies that convert readers.",
        completed: false
      },
      {
        phase: 3,
        title: "Multi-Channel Distribution Strategy",
        duration: "Month 4",
        description: "Repurpose core intellectual assets across newsletters (Substack), LinkedIn thought pieces, and podcasts.",
        completed: false
      },
      {
        phase: 4,
        title: "Content Governance & ROI Metrics",
        duration: "Month 5+",
        description: "Establish editorial review boards, maintain content lifecycle audits, and report on pipeline influence metrics.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "Tech Startup Brand Stylebook",
        description: "Complete 40-page guide standardizing brand voice, glossary, microcopy guidelines, and editorial standards.",
        tags: ["Content Architecture", "Branding", "Stylebook"]
      },
      {
        title: "Industry Benchmark Whitepaper",
        description: "Original research report with infographics generating over 1,500 qualified sales leads.",
        tags: ["Editorial", "Research", "Lead Generation"]
      }
    ]
  },
  {
    id: "product-manager",
    name: "Product Manager",
    category: "Product & Leadership",
    tagline: "Bridge business, tech, and user experience to guide high-impact products from 0 to 1.",
    requiredSkills: ["business", "leadership", "communication", "problem-solving"],
    difficulty: "Moderate",
    difficultyLevel: 2,
    timeline: "6 - 9 Months",
    demand: "Very High 🏆",
    roadmapPreview: "Agile & Discovery → Product Requirement Docs → Metrics & Launches",
    recommendedNextStep: "Draft a comprehensive Product Requirement Document (PRD) with feature prioritization using RICE scoring.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Customer Discovery & Market Validation",
        duration: "Month 1 - 2",
        description: "Identify unmet user pain points, analyze competitive moats, conduct customer discovery sprints.",
        completed: false
      },
      {
        phase: 2,
        title: "Product Specs, User Stories & Roadmaps",
        duration: "Month 3 - 4",
        description: "Write rigorous PRDs, define acceptance criteria, prioritize features with RICE/MoSCoW, and run Sprint planning.",
        completed: false
      },
      {
        phase: 3,
        title: "Tech Fluency & Cross-Functional Alignment",
        duration: "Month 5 - 6",
        description: "Collaborate seamlessly with engineers, understand API contracts and technical debt, guide UX tradeoffs.",
        completed: false
      },
      {
        phase: 4,
        title: "Go-to-Market (GTM) & North Star Metrics",
        duration: "Month 7+",
        description: "Define North Star metrics, run launch telemetry, analyze cohorts in Mixpanel/Amplitude, iterate based on feedback.",
        completed: false
      }
    ],
    capstones: [
      {
        title: "Comprehensive Fintech PRD & Prototype",
        description: "End-to-end Product Spec for an AI expense tracking tool, including user stories and financial unit economics.",
        tags: ["PRD", "Agile", "RICE Scoring", "Roadmapping"]
      },
      {
        title: "Go-To-Market Launch Strategy",
        description: "Cross-functional rollout plan orchestrating sales enablement, release notes, and launch day KPI monitors.",
        tags: ["GTM", "Analytics", "Stakeholder Alignment"]
      }
    ]
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    category: "Enterprise & Strategy",
    tagline: "Decode business workflows, evaluate operational gaps, and orchestrate systemic digital solutions.",
    requiredSkills: ["business", "data-analysis", "problem-solving", "communication"],
    difficulty: "Moderate",
    difficultyLevel: 2,
    timeline: "5 - 7 Months",
    demand: "High 📊",
    roadmapPreview: "Process Mapping (BPMN) → Financial Modeling → Stakeholder Workshops",
    recommendedNextStep: "Map an inefficient existing business process in BPMN 2.0 and document quantifiable cost savings.",
    roadmapPhases: [
      {
        phase: 1,
        title: "Business Process Modeling & Requirements Gathering",
        duration: "Month 1 - 2",
        description: "Interview stakeholders, map 'as-is' vs 'to-be' workflows with BPMN, document functional vs non-functional requirements.",
        completed: false
      },
      {
        phase: 2,
        title: "Quantitative Modeling & Data Validation",
        duration: "Month 3 - 4",
        description: "Construct financial models in Excel, perform cost-benefit analysis, and validate data integrity with SQL.",
        completed: false
      },
      {
        phase: 3,
        title: "System Integration & Agile Delivery",
        duration: "Month 5 - 6",
        description: "Facilitate User Acceptance Testing (UAT), author test cases, manage Jira backlog tickets, ensure compliance.",
        completed: false
      },
      {
        phase: 4,
        title: "Change Management & Strategic Value Realization",
        duration: "Month 7+",
        description: "Coordinate training workshops, monitor post-launch adoption rates, and calculate verified return on investment (ROI).",
        completed: false
      }
    ],
    capstones: [
      {
        title: "Hospital Operations Process Re-Engineering",
        description: "BPMN workflow re-architecture reducing patient intake wait times by 35% through digitized check-in.",
        tags: ["BPMN", "Process Mapping", "UAT", "Excel"]
      },
      {
        title: "Enterprise ERP System Migration Plan",
        description: "Detailed traceability matrix and change management blueprint transitioning 400 employees to a unified ERP.",
        tags: ["ERP", "Requirements Matrix", "Change Mgmt"]
      }
    ]
  }
];

// 3. APPLICATION STATE
const AppState = {
  selectedSkills: new Set(),
  activeCareerId: null,
  activeFilter: "match-desc",
  roadmapStepStates: {} // Stores active/completed steps per career
};

// 4. DOM ELEMENTS
const DOM = {
  skillsContainer: document.getElementById("skillsContainer"),
  activeChipsContainer: document.getElementById("activeChipsContainer"),
  activeStackCount: document.getElementById("activeStackCount"),
  careerCardsGrid: document.getElementById("careerCardsGrid"),
  noSkillsPrompt: document.getElementById("noSkillsPrompt"),
  selectedSkillsCount: document.getElementById("selectedSkillsCount"),
  matchedCareersCount: document.getElementById("matchedCareersCount"),
  topMatchScore: document.getElementById("topMatchScore"),
  clearSkillsBtn: document.getElementById("clearSkillsBtn"),
  resetAllBtn: document.getElementById("resetAllBtn"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  sortFilter: document.getElementById("sortFilter"),

  // Deep Dive Section Elements
  deepDiveSection: document.getElementById("deepDiveSection"),
  closeDeepDiveBtn: document.getElementById("closeDeepDiveBtn"),
  deepDiveCareerName: document.getElementById("deepDiveCareerName"),
  deepDiveBadge: document.getElementById("deepDiveBadge"),
  deepDiveTagline: document.getElementById("deepDiveTagline"),
  deepDiveDifficulty: document.getElementById("deepDiveDifficulty"),
  deepDiveTimeline: document.getElementById("deepDiveTimeline"),
  deepDiveDemand: document.getElementById("deepDiveDemand"),

  gapHaveCount: document.getElementById("gapHaveCount"),
  gapHaveList: document.getElementById("gapHaveList"),
  gapNeedCount: document.getElementById("gapNeedCount"),
  gapNeedList: document.getElementById("gapNeedList"),
  recommendedNextStep: document.getElementById("recommendedNextStep"),
  markGapAcquiredBtn: document.getElementById("markGapAcquiredBtn"),

  roadmapTimeline: document.getElementById("roadmapTimeline"),
  roadmapProgressPercent: document.getElementById("roadmapProgressPercent"),
  roadmapProgressBar: document.getElementById("roadmapProgressBar"),
  capstoneProjectsRow: document.getElementById("capstoneProjectsRow")
};

// 5. INITIALIZATION
function initApp() {
  renderSkillSelector();
  setupEventListeners();
  updateUI();
}

// 6. RENDER SKILL SELECTOR BUTTONS
function renderSkillSelector() {
  DOM.skillsContainer.innerHTML = "";
  
  SKILLS_DATA.forEach(skill => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "skill-toggle-card";
    card.dataset.skillId = skill.id;
    card.setAttribute("aria-pressed", "false");
    
    card.innerHTML = `
      <span class="skill-icon-emoji">${skill.icon}</span>
      <div class="skill-info">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-cat">${skill.category}</span>
      </div>
    `;

    card.addEventListener("click", () => toggleSkill(skill.id));
    DOM.skillsContainer.appendChild(card);
  });
}

// 7. TOGGLE SKILL HANDLER
function toggleSkill(skillId) {
  if (AppState.selectedSkills.has(skillId)) {
    AppState.selectedSkills.delete(skillId);
  } else {
    AppState.selectedSkills.add(skillId);
  }
  updateUI();
}

// 8. UPDATE UI MAIN ORCHESTRATOR
function updateUI() {
  const selectedCount = AppState.selectedSkills.size;
  DOM.selectedSkillsCount.textContent = selectedCount;
  DOM.activeStackCount.textContent = `${selectedCount} skill${selectedCount === 1 ? '' : 's'}`;

  // Update visual state of skill buttons
  document.querySelectorAll(".skill-toggle-card").forEach(card => {
    const skillId = card.dataset.skillId;
    const isSelected = AppState.selectedSkills.has(skillId);
    card.classList.toggle("active", isSelected);
    card.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  // Render active chips in summary container
  renderActiveSkillChips();

  // If no skills selected, show empty prompt
  if (selectedCount === 0) {
    DOM.noSkillsPrompt.style.display = "block";
    DOM.careerCardsGrid.style.display = "none";
    DOM.matchedCareersCount.textContent = "0";
    DOM.topMatchScore.textContent = "0%";
    
    // Hide deep dive if active
    if (AppState.activeCareerId) {
      closeDeepDive();
    }
    return;
  }

  // Calculate Matches
  DOM.noSkillsPrompt.style.display = "none";
  DOM.careerCardsGrid.style.display = "grid";

  const evaluatedCareers = computeCareerMatches();
  renderCareerCards(evaluatedCareers);

  // Update Stats Strip
  const qualifyingCareers = evaluatedCareers.filter(c => c.matchScore > 0);
  DOM.matchedCareersCount.textContent = qualifyingCareers.length;
  
  const highestMatch = evaluatedCareers.length > 0 ? evaluatedCareers[0].matchScore : 0;
  DOM.topMatchScore.textContent = `${highestMatch}%`;

  // If a deep-dive card is currently active, refresh its skill gap and roadmap
  if (AppState.activeCareerId) {
    const currentCareer = CAREERS_DATA.find(c => c.id === AppState.activeCareerId);
    if (currentCareer) {
      renderDeepDive(currentCareer);
    }
  }
}

// 9. RENDER ACTIVE CHIPS
function renderActiveSkillChips() {
  if (AppState.selectedSkills.size === 0) {
    DOM.activeChipsContainer.innerHTML = `<span class="placeholder-text">No skills selected yet. Tap above to begin discovering!</span>`;
    return;
  }

  DOM.activeChipsContainer.innerHTML = "";
  AppState.selectedSkills.forEach(skillId => {
    const skill = SKILLS_DATA.find(s => s.id === skillId);
    if (!skill) return;

    const chip = document.createElement("span");
    chip.className = "active-skill-chip";
    chip.innerHTML = `
      <span>${skill.icon} ${skill.name}</span>
      <button class="remove-chip-btn" title="Remove ${skill.name}" aria-label="Remove ${skill.name}">×</button>
    `;

    chip.querySelector(".remove-chip-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSkill(skillId);
    });

    DOM.activeChipsContainer.appendChild(chip);
  });
}

// 10. ALGORITHM: COMPUTE CAREER MATCH PERCENTAGES
function computeCareerMatches() {
  const userSkills = Array.from(AppState.selectedSkills);

  const scoredCareers = CAREERS_DATA.map(career => {
    const required = career.requiredSkills;
    // Calculate intersection
    const matchedSkills = required.filter(skill => AppState.selectedSkills.has(skill));
    const missingSkills = required.filter(skill => !AppState.selectedSkills.has(skill));

    // Match percentage calculation (Round to nearest integer)
    const matchScore = Math.round((matchedSkills.length / required.length) * 100);

    return {
      ...career,
      matchedSkills,
      missingSkills,
      matchScore
    };
  });

  // Sort based on current filter
  return sortCareers(scoredCareers, AppState.activeFilter);
}

// 11. SORTING HELPER
function sortCareers(careers, filter) {
  const list = [...careers];
  switch (filter) {
    case "match-desc":
      return list.sort((a, b) => b.matchScore - a.matchScore || a.difficultyLevel - b.difficultyLevel);
    case "difficulty-asc":
      return list.sort((a, b) => a.difficultyLevel - b.difficultyLevel || b.matchScore - a.matchScore);
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return list;
  }
}

// 12. RENDER CAREER CARDS
function renderCareerCards(careers) {
  DOM.careerCardsGrid.innerHTML = "";

  careers.forEach(career => {
    const card = document.createElement("div");
    card.className = "career-card glass-card";
    if (AppState.activeCareerId === career.id) {
      card.classList.add("selected-active");
    }

    // Match Badge Style
    let matchClass = "match-low";
    if (career.matchScore >= 75) matchClass = "match-high";
    else if (career.matchScore >= 40) matchClass = "match-medium";

    // Difficulty Color class
    let diffClass = "diff-easy";
    if (career.difficultyLevel === 2) diffClass = "diff-medium";
    if (career.difficultyLevel === 3) diffClass = "diff-hard";

    // Format Required Skills Chips
    const requiredSkillsHTML = career.requiredSkills.map(skillId => {
      const skillObj = SKILLS_DATA.find(s => s.id === skillId);
      const isMatched = AppState.selectedSkills.has(skillId);
      const icon = skillObj ? skillObj.icon : "•";
      const name = skillObj ? skillObj.name : skillId;
      return `<span class="skill-badge ${isMatched ? 'matched' : 'missing'}">${icon} ${name}</span>`;
    }).join("");

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="career-title-group">
            <span class="career-role-category">${career.category}</span>
            <h3>${career.name}</h3>
          </div>
          <span class="match-pill ${matchClass}">
            ${career.matchScore}% Match
          </span>
        </div>

        <div class="match-progress-wrapper">
          <div class="match-progress-label">
            <span>Skill Compatibility</span>
            <span>${career.matchedSkills.length} of ${career.requiredSkills.length} skills</span>
          </div>
          <div class="match-bar-track">
            <div class="match-bar-fill" style="width: ${career.matchScore}%;"></div>
          </div>
        </div>

        <p class="career-desc">${career.tagline}</p>

        <div class="card-section-label">Required Skills</div>
        <div class="required-skills-wrap">
          ${requiredSkillsHTML}
        </div>

        <div class="card-roadmap-preview">
          <div class="roadmap-step-line">
            <span class="roadmap-step-icon">➔</span>
            <span><strong>Roadmap:</strong> ${career.roadmapPreview}</span>
          </div>
        </div>
      </div>

      <div class="card-bottom-row">
        <div class="difficulty-indicator">
          <span class="diff-label">Learning Difficulty</span>
          <span class="diff-value ${diffClass}">${career.difficulty}</span>
        </div>
        <span class="card-action-hint">
          Explore Roadmap & Gap →
        </span>
      </div>
    `;

    card.addEventListener("click", () => {
      selectCareerDeepDive(career.id);
    });

    DOM.careerCardsGrid.appendChild(card);
  });
}

// 13. SELECT CAREER FOR DEEP DIVE
function selectCareerDeepDive(careerId) {
  AppState.activeCareerId = careerId;

  // Initialize progress state for this career if not exists
  if (!AppState.roadmapStepStates[careerId]) {
    AppState.roadmapStepStates[careerId] = [true, false, false, false]; // Default: Phase 1 active
  }

  // Update active border on cards
  document.querySelectorAll(".career-card").forEach(card => {
    card.classList.remove("selected-active");
  });

  const currentCareer = CAREERS_DATA.find(c => c.id === careerId);
  if (currentCareer) {
    renderDeepDive(currentCareer);
    DOM.deepDiveSection.style.display = "block";
    
    // Smooth scroll to deep dive
    setTimeout(() => {
      DOM.deepDiveSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

// 14. RENDER DEEP DIVE (SKILL GAP + INTERACTIVE ROADMAP)
function renderDeepDive(career) {
  // Update Header Info
  DOM.deepDiveCareerName.textContent = career.name;
  
  const matched = career.requiredSkills.filter(s => AppState.selectedSkills.has(s));
  const missing = career.requiredSkills.filter(s => !AppState.selectedSkills.has(s));
  const matchPercent = Math.round((matched.length / career.requiredSkills.length) * 100);

  DOM.deepDiveBadge.textContent = `${matchPercent}% Compatibility`;
  DOM.deepDiveBadge.className = `match-pill ${matchPercent >= 75 ? 'match-high' : matchPercent >= 40 ? 'match-medium' : 'match-low'}`;
  
  DOM.deepDiveTagline.textContent = career.tagline;
  DOM.deepDiveDifficulty.textContent = career.difficulty;
  DOM.deepDiveTimeline.textContent = career.timeline;
  DOM.deepDiveDemand.textContent = career.demand;

  // Render Skill Gap Analysis
  DOM.gapHaveCount.textContent = matched.length;
  DOM.gapHaveList.innerHTML = matched.length > 0 
    ? matched.map(s => {
        const item = SKILLS_DATA.find(sk => sk.id === s);
        return `<span class="skill-badge matched">${item ? item.icon : '✓'} ${item ? item.name : s}</span>`;
      }).join("")
    : `<span class="placeholder-text" style="font-size:0.75rem;">None acquired yet</span>`;

  DOM.gapNeedCount.textContent = missing.length;
  DOM.gapNeedList.innerHTML = missing.length > 0
    ? missing.map(s => {
        const item = SKILLS_DATA.find(sk => sk.id === s);
        return `<span class="skill-badge missing">${item ? item.icon : '!'} ${item ? item.name : s}</span>`;
      }).join("")
    : `<span class="skill-badge matched">All Required Skills Acquired! 🏆</span>`;

  DOM.recommendedNextStep.textContent = career.recommendedNextStep;

  // Toggle button if missing skills exist
  if (missing.length > 0) {
    DOM.markGapAcquiredBtn.style.display = "inline-flex";
    const nextMissingSkill = SKILLS_DATA.find(sk => sk.id === missing[0]);
    DOM.markGapAcquiredBtn.textContent = `⚡ Acquire Next Gap: ${nextMissingSkill ? nextMissingSkill.name : 'Next Skill'}`;
    DOM.markGapAcquiredBtn.onclick = () => {
      toggleSkill(missing[0]);
    };
  } else {
    DOM.markGapAcquiredBtn.style.display = "none";
  }

  // Render Interactive Visual Roadmap Stepper
  renderRoadmapTimeline(career);

  // Render Capstones
  renderCapstoneProjects(career.capstones);
}

// 15. RENDER INTERACTIVE ROADMAP TIMELINE & PROGRESS
function renderRoadmapTimeline(career) {
  DOM.roadmapTimeline.innerHTML = "";
  const stepStates = AppState.roadmapStepStates[career.id] || [true, false, false, false];

  let completedCount = 0;

  career.roadmapPhases.forEach((phase, index) => {
    const isCompleted = !!stepStates[index];
    if (isCompleted) completedCount++;

    const stepEl = document.createElement("div");
    stepEl.className = `timeline-step ${isCompleted ? 'completed' : ''}`;
    stepEl.innerHTML = `
      <div class="step-node">${isCompleted ? '✓' : index + 1}</div>
      <div class="step-content">
        <div class="step-title-line">
          <span class="step-title">Phase ${phase.phase}: ${phase.title}</span>
          <span class="step-duration">${phase.duration}</span>
        </div>
        <p class="step-desc">${phase.description}</p>
      </div>
    `;

    // Click step to toggle milestone completion
    stepEl.addEventListener("click", () => {
      stepStates[index] = !stepStates[index];
      AppState.roadmapStepStates[career.id] = stepStates;
      renderRoadmapTimeline(career);
    });

    DOM.roadmapTimeline.appendChild(stepEl);
  });

  // Calculate Overall Progress
  const progressPercent = Math.round((completedCount / career.roadmapPhases.length) * 100);
  DOM.roadmapProgressPercent.textContent = `${progressPercent}%`;
  DOM.roadmapProgressBar.style.width = `${progressPercent}%`;
}

// 16. RENDER CAPSTONE PROJECTS
function renderCapstoneProjects(capstones) {
  DOM.capstoneProjectsRow.innerHTML = "";
  if (!capstones || capstones.length === 0) return;

  capstones.forEach(cap => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-blueprint-card";
    
    const tagsHTML = cap.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

    projectCard.innerHTML = `
      <div class="project-blueprint-title">${cap.title}</div>
      <p class="project-blueprint-desc">${cap.description}</p>
      <div class="project-tags">${tagsHTML}</div>
    `;

    DOM.capstoneProjectsRow.appendChild(projectCard);
  });
}

// 17. CLOSE DEEP DIVE
function closeDeepDive() {
  DOM.deepDiveSection.style.display = "none";
  AppState.activeCareerId = null;
  document.querySelectorAll(".career-card").forEach(c => c.classList.remove("selected-active"));
}

// 18. RESET ALL HANDLER
function resetAll() {
  AppState.selectedSkills.clear();
  closeDeepDive();
  updateUI();
}

// 19. PRESETS HANDLER
function loadPreset(presetKey) {
  AppState.selectedSkills.clear();

  if (presetKey === "tech") {
    AppState.selectedSkills.add("programming");
    AppState.selectedSkills.add("problem-solving");
  } else if (presetKey === "ai-data") {
    AppState.selectedSkills.add("ai");
    AppState.selectedSkills.add("data-analysis");
    AppState.selectedSkills.add("problem-solving");
  } else if (presetKey === "product") {
    AppState.selectedSkills.add("business");
    AppState.selectedSkills.add("design");
    AppState.selectedSkills.add("communication");
  }

  updateUI();
}

// 20. SETUP EVENT LISTENERS
function setupEventListeners() {
  // Clear skills
  DOM.clearSkillsBtn.addEventListener("click", () => {
    AppState.selectedSkills.clear();
    updateUI();
  });

  // Reset All
  DOM.resetAllBtn.addEventListener("click", resetAll);

  // Close Deep Dive
  DOM.closeDeepDiveBtn.addEventListener("click", closeDeepDive);

  // Sort Filter
  DOM.sortFilter.addEventListener("change", (e) => {
    AppState.activeFilter = e.target.value;
    updateUI();
  });

  // Presets
  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const preset = btn.dataset.preset;
      loadPreset(preset);
    });
  });

  // Theme Toggle
  DOM.themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    DOM.themeToggleBtn.querySelector(".theme-icon").textContent = nextTheme === "dark" ? "🌙" : "☀️";
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", initApp);
