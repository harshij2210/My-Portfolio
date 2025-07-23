import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react"
import styles from "./experience.module.css"

const experiences = [
  {
    title: "Frontend Development Intern",
    company: "Supersourcing",
    location: "Indore",
    period: "Jun 2025 – Present",
    type: "Full Time",
    achievements: [
      "Engineered 4+ responsive, pixel-perfect UIs for the EngineerBabu platform using React, JS, HTML, and CSS.",
      "Improved load performance and UX across devices, reducing bounce rate by 20%.",
      "Collaborated with a team of 3 developers via GitLab CI/CD, maintaining 100% peer-reviewed code quality.",
     "Participated in Agile ceremonies (sprint planning, daily standups) to ensure timely completion of 100% tasks.",
    ],
  },
  {
    title: "Full-Stack Developer, Placement Portal",
    company: "Institute of Engineering and Technology, DAVV",
    location: "Indore",
    period: "Feb 2025 – Present",
    type: "Part Time",
    achievements: [
      "Created job board module enabling 500+ students to seamlessly browse job listings, view job details, and apply through a streamlined confirmation workflow.",
      "Automated eligibility checks using Sequelize and MySQL, reducing manual checks by 80%.",
      "Designed SQL schemas and integrated Sequelize ORM for efficient database querying and model management.",
      "Led API design, requirement gathering, and database modeling within a team of 10 members , ensuring scalability and clean backend architecture.",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Work Experience</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={styles.experienceCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.jobDetails}>
                    <div className={styles.detail}>
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className={styles.detail}>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className={styles.detail}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <span className={styles.jobType}>{exp.type}</span>
              </div>

              <div className={styles.achievements}>
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className={styles.achievement}>
                    <CheckCircle size={16} className={styles.checkIcon} />
                    <p className={styles.achievementText}>{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
