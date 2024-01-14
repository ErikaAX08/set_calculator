import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Made by <a className={styles.link} href="https://github.com/ErikaAX08" target="_blank">@ErikaAX</a> </p>
    </footer>
  )
}

export default Footer