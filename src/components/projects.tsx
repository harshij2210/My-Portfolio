"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Globe, Star } from "lucide-react"
import styles from "./projects.module.css"

const projects = [
  {
    title: "URL Shortener",
    description:
      "A full-stack URL shortener application with JWT authentication, URL analytics, and real-time click tracking. Built with the MERN stack and deployed on cloud platforms.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Nanoid", "JWT"],
    features: [
      "JWT-based authentication system",
      "URL analytics and click tracking",
      "Responsive React UI",
      "REST API integration",
      "MongoDB database integration",
      "Environment-based configuration",
      "Cloud deployment (Render & Vercel)",
    ],
    githubLink: "https://github.com/harshij2210/URL-Shortener.git",
    liveLink: "https://urls-linkshort.vercel.app",
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={styles.projectCard}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectInfo}>
                  <div className={styles.iconContainer}>
                    <Globe className={styles.projectIcon} />
                  </div>
                  <div>
                    <h3 className={styles.projectTitle}>
                      {project.title}
                      {project.featured && <Star className={styles.starIcon} size={20} />}
                    </h3>
                  </div>
                </div>
                <div className={styles.projectLinks}>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.linkButton}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.primaryButton}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.technologiesSection}>
                <h4 className={styles.sectionTitle}>Technologies Used</h4>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.featuresSection}>
                <h4 className={styles.sectionTitle}>Key Features</h4>
                <div className={styles.features}>
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.feature}>
                      <div className={styles.featureBullet}></div>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
