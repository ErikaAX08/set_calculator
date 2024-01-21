import styles from "./UniversalSet.module.css";

import React from "react";

interface UniversalSetṔrops {
  set: string;
  letter: string;
}

const UniversalSet: React.FC<UniversalSetṔrops> = ({ set, letter }) => {
  return (
    <h2
      className={styles.title}
      style={{
        animation: `typing 0.8s steps(${set.length}, end)`,
      }}
    >{`${letter} = { ${set} }`}</h2>
  );
};

export default UniversalSet;
