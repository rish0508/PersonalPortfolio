import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { useProjects, useSkills, useEducation, useCourses } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Home() {
  const { data: projects } = useProjects();
  const { data: skills } = useSkills();
  const { data: education } = useEducation();
  const { data: courses } = useCourses();

  return (
    <div className="bg-black min-h-screen selection:bg-white/30 text-white overflow-x-hidden relative">
      {/* Shooting Stars Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100, y: -100 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [Math.random() * 1000, Math.random() * 1000 + 500],
              y: [Math.random() * 1000, Math.random() * 1000 + 500]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "rotate(45deg)"
            }}
          >
            <div className="absolute w-20 h-[1px] bg-gradient-to-r from-white to-transparent origin-left" />
          </motion.div>
        ))}
      </div>

      <Navigation />
      
      <div className="relative z-10">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="About Me" />
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  For me, 2025 was less about ticking boxes and more about asking better questions. 
                  I immersed myself in finance not just as a career path, but as a lens to understand the world.
                </p>
                <p>
                  Currently pursuing a double major in Economics and Statistics at UBC, I've had the privilege 
                  of applying my analytical skills at top institutions like <span className="text-white font-medium">CIBC</span> and <span className="text-white font-medium">Scotia Wealth Management</span>.
                </p>
                <p>
                  I thrive at the intersection of quantitative analysis and strategic thinking. Whether it's 
                  building financial models or leading student organizations, I bring a data-driven approach 
                  tempered with a human perspective.
                </p>
              </div>
            </div>
            <div className="space-y-8">
               {/* Education Card */}
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-1" />
                 <div className="relative glass-card p-8 rounded-3xl border border-white/10">
                   <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <GraduationCap className="text-primary" /> Education
                   </h3>
                   <div className="space-y-6">
                     {education?.map((edu, idx) => (
                       <div key={idx} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                         <div className="flex justify-between items-start mb-1">
                           <h4 className="text-white font-bold">{edu.school}</h4>
                           <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                         </div>
                         <p className="text-primary text-sm font-medium mb-2">{edu.degree}</p>
                         {edu.details && <p className="text-sm text-muted-foreground">{edu.details}</p>}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Courses Section */}
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-3xl transform -rotate-1" />
                 <div className="relative glass-card p-8 rounded-3xl border border-white/10">
                   <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <BookOpen className="text-primary" /> Featured Courses
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {courses?.map((course, idx) => (
                       <motion.div 
                         key={idx}
                         whileHover={{ y: -5 }}
                         className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors"
                       >
                         <h4 className="text-white font-bold text-sm mb-1">{course.code}</h4>
                         <p className="text-xs text-muted-foreground line-clamp-2">{course.title}</p>
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-black/40">
          <div className="container mx-auto px-6">
            <SectionHeading title="Experience" subtitle="My professional journey through finance and leadership." align="center" />
            <ExperienceTimeline />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 container mx-auto px-6">
          <SectionHeading title="Selected Projects" subtitle="Competitions and analyses that sharpened my skills." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-black/40">
          <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading title="Technical Arsenal" align="center" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills?.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/5"
                >
                  <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-primary pl-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <SkillBadge key={itemIdx} name={item} index={itemIdx} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 bg-background/50 backdrop-blur-md">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold font-display text-white mb-1">Rishabh Mathur</h4>
              <p className="text-muted-foreground text-sm">Finance & Statistics @ UBC</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/rishabhmathur0508/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:contact@rishabhmathur.com" className="text-muted-foreground hover:text-white transition-colors">Email</a>
              <a href="/resume.pdf" target="_blank" className="text-muted-foreground hover:text-white transition-colors">Resume</a>
            </div>
            
            <div className="text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Rishabh Mathur.<br />All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
