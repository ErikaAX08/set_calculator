import styles from "./ResultItemStyle.module.css";
import { ResultItem } from ".";
import { TypewriterAnimation } from "..";

const getResultElement = (resultItem: ResultItem): JSX.Element => {
  switch (resultItem.type) {
    case "title":
      return (
        <TypewriterAnimation
          text={resultItem.text}
          className={styles.resultTitle}
          elementType="h3"
          speed={8}
        />
      );
    case "boldText":
      return (
        <TypewriterAnimation
          text={resultItem.text}
          className={styles.boldText}
          elementType="p"
          speed={8}
        />
      );
    default:
      return (
        <TypewriterAnimation
          text={resultItem.text}
          className={styles.textResult}
          elementType="p"
          speed={8}
        />
      );
  }
};

export default getResultElement;
