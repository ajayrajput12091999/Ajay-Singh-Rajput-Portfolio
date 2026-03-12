"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  DATA,
  getDateRange,
  calculateDuration,
  calculateTotalExperience,
} from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section section-compact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle section-subtitle-compact">
          My professional journey and work history
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Total Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">
              Total Experience:{" "}
              <span className="gradient-text font-bold">
                {calculateTotalExperience(DATA.experience)}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Experience Cards – 2 columns, company/date then position/duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATA.experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="card hover:shadow-xl h-full flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Row 1: Company + From–To */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-main">
                    {exp.company}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap">
                    {getDateRange(exp.startDate, exp.endDate)}
                  </span>
                </div>

                {/* Row 2: Position + Duration */}
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-muted">
                    {exp.role}
                  </p>
                  <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium whitespace-nowrap">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </span>
                </div>

                {/* Row 3: Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
