import styles from "./Results.module.css";
import { ItemSet } from "@components/set";
import { Toast } from "@components/utils";

import React from "react";

interface ResultProps {
  sets: string[];
  result: string[];
  letters: string[];
}

const Results: React.FC<ResultProps> = ({ sets, result, letters }) => {
  return (
    <section className={styles.section}>
      <Toast />
      <div className={styles.containerSets}>
        {sets.map((set: string, index) => (
          <ItemSet
            key={index}
            set={set}
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
