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
      title: "Winter Analyst – Tax Administration",
      company: "Scotia Wealth Management",
      period: "Jan 2024 - Apr 2024",
      location: "Vancouver, BC",
      description: "Reconciled 50+ T1 and 40+ T3 tax returns for HNW clients. Automated tax-fee calculations via Excel scripts, significantly reducing manual data entry."
    });
    await storage.createExperience({
      title: "Summer Analyst",
      company: "Credit Suisse",
      period: "Jul 2022 - Aug 2022",
      location: "Dubai, UAE",
      description: "Leveraged Bloomberg and CapIQ for investment strategy research and valuation. Delivered client stock pitches and modeled cash flows for portfolio decisions."
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
      title: "Tradistics - B2B Platform",
      period: "Feb 2020 - Jun 2020",
      description: "Designed a pandemic-era local business trading platform. Received 'Best Prototype Solution' award at ICBMIS Global Conference."
    });

    // Courses
    const coursesToCreate = [
      { code: "CPSC 103", title: "Introduction to Systematic Program Design", description: "Learning to design programs that are correct, easy to read, and easy to maintain using systematic techniques.", specializations: ["CS", "Design"] },
      { code: "ECON 325", title: "Introduction to Empirical Economics", description: "Essentials of probability and statistics for economics, including hypothesis testing and regression models.", specializations: ["ECON", "Data"] },
      { code: "STAT 302", title: "Introduction to Probability", description: "Foundational concepts of probability, random variables, and limit theorems with mathematical rigor.", specializations: ["STAT", "Theory"] },
      { code: "CPSC 330", title: "Applied Machine Learning", description: "Practical ML tools emphasizing solving real-world problems with data cleaning and supervised learning.", specializations: ["AI", "Data Science"] },
      { code: "ECON 326", title: "Introduction to Econometrics II", description: "Advanced statistical inference focusing on identification and causal inference in economic research data.", specializations: ["ECON", "Econometrics"] },
      { code: "STAT 443", title: "Time Series and Forecasting", description: "Analysis of time-dependent data and forecasting models like ARIMA for predictive insights.", specializations: ["STAT", "Forecasting"] },
      { code: "MATH 221", title: "Matrix Algebra", description: "Linear systems, eigenvalues, and vector spaces essential for quantitative finance and statistics.", specializations: ["MATH", "Linear Algebra"] },
      { code: "DSCI 100", title: "Introduction to Data Science", description: "Exploring data through visualization and statistical inference using modern computational tools.", specializations: ["Data Science", "R"] }
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
