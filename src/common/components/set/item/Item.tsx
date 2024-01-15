import styles from "./Item.module.css"

import React from "react";

interface ItemSetProps {
  set: string;
  letter: string;
}

const ItemSet: React.FC<ItemSetProps> = ({ set, letter }) => {
  return (
    <div className={styles.container}>{`${letter} = { ${set} }`}</div>
  )
}

export default ItemSet