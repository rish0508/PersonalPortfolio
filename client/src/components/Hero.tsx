import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Lottie from "lottie-react";
import heroAnimation from "@/assets/hero-animation.json";
import profileImg from "@/assets/profile.png";

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
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[128px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 leading-tight"
          >
            Rishabh <br />
            <span className="text-gradient">Mathur</span>
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
              className="px-8 py-4 rounded-xl bg-white text-black font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
            >
              Explore My Work <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/src/assets/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[530px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={profileImg} 
              alt="Rishabh Mathur" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-50 hidden lg:block">
            <Lottie
              animationData={heroAnimation}
              loop={true}
              autoplay={true}
              style={{ width: 300, height: 300 }}
            />
          </div>
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
