import styles from "./Results.module.css";
import { ItemSet, UniversalSet } from "@components/set";
import { Set } from "@components/set";

import React from "react";

interface ResultProps {
  universalSet: Set | null;
  sets: Set[];
  result: string[];
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
          <p key={index} className={styles.textResult}>
            {result}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Results;
