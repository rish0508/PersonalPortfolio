import { db } from "./db";
import {
  experiences, education, projects, skills, courses,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Course, type InsertCourse
} from "@shared/schema";

export interface IStorage {
  getExperiences(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getCourses(): Promise<Course[]>;
  
  createExperience(data: InsertExperience): Promise<Experience>;
  createEducation(data: InsertEducation): Promise<Education>;
  createProject(data: InsertProject): Promise<Project>;
  createSkill(data: InsertSkill): Promise<Skill>;
  createCourse(data: InsertCourse): Promise<Course>;
}

export class DatabaseStorage implements IStorage {
  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.id);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async createExperience(data: InsertExperience): Promise<Experience> {
    const [newItem] = await db.insert(experiences).values(data).returning();
    return newItem;
  }

  async createEducation(data: InsertEducation): Promise<Education> {
    const [newItem] = await db.insert(education).values(data).returning();
    return newItem;
  }

  async createProject(data: InsertProject): Promise<Project> {
    const [newItem] = await db.insert(projects).values(data).returning();
    return newItem;
  }

  async createSkill(data: InsertSkill): Promise<Skill> {
    const [newItem] = await db.insert(skills).values(data).returning();
    return newItem;
  }

  async createCourse(data: InsertCourse): Promise<Course> {
    const [newItem] = await db.insert(courses).values(data).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
