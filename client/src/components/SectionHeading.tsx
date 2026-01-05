import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
          {title}
          <span className="text-white">.</span>
        </h2>
        {subtitle && (
          <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl font-light ${align === "center" ? "mx-auto" : "mx-auto md:mx-0"}`}>
            {subtitle}
          </p>
        )}
        <div 
          className={`h-1.5 w-24 bg-white mt-6 rounded-full ${align === "center" ? "mx-auto" : ""}`} 
        />
      </motion.div>
    </div>
  );
}
