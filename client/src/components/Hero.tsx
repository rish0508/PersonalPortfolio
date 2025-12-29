import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[128px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
              Available for Fall 2025 Opportunities
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 leading-tight"
          >
            Rishabh <br />
            <span className="text-gradient-primary">Mathur</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            CFA Level II Candidate | Ex-CIBC, Scotiabank <br />
            Double Major in Economics and Statistics @ UBC
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#experience"
              className="px-8 py-4 rounded-xl bg-primary text-background font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Explore My Work <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
