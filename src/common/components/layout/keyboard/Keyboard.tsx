import styles from "./Keyboard.module.css";

import React, { useState, useEffect } from "react";

interface KeyboardProps {
  onCalculate: (operation: number) => void;
  resetSets: () => void
}

const Keyboard: React.FC<KeyboardProps> = ({ onCalculate, resetSets }) => {
  const [selectedOperation, setSelectedOperation] = useState<number>(0);

  const handleOperationClick = (operation: number) => {
    setSelectedOperation(operation);
    onCalculate(selectedOperation)
  };
  
  useEffect(() => {
    onCalculate(selectedOperation);
  }, [selectedOperation, onCalculate]);

  const handleResetClick = () => {
    resetSets()
  };

  return (
    <div>
      <div className={styles.container}>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 0 ? styles.selectedOption : ""
          }`}
          onClick={() => handleOperationClick(0)}
        >
          <p className={styles.mathSymboltText}>A = B</p>
          <span className={styles.buttonSubtitle}>Compare</span>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 1 ? styles.selectedOption : ""
          }`}
          onClick={() => handleOperationClick(1)}
        >
          <p className={styles.mathSymboltText}>
            2
            <sup>
              <span className={styles.mathSymboltTextSub}>A</span>
            </sup>
          </p>
          <span className={styles.buttonSubtitle}>Power Set</span>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 2 ? styles.selectedOption : ""
          }`}
          onClick={() => handleOperationClick(2)}
        >
          <p className={styles.mathSymboltText}>A ∩ B</p>
          <span className={styles.buttonSubtitle}>Intersection</span>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 3 ? styles.selectedOption : ""
          }`}
          onClick={() => handleOperationClick(3)}
        >
          <p className={styles.mathSymboltText}>A ∪ B</p>
          <span className={styles.buttonSubtitle}>Union</span>
        </div>
        <div
          className={`${styles.buttonOption} ${
            selectedOperation == 4 ? styles.selectedOption : ""
          }`}
          onClick={() => handleOperationClick(4)}
        >
          <p className={styles.mathSymboltText}>A - B</p>
          <span className={styles.buttonSubtitle}>Relative Complement</span>
        </div>
      </div>
      <button
        className={styles.buttonCalculate}
        onClick={() => handleResetClick()}
      >
        Reset
      </button>
    </div>
  );
};

export default Keyboard;
