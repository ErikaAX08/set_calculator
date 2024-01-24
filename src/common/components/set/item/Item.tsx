import { TypewriterAnimation } from "@components/utils";
import styles from "./Item.module.css";

import React from "react";

interface ItemSetProps {
  set: string;
  letter: string;
}

const ItemSet: React.FC<ItemSetProps> = ({ set, letter }) => {
  return (
    <TypewriterAnimation
      className={styles.container}
      text={`${letter} = { ${set} }`}
      elementType="h3"
      speed={10}
    />
  );
};

export default ItemSet;
