import styles from "./ResultItemStyle.module.css";
import { ResultItem } from ".";

const getResultElement = (resultItem: ResultItem): JSX.Element => {
  switch (resultItem.type) {
    case "title":
      return (
        <h3 className={styles.resultTitle} style={{ color: resultItem.color }}>
          {resultItem.text}
        </h3>
      );
    case "boldText":
      return (
        <p className={styles.boldText} style={{ color: resultItem.color }}>
          {resultItem.text}
        </p>
      );
    case "coloredText":
      return <p style={{ color: resultItem.color }}>{resultItem.text}</p>;
    default:
      return (
        <p className={styles.textResult} style={{ color: resultItem.color }}>
          {resultItem.text}
        </p>
      );
  }
};

export default getResultElement;
