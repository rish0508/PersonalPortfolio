import { z } from 'zod';
import { insertExperienceSchema, insertEducationSchema, insertProjectSchema, insertSkillSchema, experiences, education, projects, skills } from './schema';

export const api = {
  experiences: {
    list: {
      method: 'GET' as const,
      path: '/api/experiences',
      responses: {
        200: z.array(z.custom<typeof experiences.$inferSelect>()),
      },
    },
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(z.custom<typeof education.$inferSelect>()),
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    },
  },
};
