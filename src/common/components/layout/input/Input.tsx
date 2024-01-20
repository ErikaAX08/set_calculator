import styles from "./Input.module.css";

import Image from "next/image";
import React, { useState } from "react";

interface InputProps {
  onAddSet: (newSet: string) => void;
  placeholders: string[];
}

const Input: React.FC<InputProps> = ({ onAddSet, placeholders }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] =
    useState<number>(0);

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

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholders[currentPlaceholderIndex]}
      />
      <button className={styles.button} type="submit">
        <Image src="/icon_enter.png" width={10} height={10} alt="Enter" />
      </button>
    </form>
  );
};

export default Input;
