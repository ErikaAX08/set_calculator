import React from "react"
import styles from "./Footer.module.css"

interface FooterProps {
  isMenuOpen: boolean
}

const Footer: React.FC<FooterProps> = ({ isMenuOpen }) => {
  return (
    <footer className={`${styles.footer} ${isMenuOpen ? styles.footer_hide : ""}`}>
        <p>Made by <a className={styles.link} href="https://github.com/ErikaAX08" target="_blank">@ErikaAX</a> </p>
    </footer>
  )
}

export default Footer