import { motion } from "framer-motion";
import { Project } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="h-full glass-card rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-primary/30">
        <div className="flex justify-between items-start mb-4">
          <div className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-primary/80 border border-white/5">
            {project.period}
          </div>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
          {/* Example tag - would ideally come from DB */}
          <span className="text-xs font-medium text-indigo-300">Analysis</span>
          <span className="text-xs font-medium text-indigo-300">•</span>
          <span className="text-xs font-medium text-indigo-300">Finance</span>
        </div>
      </div>
    </motion.div>
  );
}
