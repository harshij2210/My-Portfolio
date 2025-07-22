"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import styles from "./contact.module.css"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className={styles.contactInfo}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Contact Information</h3>

              <div className={styles.contactList}>
                <motion.a
                  href="mailto:harshij2210@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className={styles.contactItem}
                >
                  <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                    <Mail className={styles.icon} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>harshij2210@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a href="tel:+916260397014" whileHover={{ scale: 1.02 }} className={styles.contactItem}>
                  <div className={`${styles.contactIcon} ${styles.phoneIcon}`}>
                    <Phone className={styles.icon} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Phone</p>
                    <p className={styles.contactValue}>+91-6260397014</p>
                  </div>
                </motion.a>

                <div className={styles.contactItem}>
                  <div className={`${styles.contactIcon} ${styles.locationIcon}`}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Location</p>
                    <p className={styles.contactValue}>Seoni, India</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinks}>
                  <motion.a
                    href="https://github.com/harshij2210"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.socialLink}
                  >
                    <Github className={styles.socialIcon} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/harshijain22"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.socialLink}
                  >
                    <Linkedin className={styles.socialIcon} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.footer}
        >
          <p className={styles.footerText}>Harshi Jain @2025 Portfolio</p>
        </motion.div>
      </div>
    </section>
  )
}
