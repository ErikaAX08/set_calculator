import styles from "./Keyboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faDeleteLeft,
  faC,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

import React, { useCallback, useEffect, useState, useRef } from "react";

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
  const [operation, setOperation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const maxWidthForDisabledInput = 1024;
      const currentWidth = window.innerWidth;
      setIsInputDisabled(currentWidth < maxWidthForDisabledInput);

      if (currentWidth < maxWidthForDisabledInput) {
        setCursorPosition(null);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (symbol: string) => {
    let newOperation;
    let positionToUse;

    if (symbol === "delete") {
      positionToUse =
        cursorPosition !== null && cursorPosition > 0
          ? cursorPosition - 1
          : operation.length - 1;

      newOperation =
        operation.slice(0, positionToUse) + operation.slice(positionToUse + 1);
      setCursorPosition(positionToUse);

      if (operation.length <= 0) setCursorPosition(0);
    } else {
      positionToUse =
        cursorPosition !== null ? cursorPosition : operation.length;
      newOperation =
        operation.slice(0, positionToUse) +
        symbol +
        operation.slice(positionToUse);
      setCursorPosition(positionToUse + 1);
    }

    setOperation(newOperation);
    setError(null);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    setCursorPosition(input.selectionStart);
  };

  const handleClearOperation = () => {
    setOperation("");
    setCursorPosition(0);
  };

  const handleCalculate = () => {
    console.log(`Calcular operacion ${operation}`);
  };

  const handleMoveToLeft = () => {
    let positionToUse =
      cursorPosition !== null && cursorPosition > 0 ? cursorPosition - 1 : 0;

    setCursorPosition(positionToUse);
  };

  const handleMoveToRight = () => {
    let positionToUse =
      cursorPosition !== null && cursorPosition < operation.length
        ? cursorPosition + 1
        : operation.length;

    setCursorPosition(positionToUse);
  };

  return (
    <div
      className={`${styles.container} ${
        isMenuOpen ? styles.container_hidde : ""
      }`}
    >
      <form className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            placeholder=""
            disabled={isInputDisabled}
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
              setCursorPosition(e.target.selectionStart || 0);
            }}
            onClick={handleInputClick}
          />
          <div
            className={styles.cursor}
            style={{ left: `${cursorPosition}ch` }}
          />
        </div>
        {error !== null && (
          <span className={styles.calculatorMessage}>
            Error performing operation
          </span>
        )}
      </form>
      <div className={styles.buttonsContainer}>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("P()")}
        >
          <p className={styles.mathSymboltText}>P(x)</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("()")}
        >
          <p className={styles.mathSymboltText}>(x)</p>
        </div>
        <div
          className={`${styles.buttonOption} ${styles.buttonDelete}`}
          onClick={() => handleClearOperation()}
        >
          <FontAwesomeIcon icon={faC} className={styles.mathSymboltText} />
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("∪")}
        >
          <p className={styles.mathSymboltText}>∪</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("∩")}
        >
          <p className={styles.mathSymboltText}>∩</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("/")}
        >
          <p className={styles.mathSymboltText}>/</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("A′")}
        >
          <p className={styles.mathSymboltText}>A′</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("Δ")}
        >
          <p className={styles.mathSymboltText}>Δ</p>
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleButtonClick("delete")}
        >
          <FontAwesomeIcon
            icon={faDeleteLeft}
            className={styles.mathSymboltText}
          />
        </div>
        <div className={styles.buttonOption} onClick={() => handleMoveToLeft()}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.mathSymboltText}
          />
        </div>
        <div
          className={styles.buttonOption}
          onClick={() => handleMoveToRight()}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.mathSymboltText}
          />
        </div>
        <div
          className={`${styles.buttonOption} ${styles.buttonAccent}`}
          onClick={() => handleCalculate()}
        >
          <FontAwesomeIcon icon={faEquals} className={styles.mathSymboltText} />
        </div>
      </div>
      {isUniversalSet && (
        <div>
          <h4>Available sets</h4>
          <div className={styles.setsContainer}>
            {isUniversalSet && (
              <div
                className={`${styles.buttonSet} ${styles.buttonAccent}`}
                onClick={() => handleButtonClick("U")}
              >
                <p className={styles.mathSymboltText}>U</p>
              </div>
            )}
            {letters.map((letter, index) => (
              <div
                key={index}
                className={`${styles.buttonSet}`}
                onClick={() => handleButtonClick(letter)}
              >
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
