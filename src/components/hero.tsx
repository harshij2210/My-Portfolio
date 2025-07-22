import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h1 className={styles.title}>
            Harshi
            <span className={styles.gradientText}> Jain</span>
          </h1>
          <h2 className={styles.subtitle}>Let's connect and build something impactful together.
 </h2>
          <p className={styles.description}>
            Passionate about designing beautiful, functional web solutions. I’m a Computer Engineering student who loves to code, create, and contribute to meaningful projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.actions}
        >
          <div className={styles.socialLinks}>
            <motion.a
              href="mailto:harshij2210@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.socialLink}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/harshij2210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.socialLink}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harshijain22"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.socialLink}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.downloadBtn} href="https://drive.google.com/file/d/1YFMCLxxlxMKyTFCMVHMjY-hm8Tn2xCgz/view?usp=drivesdk">
            <Download size={18} />
            <span>View Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.scrollIndicator}
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}
