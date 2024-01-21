import styles from "./Input.module.css";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface InputProps {
  onAddSet: (newSet: string) => void;
  placeholders: string[];
}

const Input: React.FC<InputProps> = ({ onAddSet, placeholders }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] =
    useState<number>(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue == "") {
      onAddSet("∅");
    } else {
      onAddSet(`∅, ${inputValue}`);
    }
    setInputValue("");
    setCurrentPlaceholderIndex((prevIndex) =>
      Math.min(prevIndex + 1, placeholders.length - 1)
    );
  };

  useEffect(() => {
    setDisplayedPlaceholder("");
  }, [currentPlaceholderIndex]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updatePlaceholder = () => {
      const currentPlaceholder = placeholders[currentPlaceholderIndex];
      const currentDisplayed = displayedPlaceholder;

      if (
        currentDisplayed.length < currentPlaceholder.length &&
        currentPlaceholder.startsWith(currentDisplayed)
      ) {
        const nextChar = currentPlaceholder[currentDisplayed.length];
        setDisplayedPlaceholder((prevValue) => prevValue + nextChar);
      } else {
        clearInterval(intervalId!);
      }
    };

    intervalId = setInterval(updatePlaceholder, 50);

    return () => {
      clearInterval(intervalId!);
    };
  }, [currentPlaceholderIndex, displayedPlaceholder, placeholders]);

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={displayedPlaceholder}
      />
      <button className={styles.button} type="submit">
        <Image src="/icon_enter.png" width={10} height={10} alt="Enter" />
      </button>
    </form>
  );
};

export default Input;
