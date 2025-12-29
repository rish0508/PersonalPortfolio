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
      <div className="h-full bg-zinc-900/80 rounded-2xl p-8 flex flex-col border-2 border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-start mb-6">
          <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-mono text-white border border-white/20">
            {project.period}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-base leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 rounded-full border border-white/10">Analysis</span>
          <span className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 rounded-full border border-white/10">Finance</span>
        </div>
      </div>
    </motion.div>
  );
}
