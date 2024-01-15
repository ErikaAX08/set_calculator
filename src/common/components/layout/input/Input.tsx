import styles from "./Input.module.css"

import Image from "next/image"
import React, { useState } from "react"

interface InputProps {
  onAddSet: (newSet: string) => void
}

const Input:React.FC<InputProps> = ({ onAddSet }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddSet(inputValue);
    setInputValue('');
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
        <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter set" />
        <button className={styles.button} type="submit">
          <Image src="/icon_enter.png" width={10} height={10} alt="Enter" />
        </button>
    </form>
  )
}

export default Input