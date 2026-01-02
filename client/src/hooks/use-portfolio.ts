// Hardcoded portfolio data for static GitHub Pages deployment

const experiences = [
  {
    id: 1,
    title: "Summer Analyst - Internal Audit (Wealth & Data Analytics)",
    company: "CIBC",
    period: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    description: "Evaluated 20+ investment products against manuals using Excel/Morningstar. Mitigated SOX risks for 1,200+ employees and designed AI prompts generating 300+ annual efficiency hours."
  },
  {
    id: 2,
    title: "Fall Analyst - Private Banking",
    company: "Scotia Wealth Management",
    period: "Sep 2024 - Dec 2024",
    location: "Vancouver, BC",
    description: "Processed 1,000+ transactions and synthesized briefs for HNW clients. Conducted KYC/AML compliance reviews and calculated NAVs for credit adjudication."
  },
  {
    id: 3,
    title: "Winter Analyst - Tax Administration",
    company: "Scotia Wealth Management",
    period: "Jan 2024 - Apr 2024",
    location: "Vancouver, BC",
    description: "Reconciled 50+ T1 and 40+ T3 tax returns for HNW clients. Automated tax-fee calculations via Excel scripts, significantly reducing manual data entry."
  },
  {
    id: 4,
    title: "Summer Analyst - Private Banking",
    company: "Credit Suisse",
    period: "Jul 2022 - Aug 2022",
    location: "Dubai, UAE",
    description: "Leveraged Bloomberg and CapIQ for investment strategy research and valuation. Delivered client stock pitches and modeled cash flows for portfolio decisions."
  },
  {
    id: 5,
    title: "Resident Advisor",
    company: "University of British Columbia",
    period: "Aug 2022 - May 2023",
    location: "Vancouver, BC",
    description: "Built meaningful relationships with 100+ first-year students through community programming and proactive support, enhancing communication, stakeholder engagement, and client relationship management skillsets."
  },
  {
    id: 6,
    title: "Backshop Team Member",
    company: "Shaughnessy Golf & Country Club",
    period: "May 2022 - Aug 2022",
    location: "Vancouver, BC",
    description: "Cleaned and maintained golf clubs, set up golf caddies, and provided members with their golf bags. Answered member inquiries with professionalism and maintained a presentable appearance at all times."
  }
];

const education = [
  {
    id: 1,
    school: "University of British Columbia",
    degree: "B.A. Economics & Statistics (Double Major), Minor in Data Science",
    period: "Sep 2021 - Apr 2026",
    details: "GPA: 3.75 | CFA Level I Passed (90th+ Percentile) | CIBC Exceptional Student Program"
  },
  {
    id: 2,
    school: "Delhi Private School, Sharjah",
    degree: "High School Diploma",
    period: "Apr 2007 - May 2021",
    details: "Grade: 97.6% | Vice Head Boy | Business, Economics, Accountancy, Mathematics"
  }
];

const projects = [
  {
    id: 1,
    title: "UBC Finance Portfolio Management",
    period: "Mar 2024 - Apr 2024",
    description: "Constructed an aggressive portfolio (Financials, Gold, Energy) to maximize Sharpe ratio. Ranked 5th place in the competition."
  },
  {
    id: 2,
    title: "National Investment Banking Competition",
    period: "Oct 2023 - Jan 2024",
    description: "Conducted DCF and Comps analysis for Diageo PLC. Created a comprehensive pitchbook and strategic business plan."
  },
  {
    id: 3,
    title: "NwPlus Hackathon - Budgeting Web App",
    period: "Nov 2023",
    description: "Built a React/Python budgeting tool for students in 12 hours. Implemented personalized expense weighting and AI-driven recommendations."
  },
  {
    id: 4,
    title: "UBC Environmental Policy Case Competition",
    period: "Nov 2023",
    description: "Secured 1st Prize finding the most sustainable energy avenue. Conducted detailed feasibility study forecasting cash outflows in Excel."
  },
  {
    id: 5,
    title: "Tradistics - B2B Platform",
    period: "Feb 2020 - Jun 2020",
    description: "Designed a pandemic-era local business trading platform. Received 'Best Prototype Solution' award at ICBMIS Global Conference."
  }
];

const skills = [
  {
    id: 1,
    category: "Certifications",
    items: ["CFA Level I (90th+ Percentile)", "Bloomberg Market Concepts"]
  },
  {
    id: 2,
    category: "Technical Skills",
    items: ["Excel (VBA, Macros, Pivot Tables)", "Power BI", "Python", "R-Studio", "SQL", "GenAI Workflows"]
  },
  {
    id: 3,
    category: "Core Competencies",
    items: ["Financial Analysis", "Underwriting", "Internal Audit", "Wealth Management", "Econometrics", "Machine Learning"]
  }
];

