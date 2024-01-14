import styles from "./Keyboard.module.css"

function Keyboard() {
  return (
    <div>
       <div className={styles.container} >
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>A = B</p>
          <span className={styles.buttonSubtitle}>Compare</span>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>
            2<sup><span className={styles.mathSymboltTextSub}>A</span></sup>
          </p>
          <span className={styles.buttonSubtitle}>Power Set</span>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>A ∩ B</p>
          <span className={styles.buttonSubtitle}>Intersection</span>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>A ∪ B</p>
          <span className={styles.buttonSubtitle}>Union</span>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>A - B</p>
          <span className={styles.buttonSubtitle}>Relative Complement</span>
        </div>
        </div>
        <button className={styles.buttonCalculate}>Calculate</button>
    </div>
   
  )
}

export default Keyboard