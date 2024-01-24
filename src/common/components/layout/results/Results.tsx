import styles from "./Results.module.css";
import { ItemSet, UniversalSet } from "@components/set";
import { Set } from "@components/set";
import { ResultItem, getResultElement } from "@components/utils/results";

import React, { useEffect, useState } from "react";
import results from ".";

interface ResultProps {
  universalSet: Set | null;
  sets: Set[];
  result: ResultItem[];
  letters: string[];
  onResultsShowing: () => void;
  onResultsShown: () => void;
}

const Results: React.FC<ResultProps> = ({
  universalSet,
  sets,
  result,
  letters,
  onResultsShowing,
  onResultsShown,
}) => {
  const [visibleResults, setVisibleResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const renderResultsSequentially = async () => {
      setVisibleResults([]);

      onResultsShowing();

      for (let i = 0; i < result.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (isMounted) {
          if (i > 0) {
            setVisibleResults((prevVisibleResults) => [
              ...prevVisibleResults,
              result[i],
            ]);
          } else {
            setVisibleResults([result[i]]);
          }
        }
      }

      setTimeout(() => {
        onResultsShown();
      }, 1000);
    };

    renderResultsSequentially();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <section className={styles.section}>
      <div className={styles.containerSets}>
        {universalSet && (
          <UniversalSet set={universalSet.formattedString} letter="U" />
        )}

        {sets.map((set: Set, index) => (
          <ItemSet
            key={index}
            set={set.formattedString}
            letter={letters[index % letters.length]}
          />
        ))}
      </div>

      <div className={styles.containerResults}>
        {visibleResults.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            {getResultElement(result)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
