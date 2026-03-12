"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { DATA } from "@/data/portfolioData";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajaysingh2017rajput@gmail.com",
      href: "mailto:ajaysingh2017rajput@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6263131796",
      href: "tel:+916263131796",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View LinkedIn Profile",
      href: DATA.socialLinks.find((s) => s.platform === "linkedin")?.url || "#",
    },
  ];

  return (
    <section id="contact" className="section soft-panel mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          You can reach me directly via email, phone, or social profiles below.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-main mb-6">
            Let&apos;s connect
          </h3>
          <p className="text-muted mb-8 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[color:var(--surface)] border border-[color:var(--panel-border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-soft">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-main font-medium hover:text-primary transition-colors"
                    >
                      {info.label === "Email"
                        ? "Send Email"
                        : info.label === "Phone"
                        ? "Call"
                        : info.value}
                    </a>
                  ) : (
                    <p className="text-main font-medium">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          {/* <div>
            <p className="text-sm text-soft mb-4">
              Follow me on
            </p>
            <div className="flex gap-4">
              {DATA.socialLinks.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="social-icon"
                >
                  {social.platform === "github" && <Github className="w-5 h-5" />}
                  {social.platform === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {social.platform === "gmail" && <Mail className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
