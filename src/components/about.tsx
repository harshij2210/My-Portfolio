import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, MapPin, GraduationCap, Briefcase, Phone,Star } from "lucide-react"
import styles from "./about.module.css"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.summary}
          >
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Professional Summary</h3>
              <div className={styles.cardContent}>
             <ul className={styles.summaryList}>
  <li>
    Computer Engineering student at the Institute of Engineering and Technology, DAVV with a CGPA of 9.02/10.00 and a passion for full-stack web development.
  </li>
  <li>
    Hands-on experience building performant, responsive, and modern web applications using the latest frontend and backend technologies.
  </li>
  <li>
    Currently working as a Frontend Development Intern at Supersourcing — developed 4+ pixel-perfect UIs and optimized loading performance across devices.
  </li>
  <li>
    Contributing as a Full-Stack Developer for our college's Placement Portal, building scalable backend services and intuitive user interfaces.
  </li>
  <li>
    Achieved 6th place among 100+ teams at HackTU 6.0 Hackathon, showcasing skills in rapid problem solving, UI design, and team collaboration under pressure.
  </li>
  <li>
    Strong problem-solving mindset with a focus on writing clean, maintainable code and delivering real-world impact through technology.
  </li>
  <li>
    Eager to continue growing as a developer by learning new tools, building meaningful projects, and collaborating on innovative solutions.
  </li>
</ul>



              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.sidebar}
          >
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <User className={styles.icon} size={20} />
                Personal Info
              </h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    <MapPin size={16} />
                    Location
                  </span>
                  <span className={styles.infoValue}>Seoni, India</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    <GraduationCap size={16} />
                    Education
                  </span>
                  <span className={styles.infoValue}>B.E. CSE</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    <Star size={16} />
                    CGPA</span>
                  <span className={styles.cgpa}>9.02/10.00</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    <Briefcase size={16} />
                    Experience
                  </span>
                  <span className={styles.infoValue}>Full-Stack Dev</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    <Phone size={16} />
                    Phone
                  </span>
                  <span className={styles.infoValue}>+91-6260397014</span>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Interests</h3>
              <div className={styles.interests}>
                <span className={styles.interest}>Software Engineering</span>
                <span className={styles.interest}>Web Development</span>
                <span className={styles.interest}>DSA</span>
                <span className={styles.interest}>Problem Solving</span>
                <span className={styles.interest}>Open Source</span>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
