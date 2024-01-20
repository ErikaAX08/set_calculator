import styles from "./UniversalSet.module.css"

import React from "react";

interface UniversalSetṔrops {
  set: string;
  letter: string
}

const UniversalSet: React.FC<UniversalSetṔrops> = ({ set, letter }) => {
  return <h2 className={styles.title} >{`${letter} = { ${set} }`}</h2>;
};

export default UniversalSet;
