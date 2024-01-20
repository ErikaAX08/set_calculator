import styles from "./Keyboard.module.css";

import React, { useState } from "react";

interface KeyboardProps {
  isMenuOpen: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({ isMenuOpen }) => {
  const [selectedOperation, setSelectedOperation] = useState<number>(0);

  const handleOperationClick = (operation: number) => {
    setSelectedOperation(operation);
  };
 
  return (
    <div className={ `${styles.container} ${ isMenuOpen ? styles.container_hidde : "" }` } >
      <form className={ styles.inputContainer }>
        <input className={ styles.input } placeholder="" />
        <span className={ styles.calculatorMessage } >Error performing operation</span>
      </form>
      <div className={styles.buttonsContainer}>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 0 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>P(x)</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 1 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>(x)</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 2 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>C</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 3 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>∪</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 4 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>∩</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 5 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>/</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 6 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>A′</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 7 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>Δ</p>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 8 ? styles.selectedOption : ""
          }`}
        >
          <p className={styles.mathSymboltText}>=</p>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
