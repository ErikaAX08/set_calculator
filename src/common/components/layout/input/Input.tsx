import styles from "./Input.module.css"

import Image from "next/image"

function Input() {
  return (
    <form className={styles.container}>
        <input className={styles.input} placeholder="Enter set" />
        <button className={styles.button}>
          <Image src="/icon_enter.png" width={10} height={10} alt="Enter" />
        </button>
    </form>
  )
}

export default Input