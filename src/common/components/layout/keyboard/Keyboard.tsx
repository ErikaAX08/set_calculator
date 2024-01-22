import styles from "./Keyboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faDeleteLeft,
  faC,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

interface KeyboardProps {
  isMenuOpen: boolean;
  isUniversalSet: boolean;
  letters: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({
  isMenuOpen,
  isUniversalSet,
  letters,
}) => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const maxWidthForDisabledInput = 1024;
      const currentWidth = window.innerWidth;
      setIsInputDisabled(currentWidth < maxWidthForDisabledInput);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${
        isMenuOpen ? styles.container_hidde : ""
      }`}
    >
      <form className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder=""
          disabled={isInputDisabled}
        />
        <span className={styles.calculatorMessage}>
          Error performing operation
        </span>
      </form>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>P(x)</p>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>(x)</p>
        </div>
        <div className={`${styles.buttonOption} ${styles.buttonDelete}`}>
          <FontAwesomeIcon icon={faC} className={styles.mathSymboltText} />
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>∪</p>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>∩</p>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>/</p>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>A′</p>
        </div>
        <div className={styles.buttonOption}>
          <p className={styles.mathSymboltText}>Δ</p>
        </div>
        <div className={styles.buttonOption}>
          <FontAwesomeIcon
            icon={faDeleteLeft}
            className={styles.mathSymboltText}
          />
        </div>
        <div className={styles.buttonOption}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.mathSymboltText}
          />
        </div>
        <div className={styles.buttonOption}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.mathSymboltText}
          />
        </div>
        <div className={`${styles.buttonOption} ${styles.buttonAccent}`}>
          <FontAwesomeIcon icon={faEquals} className={styles.mathSymboltText} />
        </div>
      </div>
      {isUniversalSet && (
        <div>
          <h4>Available sets</h4>
          <div className={styles.setsContainer}>
            {isUniversalSet && (
              <div className={`${styles.buttonSet} ${styles.buttonAccent}`}>
                <p className={styles.mathSymboltText}>U</p>
              </div>
            )}
            {letters.map((letter, index) => (
              <div key={index} className={`${styles.buttonSet}`}>
                <p className={styles.mathSymboltText}>{letter}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Keyboard;
