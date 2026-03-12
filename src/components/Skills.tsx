"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/portfolioData";

const skillCategories = [
  {
    name: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "REST APIs", "MySQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Frontend",
    skills: ["React.js", "Redux Toolkit", "TypeScript"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "DevOps & Cloud",
    skills: ["AWS S3", "Docker", "Performance Optimization"],
    color: "from-emerald-500 to-lime-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
      </motion.div>

      {/* Simple Skills Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {DATA.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="skill-tag"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Skill Categories */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            whileHover={{ y: -5 }}
            className="card"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
              <span className="text-white font-bold text-lg">
                {category.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-main">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 rounded-lg bg-[color:var(--surface-elevated)] text-sm text-muted hover:text-main hover:bg-[color:var(--accent-soft)] transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
}
