import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Settings, Wrench } from "lucide-react"
import styles from "./skills.module.css"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "C++", "JavaScript"],
    icon: <Code className={styles.skillIcon} />,
    gradient: "redPink",
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "HTML5", "CSS3", "EJS", "Bootstrap" , "Next.js"],
    icon: <Globe className={styles.skillIcon} />,
    gradient: "blueCyan",
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "REST APIs", "Sequelize ORM"],
    icon: <Settings className={styles.skillIcon} />,
    gradient: "greenEmerald",
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "Mongoose", "MySQL"],
    icon: <Database className={styles.skillIcon} />,
    gradient: "purpleViolet",
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "GitLab", "Postman", "Swagger", "Notion", "Figma"],
    icon: <Wrench className={styles.skillIcon} />,
    gradient: "yellowOrange",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Technical Skills</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.skillCard}
            >
              <div className={`${styles.iconContainer} ${styles[category.gradient]}`}>{category.icon}</div>
              <h3 className={styles.skillTitle}>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.courseworkCard}
        >
          <h3 className={styles.courseworkTitle}>Relevant Coursework</h3>
          <div className={styles.courseworkGrid}>
            {[
              "Object Oriented Programming",
              "Database Management Systems",
              "Data Structures and Algorithms",
              "Operating System",
              "Web Technologies",
              "Software Engineering",
              "Computer Networks",
            ].map((course) => (
              <div key={course} className={styles.courseItem}>
                <div className={styles.courseBullet}></div>
                <span className={styles.courseText}>{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
