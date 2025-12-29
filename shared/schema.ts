import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  location: text("location"),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  school: text("school").notNull(),
  degree: text("degree").notNull(),
  period: text("period").notNull(),
  details: text("details"),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  period: text("period"),
  description: text("description").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  items: jsonb("items").$type<string[]>().notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  specializations: jsonb("specializations").$type<string[]>().notNull(),
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });
export const insertEducationSchema = createInsertSchema(education).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });

export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
