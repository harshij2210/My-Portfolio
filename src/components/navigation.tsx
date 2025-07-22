"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "./navigation.module.css"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <motion.div whileHover={{ scale: 1.05 }} className={styles.logo}>
            Welocome to My Portfolio
          </motion.div>

          <div className={styles.navItems}>
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.navItem} ${activeSection === item.href.substring(1) ? styles.active : ""}`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
