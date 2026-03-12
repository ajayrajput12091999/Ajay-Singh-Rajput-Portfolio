"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--panel-bg)] border-t border-[color:var(--panel-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">
              {DATA.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {DATA.role}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-main mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-main mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {DATA.socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.platform === "github" && <Github className="w-5 h-5" />}
                  {social.platform === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {social.platform === "gmail" && <Mail className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[color:var(--panel-border)] my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-soft">
            © {currentYear} {DATA.name}. All rights reserved.
          </p>
          <p className="text-sm text-soft flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
