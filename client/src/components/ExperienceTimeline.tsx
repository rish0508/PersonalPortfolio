import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { useExperiences } from "@/hooks/use-portfolio";
import { Experience } from "@shared/schema";

import cibcImg from "@assets/stock_images/cibc_new.png";
import scotiaImg from "@assets/stock_images/scotia_new.png";
import creditSuisseImg from "@assets/stock_images/credit_suisse.png";
import ubcImg from "@assets/stock_images/ubc_campus.png";
import golfImg from "@assets/stock_images/shaughnessy_golf.png";

const companyImages: Record<string, string> = {
  "CIBC": cibcImg,
  "Scotia Wealth Management": scotiaImg,
  "Credit Suisse": creditSuisseImg,
  "University of British Columbia": ubcImg,
  "Shaughnessy Golf & Country Club": golfImg,
};

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
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-16">
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
  const companyImage = companyImages[experience.company];

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <div className="flex-1 w-full md:w-1/2 p-4" data-testid={`experience-card-${index}`}>
        <div className={`bg-zinc-900/80 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors duration-300 ${isLeft ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "md:items-start"}`}>
            <span className="text-white/60 text-sm font-bold tracking-wider uppercase">
               {experience.period}
            </span>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <div className="text-lg text-white/90 font-medium">{experience.company}</div>
            <div className="text-sm text-white/40 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {experience.location}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-background transform -translate-x-[9px] md:-translate-x-1/2 mt-6 md:mt-0 z-10" />

      {/* Image Side */}
      <div className="hidden md:flex flex-1 w-1/2 p-4 justify-center" data-testid={`experience-image-container-${index}`}>
        {companyImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 shadow-lg"
          >
            <img 
              src={companyImage} 
              alt={experience.company}
              className="w-full h-56 object-cover object-center"
              data-testid={`img-company-${index}`}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
