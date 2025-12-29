import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existingExp = await storage.getExperiences();
  if (existingExp.length === 0) {
    // Experiences
    await storage.createExperience({
      title: "Summer Analyst - Internal Audit (Wealth Management & Data Analytics)",
      company: "CIBC",
      period: "May 2025 - Aug 2025",
      location: "Toronto, Ontario",
      description: "Analyzed application access rights for 1,200+ employees using Excel, PowerBI and IA Hub. Tested 20+ samples of Non-CIBC Product Exceptions. Developed structured prompts in CIBCAI to automate repetitive control testing."
    });
    await storage.createExperience({
      title: "Fall Analyst - Private Banking",
      company: "Scotia Wealth Management",
      period: "Sep 2024 - Dec 2024",
      location: "Vancouver, BC",
      description: "Analyzed and undertook financial transactions for HNW clients. Assisted in due diligence by analyzing financial statements. Ensured compliance with KYC and AML regulations."
    });
    await storage.createExperience({
      title: "Winter Analyst - Wealth Management",
      company: "Scotia Wealth Management",
      period: "Jan 2024 - Apr 2024",
      location: "Vancouver, BC",
      description: "Wealth Management Analysis and support functions."
    });
    await storage.createExperience({
      title: "Events Director",
      company: "Vancouver School of Economics Undergraduate Society (VSEUS)",
      period: "Aug 2022 - May 2023",
      location: "Vancouver, BC",
      description: "Planned and executed 5+ events. Led lectures on personal finance. Served as ambassador for VSEUS at 10+ conferences."
    });

    // Education
    await storage.createEducation({
      school: "The University of British Columbia",
      degree: "Bachelor of Arts - Combined Majors in Economics and Statistics",
      period: "Jan 2021 - May 2026",
      details: "Grade: 3.75 GPA. Activities: VSEUS, UBC Finance Club, UBC Product Management, UBC Real Estate Club, UBC Wargamers."
    });
    await storage.createEducation({
      school: "Delhi Private School, Sharjah",
      degree: "High School Diploma",
      period: "Apr 2007 - May 2021",
      details: "Grade: 97.6%. Vice Head Boy. Subjects: Business, Economics, Accountancy, Mathematics, English, Arabic."
    });

    // Projects
    await storage.createProject({
      title: "UBC Finance Portfolio Management Competition",
      period: "Mar 2024 - Apr 2024",
      description: "Created a portfolio to achieve the highest Sharpe ratio. Aimed for an aggressive portfolio with higher weightage towards financials, gold, and energy. Placed 5th position."
    });
    await storage.createProject({
      title: "National Investment Banking Competition",
      period: "Dec 2023 - Jan 2024",
      description: "Participated in the National Investment Banking Competition."
    });

    // Skills
    await storage.createSkill({
      category: "Certifications",
      items: ["CFA Program Level 1 (Above 90th percentile)", "Bloomberg Market Concepts"]
    });
    await storage.createSkill({
      category: "Technical Skills",
      items: ["Excel (VLOOKUP, Macros, Pivot Tables)", "PowerBI", "Python (Applied Machine Learning)", "R (Statistical Modelling)", "Data Analysis"]
    });
    await storage.createSkill({
      category: "Core Competencies",
      items: ["Financial Analysis", "Equity Research", "Internal Audit", "Wealth Management", "Econometrics", "Time Series Analysis"]
    });
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

  return httpServer;
}
