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
            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-white/10">
              <SectionHeading title="About Me" />
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>Economics and Statistics student at UBC with a minor in Data Science. CFA Level I passed. Passionate about the intersection of finance, data, and technology.</p>
                <p>I explore how technology can streamline processes and shape the future of financial services, working with Python, SQL, Power BI, and modern AI workflows.</p>
              </div>
            </div>
            <div className="space-y-8">
               {/* Education Card */}
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl transform rotate-1" />
                 <div className="relative bg-zinc-900/80 p-8 rounded-3xl border border-white/10">
                   <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <GraduationCap className="text-white" /> Education
                   </h3>
                   <div className="space-y-6">
                     {education?.map((edu, idx) => (
                       <div key={idx} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                         <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                           <h4 className="text-white font-bold text-lg">{edu.school}</h4>
                           <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                         </div>
                         <p className="text-white/80 text-sm font-medium mb-2">{edu.degree}</p>
                         {edu.details && <p className="text-sm text-muted-foreground">{edu.details}</p>}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-gradient-to-b from-zinc-900/50 to-black">
          <div className="container mx-auto px-6">
            <SectionHeading title="Experience" subtitle="Professional journey through top-tier financial institutions." align="center" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I've gained hands-on experience at major financial institutions including CIBC and Scotia Wealth Management, building a strong foundation in financial analysis, controls, and client decision-making across internal audit, private banking, underwriting, and risk management.
              </p>
            </motion.div>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 container mx-auto px-6">
          <SectionHeading title="Selected Projects" subtitle="Competitions and analyses that sharpened my skills." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 bg-gradient-to-b from-black to-zinc-900/50">
          <div className="container mx-auto px-6">
            <SectionHeading title="Featured Courses" subtitle="UBC coursework spanning Computer Science, Economics, Statistics, and Data Science." align="center" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses?.map((course, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ y: -3 }}
                  className="bg-zinc-900/80 p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-bold text-base">{course.code}</h4>
                    <div className="flex gap-1">
                      {course.specializations.map((spec: string, sIdx: number) => (
                        <span key={sIdx} className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70 uppercase tracking-wide">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-white/90 font-medium mb-2">{course.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-black">
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
                  className="bg-zinc-900/80 p-6 rounded-2xl border border-white/10"
                >
                  <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-white pl-4">
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
        <footer className="py-12 border-t border-white/5 bg-black">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold font-display text-white mb-1">Rishabh Mathur</h4>
              <p className="text-muted-foreground text-sm">Finance & Statistics @ UBC</p>
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/rishabhmathur0508/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:rish05@student.ubc.ca" className="text-muted-foreground hover:text-white transition-colors">Email</a>
            </div>
            
            <div className="text-xs text-muted-foreground text-center md:text-right">
              {new Date().getFullYear()} Rishabh Mathur. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
