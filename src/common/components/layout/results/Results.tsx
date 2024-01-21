import styles from "./Results.module.css";
import { ItemSet, UniversalSet } from "@components/set";
import { Set } from "@components/set";
import { ResultItem, getResultElement } from "@components/utils/results";

import React from "react";

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
        {result.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            {getResultElement(result)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
