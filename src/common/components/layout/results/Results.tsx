import styles from "./Results.module.css";
import { ItemSet, UniversalSet } from "@components/set";
import { Set } from "@components/set";
import { ResultItem, getResultElement } from "@components/utils/results";

import React, { useEffect, useState } from "react";

interface ResultProps {
  universalSet: Set | null;
  sets: Set[];
  result: ResultItem[];
  letters: string[];
}

const Results: React.FC<ResultProps> = ({
  universalSet,
  sets,
  result,
  letters,
}) => {
  const [visibleResults, setVisibleResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const renderResultsSequentially = async () => {
      setVisibleResults([]);

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
    };

    renderResultsSequentially();

    return () => {
      isMounted = false;
    };
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
