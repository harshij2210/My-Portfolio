"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin, Trophy } from "lucide-react"
import styles from "./education.module.css"

const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Institute of Engineering and Technology, DAVV",
    period: "Oct 2022 – May 2026",
    cgpa: "9.02/10.00",
    location: "Indore",
    current: true,
  },
  {
    degree: "Senior Secondary School",
    institution: "Higher Secondary Education",
    period: "Apr 2021",
    cgpa: "91.6%",
    location: "Seoni",
    current: false,
  },
  {
    degree: "Higher Secondary School",
    institution: "Secondary Education",
    period: "Mar 2019",
    cgpa: "92.8%",
    location: "Seoni",
    current: false,
  },
]

const certifications = [
  {
    title: "JAVA Programming",
    issuer: "Tutedude",
    type: "Programming",
    link:"https://drive.google.com/file/d/1tLTotge2oQrXNnbt2CMq3wtoRqP3aHJl/view?usp=drivesdk",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    type: "Database",
    link:"https://www.hackerrank.com/certificates/iframe/2077d0f3f4ae",
  },
  {
    title: "Mastercard Cybersecurity Job Simulation",
    issuer: "Forage",
    type: "Learning",
    link:"https://drive.google.com/file/d/1Bi2T327mrqkwdiJ8OBGBffyh6FrDVuBE/view?usp=drivesdk",
  },
  {
    title: "HackTU 6.0 Hackathon - 6th Place",
    issuer: "Certificate of Achievement (100+ teams)",
    type: "Competition",
    link:"https://drive.google.com/file/d/1TFGIKzX82izj7B7yfNex6ypxpSOZc30-/view?usp=drivesdk",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Education & Certifications</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.content}>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.section}
          >
            <h3 className={styles.sectionTitle}>
              <GraduationCap className={styles.sectionIcon} />
              Education
            </h3>
            <div className={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <div className={styles.educationHeader}>
                    <h4 className={styles.degree}>{edu.degree}</h4>
                    <div className={styles.badges}>
                      {edu.current && <span className={styles.currentBadge}>Current</span>}
                      <span className={styles.cgpaBadge}>{edu.cgpa}</span>
                    </div>
                  </div>
                  <p className={styles.institution}>{edu.institution}</p>
                  <div className={styles.educationDetails}>
                    <div className={styles.detail}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className={styles.detail}>
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.section}
          >
            <h3 className={styles.sectionTitle}>
              <Award className={styles.sectionIcon} />
              Certifications
            </h3>
            <div className={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <motion.div key={index} whileHover={{ scale: 1.02 }} className={styles.certificationCard}>
                  <div className={styles.certificationContent}>
                    <div className={styles.certificationInfo}>
                      <h4 className={styles.certificationTitle}>
                       <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
    {cert.title}
  </a>
                        {cert.title.includes("6th Place") && <Trophy className={styles.trophyIcon} size={16} />}
                      </h4>
                      <p className={styles.issuer}>{cert.issuer}</p>
                    </div>
                    <span className={styles.typeBadge}>{cert.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
