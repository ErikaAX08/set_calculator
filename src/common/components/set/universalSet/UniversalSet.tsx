import styles from "./UniversalSet.module.css";
import { TypewriterAnimation } from "@components/utils";

import React from "react";

interface UniversalSetṔrops {
  set: string;
  letter: string;
}

const UniversalSet: React.FC<UniversalSetṔrops> = ({ set, letter }) => {
  return (
    <TypewriterAnimation
      className={styles.title}
      text={`${letter} = { ${set} }`}
      elementType="h2"
      speed={10}
    />
  );
};

export default UniversalSet;