const courses = [
  { id: 1, code: "CPSC 103", title: "Introduction to Systematic Program Design", description: "Computation as a tool for systematic problem solving in non-computer-science disciplines. Computational thinking through program design.", specializations: ["CS"] },
  { id: 2, code: "CPSC 107", title: "Systematic Program Design", description: "Computation as a tool for systematic problem solving in non-computer-science disciplines. Introductory programming skills.", specializations: ["CS"] },
  { id: 3, code: "CPSC 203", title: "Programming, Problem Solving, and Algorithms", description: "Analysis of increasingly complex algorithmic problems using a modern programming language. Topics from applied algorithms.", specializations: ["CS"] },
  { id: 4, code: "CPSC 330", title: "Applied Machine Learning", description: "Application of machine learning tools with emphasis on solving practical problems. Data cleaning, feature extraction, supervised and unsupervised learning.", specializations: ["AI", "ML"] },
  { id: 5, code: "DSCI 100", title: "Introduction to Data Science", description: "Use of data science tools to summarize, visualize, and analyze data. Sensible workflows and approaches to generate insights.", specializations: ["Data"] },
  { id: 6, code: "STAT 201", title: "Statistical Inference for Data Science", description: "Classical and simulation-based techniques for estimation and hypothesis testing, including Central Limit Theorem and bootstrap.", specializations: ["STAT"] },
  { id: 7, code: "STAT 302", title: "Introduction to Probability", description: "Basic notions of probability, random variables, expectation and conditional expectation, discrete and continuous distributions.", specializations: ["STAT"] },
  { id: 8, code: "MATH 303", title: "Introduction to Stochastic Processes", description: "Stochastic processes including Markov chains, Poisson processes, continuous time Markov chains, renewal theory.", specializations: ["MATH"] },
  { id: 9, code: "STAT 305", title: "Introduction to Statistical Inference", description: "Review of probability theory. Sampling distribution theory, large sample theory, methods of estimation and hypothesis testing.", specializations: ["STAT"] },
  { id: 10, code: "STAT 344", title: "Sample Surveys", description: "Planning and practice of sample surveys. Random sampling, systematic, stratified, cluster, double, and sequential sampling.", specializations: ["STAT"] },
  { id: 11, code: "STAT 443", title: "Time Series and Forecasting", description: "Trend and seasonality, autocorrelation, stationarity, stochastic models including ARIMA, estimation and forecasting.", specializations: ["STAT"] },
  { id: 12, code: "ECON 301", title: "Intermediate Microeconomic Analysis I", description: "Theories of consumer and firm behavior. Competitive market equilibrium, monopoly, oligopoly, and welfare economics.", specializations: ["ECON"] },
  { id: 13, code: "ECON 302", title: "Intermediate Macroeconomic Analysis I", description: "National income accounting, business cycles, economic growth, money and inflation, monetary and fiscal policy.", specializations: ["ECON"] },
  { id: 14, code: "ECON 325", title: "Introduction to Empirical Economics", description: "Essentials of probability and statistics for applied economics. Estimation, hypothesis testing, and regression models.", specializations: ["ECON"] },
  { id: 15, code: "ECON 326", title: "Methods of Empirical Research in Economics", description: "Multiple regression analysis, causal inference, and identification strategies for economic research.", specializations: ["ECON"] },
  { id: 16, code: "ECON 425", title: "Advanced Econometrics", description: "Maximum likelihood estimation, generalized least squares, instrumental variables, panel data, and discrete choice models.", specializations: ["ECON"] },
  { id: 17, code: "MATH 200", title: "Calculus III", description: "Multivariable calculus: partial derivatives, multiple integrals, vector calculus, applications to optimization.", specializations: ["MATH"] },
  { id: 18, code: "MATH 220", title: "Mathematical Proof", description: "Sets and functions, induction, cardinality. Introduction to rigorous mathematical proof techniques.", specializations: ["MATH"] },
  { id: 19, code: "MATH 221", title: "Matrix Algebra", description: "Systems of linear equations, matrices, determinants, eigenvalues and eigenvectors, vector spaces and linear transformations.", specializations: ["MATH"] }
];

export function useExperiences() {
  return { data: experiences, isLoading: false, error: null };
}

export function useEducation() {
  return { data: education, isLoading: false, error: null };
}

export function useProjects() {
  return { data: projects, isLoading: false, error: null };
}

export function useSkills() {
  return { data: skills, isLoading: false, error: null };
}

export function useCourses() {
  return { data: courses, isLoading: false, error: null };
}
