import styles from "./Item.module.css";

import React from "react";

interface ItemSetProps {
  set: string;
  letter: string;
}

const ItemSet: React.FC<ItemSetProps> = ({ set, letter }) => {
  return (
    <h3
      className={styles.container}
      style={{
        animation: `typing 0.8s steps(${set.length}, end)`,
      }}
    >{`${letter} = { ${set} }`}</h3>
  );
};

export default ItemSet;
