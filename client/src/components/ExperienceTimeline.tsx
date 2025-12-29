import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useExperiences } from "@/hooks/use-portfolio";
import { Experience } from "@shared/schema";

export default function ExperienceTimeline() {
  const { data: experiences, isLoading } = useExperiences();
  const ref = useRef<HTMLDivElement>(null);
  
  if (isLoading) {
    return <div className="text-center py-20 text-muted-foreground">Loading experience data...</div>;
  }

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="relative py-20 overflow-hidden">
      {/* Center Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index} 
            experience={exp} 
            isLeft={index % 2 === 0} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ experience, isLeft, index }: { experience: Experience; isLeft: boolean; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <div className="flex-1 w-full md:w-1/2 p-4">
        <div className={`glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 ${isLeft ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "md:items-start"}`}>
            <span className="text-primary text-sm font-bold tracking-wider uppercase flex items-center gap-2">
               {experience.period}
            </span>
            <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
            <div className="text-lg text-indigo-300 font-medium">{experience.company}</div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {experience.location}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(59,130,246,0.5)] transform -translate-x-[9px] md:-translate-x-1/2 mt-6 md:mt-0 z-10" />

      {/* Empty Side for Layout Balance */}
      <div className="hidden md:block flex-1 w-1/2" />
    </motion.div>
  );
}
