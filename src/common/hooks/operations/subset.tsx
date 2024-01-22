import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const subset = (sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];

  for (let mainSetIndex = 0; mainSetIndex < sets.length; mainSetIndex++) {
    const mainSet = sets[mainSetIndex];

    for (let nextSetIndex = 0; nextSetIndex < sets.length; nextSetIndex++) {
      const nextSet = sets[nextSetIndex];
      let isSubset: boolean = true;

      if (mainSet !== nextSet) {
        for (let index = 0; index < nextSet.elements.length; index++) {
          if (!mainSet.elements.includes(nextSet.elements[index])) {
            isSubset = false;
          }
        }

        let subsetExpression = isSubset
          ? `${letters[nextSetIndex]} ⊆ ${letters[mainSetIndex]}`
          : `${letters[nextSetIndex]} ⊈ ${letters[mainSetIndex]}`;

        result.push({ text: `${subsetExpression}`, type: "default" });
      }
    }
  }

  return result;
};

export default subset;
