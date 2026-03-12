"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Sparkles } from "lucide-react";
import { DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="section section-compact soft-panel mx-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4" />
          Academic Journey
        </span>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle section-subtitle-compact">
          My academic background and qualifications
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/40 to-transparent" />
        {DATA.education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            className="relative md:pl-16 mb-5 last:mb-0"
          >
            <div className="hidden md:flex absolute left-0 top-6 w-14 h-14 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--panel-border)] items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>

            <div className="card p-0 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-main leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-muted mt-2 leading-relaxed">
                      {edu.school}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold whitespace-nowrap self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-elevated)] border border-[color:var(--panel-border)] text-soft text-xs sm:text-sm">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    Degree Program
                  </span>
                  {edu.location && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--surface-elevated)] border border-[color:var(--panel-border)] text-soft text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
