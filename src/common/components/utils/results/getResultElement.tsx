import styles from "./ResultItemStyle.module.css";
import { ResultItem } from ".";

const getResultElement = (resultItem: ResultItem): JSX.Element => {
  switch (resultItem.type) {
    case "title":
      return (
        <h3
          className={styles.resultTitle}
          style={{
            color: resultItem.color,
            animation: `typing 0.8s steps(${resultItem.text.length}, end)`,
          }}
        >
          {resultItem.text}
        </h3>
      );
    case "boldText":
      return (
        <p
          className={styles.boldText}
          style={{
            color: resultItem.color,
            animation: `typing 0.8s steps(${resultItem.text.length}, end)`,
          }}
        >
          {resultItem.text}
        </p>
      );
    default:
      return (
        <p
          className={styles.textResult}
          style={{
            color: resultItem.color,
            animation: `typing 0.8s steps(${resultItem.text.length}, end)`,
          }}
        >
          {resultItem.text}
        </p>
      );
  }
};

export default getResultElement;
