import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existingExp = await storage.getExperiences();
  if (existingExp.length === 0) {
    // Experiences
    await storage.createExperience({
      title: "Summer Analyst - Internal Audit (Wealth & Data Analytics)",
      company: "CIBC",
      period: "May 2025 - Aug 2025",
      location: "Toronto, ON",
      description: "Evaluated 20+ investment products against manuals using Excel/Morningstar. Mitigated SOX risks for 1,200+ employees and designed AI prompts generating 300+ annual efficiency hours."
    });
    await storage.createExperience({
      title: "Fall Analyst - Private Banking",
      company: "Scotia Wealth Management",
      period: "Sep 2024 - Dec 2024",
      location: "Vancouver, BC",
      description: "Processed 1,000+ transactions and synthesized briefs for HNW clients. Conducted KYC/AML compliance reviews and calculated NAVs for credit adjudication."
    });
    await storage.createExperience({
      title: "Winter Analyst - Tax Administration",
      company: "Scotia Wealth Management",
      period: "Jan 2024 - Apr 2024",
      location: "Vancouver, BC",
      description: "Reconciled 50+ T1 and 40+ T3 tax returns for HNW clients. Automated tax-fee calculations via Excel scripts, significantly reducing manual data entry."
    });
    await storage.createExperience({
      title: "Summer Analyst - Private Banking",
      company: "Credit Suisse",
      period: "Jul 2022 - Aug 2022",
      location: "Dubai, UAE",
      description: "Leveraged Bloomberg and CapIQ for investment strategy research and valuation. Delivered client stock pitches and modeled cash flows for portfolio decisions."
    });

    // Education with Data Science minor
    await storage.createEducation({
      school: "University of British Columbia",
      degree: "B.A. Economics & Statistics (Double Major), Minor in Data Science",
      period: "Sep 2021 - Apr 2026",
      details: "GPA: 3.75 | CFA Level I Passed (90th+ Percentile) | CIBC Exceptional Student Program"
    });
    await storage.createEducation({
      school: "Delhi Private School, Sharjah",
      degree: "High School Diploma",
      period: "Apr 2007 - May 2021",
      details: "Grade: 97.6% | Vice Head Boy | Business, Economics, Accountancy, Mathematics"
    });

    // Projects
    await storage.createProject({
      title: "UBC Finance Portfolio Management",
      period: "Mar 2024 - Apr 2024",
      description: "Constructed an aggressive portfolio (Financials, Gold, Energy) to maximize Sharpe ratio. Ranked 5th place in the competition."
    });
    await storage.createProject({
      title: "National Investment Banking Competition",
      period: "Oct 2023 - Jan 2024",
      description: "Conducted DCF and Comps analysis for Diageo PLC. Created a comprehensive pitchbook and strategic business plan."
    });
    await storage.createProject({
      title: "NwPlus Hackathon - Budgeting Web App",
      period: "Nov 2023",
      description: "Built a React/Python budgeting tool for students in 12 hours. Implemented personalized expense weighting and AI-driven recommendations."
    });
    await storage.createProject({
      title: "UBC Environmental Policy Case Competition",
      period: "Nov 2023",
      description: "Secured 1st Prize finding the most sustainable energy avenue. Conducted detailed feasibility study forecasting cash outflows in Excel."
    });
    await storage.createProject({
      title: "Tradistics - B2B Platform",
      period: "Feb 2020 - Jun 2020",
      description: "Designed a pandemic-era local business trading platform. Received 'Best Prototype Solution' award at ICBMIS Global Conference."
    });

    // Skills
    await storage.createSkill({
      category: "Certifications",
      items: ["CFA Level I (90th+ Percentile)", "Bloomberg Market Concepts"]
    });
    await storage.createSkill({
      category: "Technical Skills",
      items: ["Excel (VBA, Macros, Pivot Tables)", "Power BI", "Python", "R-Studio", "SQL", "GenAI Workflows"]
    });
    await storage.createSkill({
      category: "Core Competencies",
      items: ["Financial Analysis", "Underwriting", "Internal Audit", "Wealth Management", "Econometrics", "Machine Learning"]
    });

    // All 19 UBC Courses with official descriptions
    const coursesToCreate = [
      { code: "CPSC 103", title: "Introduction to Systematic Program Design", description: "Computation as a tool for systematic problem solving in non-computer-science disciplines. Computational thinking through program design.", specializations: ["CS"] },
      { code: "CPSC 107", title: "Systematic Program Design", description: "Computation as a tool for systematic problem solving in non-computer-science disciplines. Introductory programming skills.", specializations: ["CS"] },
      { code: "CPSC 203", title: "Programming, Problem Solving, and Algorithms", description: "Analysis of increasingly complex algorithmic problems using a modern programming language. Topics from applied algorithms.", specializations: ["CS"] },
      { code: "CPSC 330", title: "Applied Machine Learning", description: "Application of machine learning tools with emphasis on solving practical problems. Data cleaning, feature extraction, supervised and unsupervised learning.", specializations: ["AI", "ML"] },
      { code: "DSCI 100", title: "Introduction to Data Science", description: "Use of data science tools to summarize, visualize, and analyze data. Sensible workflows and approaches to generate insights.", specializations: ["Data"] },
      { code: "STAT 201", title: "Statistical Inference for Data Science", description: "Classical and simulation-based techniques for estimation and hypothesis testing, including Central Limit Theorem and bootstrap.", specializations: ["STAT"] },
      { code: "STAT 302", title: "Introduction to Probability", description: "Basic notions of probability, random variables, expectation and conditional expectation, discrete and continuous distributions.", specializations: ["STAT"] },
      { code: "MATH 303", title: "Introduction to Stochastic Processes", description: "Stochastic processes including Markov chains, Poisson processes, continuous time Markov chains, renewal theory.", specializations: ["MATH"] },
      { code: "STAT 305", title: "Introduction to Statistical Inference", description: "Review of probability theory. Sampling distribution theory, large sample theory, methods of estimation and hypothesis testing.", specializations: ["STAT"] },
      { code: "STAT 344", title: "Sample Surveys", description: "Planning and practice of sample surveys. Random sampling, systematic, stratified, cluster, double, and sequential sampling.", specializations: ["STAT"] },
      { code: "STAT 443", title: "Time Series and Forecasting", description: "Trend and seasonality, autocorrelation, stationarity, stochastic models including ARIMA, estimation and forecasting.", specializations: ["STAT"] },
      { code: "ECON 301", title: "Intermediate Microeconomic Analysis I", description: "Theories of consumer and firm behavior. Competitive market equilibrium, monopoly, oligopoly, and welfare economics.", specializations: ["ECON"] },
      { code: "ECON 302", title: "Intermediate Macroeconomic Analysis I", description: "National income accounting, business cycles, economic growth, money and inflation, monetary and fiscal policy.", specializations: ["ECON"] },
      { code: "ECON 325", title: "Introduction to Empirical Economics", description: "Essentials of probability and statistics for applied economics. Estimation, hypothesis testing, and regression models.", specializations: ["ECON"] },
      { code: "ECON 326", title: "Methods of Empirical Research in Economics", description: "Multiple regression analysis, causal inference, and identification strategies for economic research.", specializations: ["ECON"] },
      { code: "ECON 425", title: "Advanced Econometrics", description: "Maximum likelihood estimation, generalized least squares, instrumental variables, panel data, and discrete choice models.", specializations: ["ECON"] },
      { code: "MATH 200", title: "Calculus III", description: "Multivariable calculus: partial derivatives, multiple integrals, vector calculus, applications to optimization.", specializations: ["MATH"] },
      { code: "MATH 220", title: "Mathematical Proof", description: "Sets and functions, induction, cardinality. Introduction to rigorous mathematical proof techniques.", specializations: ["MATH"] },
      { code: "MATH 221", title: "Matrix Algebra", description: "Systems of linear equations, matrices, determinants, eigenvalues and eigenvectors, vector spaces and linear transformations.", specializations: ["MATH"] }
    ];

    for (const course of coursesToCreate) {
      await storage.createCourse(course);
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await seedDatabase();

  app.get(api.experiences.list.path, async (_req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  app.get(api.education.list.path, async (_req, res) => {
    const data = await storage.getEducation();
    res.json(data);
  });

  app.get(api.projects.list.path, async (_req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.get(api.skills.list.path, async (_req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.courses.list.path, async (_req, res) => {
    const data = await storage.getCourses();
    res.json(data);
  });

  return httpServer;
}
