"use client";
import styles from "./page.module.css";
import { Footer, Header, Keyboard, Input, Results } from "@components/layout";
import { handleOperation } from "@hooks/index";
import { cleanSet } from "@components/utils";
import { ResultItem } from "@components/utils/results";
import { Set } from "@components/set";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [sets, setSets] = useState<Set[]>([]);
  const [universalSet, setUniversalSet] = useState<Set | null>(null);
  // const [selectedOperation, setSelectedOperation] = useState<number>(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [result, setResult] = useState<ResultItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const [automaticScroll, setAutomaticScroll] = useState<boolean>(false);

  const placeholders = ["Enter the universal set", "Enter a set"];

  const handleAddSet = (newSet: string) => {
    if (universalSet === null) setUniversalSet(cleanSet(newSet));
    else {
      const newSetResult: Set = cleanSet(newSet);
      let isSubset: boolean = true;

      newSetResult.elements.map((item: string) => {
        if (!universalSet.elements.includes(item)) {
          isSubset = false;
        }
      });

      if (isSubset) {
        setSets([...sets, newSetResult]);
      } else
        setResult([
          ...result,
          {
            text: "The set entered is not a subset of U",
            type: "default",
            color: "rgb(255 99 99)",
          },
        ]);
    }
  };

  useEffect(() => {
    if (sets.length > 0) {
      setLetters((prevLetters) => {
        let newLetter = "A";

        if (prevLetters.length > 0) {
          const lastLetter = prevLetters[prevLetters.length - 1];
          newLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
        }

        return [...prevLetters, newLetter];
      });
    }
  }, [sets]);

  useEffect(() => {
    if (sets.length >= 2) {
      setResult(handleOperation(universalSet, sets, letters));
    }
  }, [letters, sets, universalSet]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenSizeThreshold = 767;
      setIsMenuOpen(window.innerWidth <= screenSizeThreshold);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollToEnd = () => {
      if (automaticScroll && resultsContainerRef.current) {
        const container = resultsContainerRef.current;
        container.scrollTop = container.scrollHeight + 5000;
      }
    };

    scrollToEnd();

    const intervalId: NodeJS.Timeout = setInterval(scrollToEnd, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [resultsContainerRef, automaticScroll]);

  const handleResultsShowing = () => setAutomaticScroll(true);

  const handleResultsShown = () => setAutomaticScroll(false);

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div ref={resultsContainerRef}>
          <Results
            universalSet={universalSet}
            sets={sets}
            result={result}
            letters={letters}
            onResultsShowing={handleResultsShowing}
            onResultsShown={handleResultsShown}
          />
          <Input onAddSet={handleAddSet} placeholders={placeholders} />
        </div>
      </div>

      <div className={styles.optionsContainer}>
        <Header onHandleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
        <Keyboard
          isMenuOpen={isMenuOpen}
          isUniversalSet={universalSet != null}
          letters={letters}
        />
        <Footer isMenuOpen={isMenuOpen} />
      </div>
    </main>
  );
}
