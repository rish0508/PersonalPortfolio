import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all cursor-default shadow-sm"
    >
      {name}
    </motion.div>
  );
}
