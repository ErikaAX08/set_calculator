"use client";
import { Footer, Header, Keyboard, Input, Results } from "@components/layout";
import styles from "./page.module.css";

import { useState, useEffect } from "react";
import { handleOperation } from "@hooks/index";

export default function Home() {
  const [sets, setSets] = useState<string[]>([]);
  const [selectedOperation, setSelectedOperation] = useState<number>(0);
  const [letters, setLetters] = useState<string[]>(["A"] as string[]);
  const [result, setResult] = useState<string[]>([]);
  
  const handleAddSet = (newSet: string) => {
    setSets([...sets, newSet]);
  };

  const handleCalculate = (operation: number) => {
    setSelectedOperation(operation);    
  };
  
  useEffect(() => {
    setLetters((prevLetters) => {
      const lastLetter = prevLetters[prevLetters.length - 1];
      const newLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
      return [...prevLetters, newLetter];
    });
  }, [sets]);
  
  useEffect(() => {
    if (sets.length >= 2) {
      setResult(handleOperation(sets, letters, selectedOperation));
    }
  }, [selectedOperation, letters, sets]);
  
  const resetSets = () => {
    setSets([]);
    setLetters(["A"]);
    setResult([]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div>
          <Results sets={sets} result={result} letters={letters} />
          <Input onAddSet={handleAddSet} />
        </div>
      </div>

      <div className={styles.optionsContainer}>
        <Header />
        <Keyboard onCalculate={handleCalculate} resetSets={resetSets} />
        <Footer />
      </div>
    </main>
  );
}
