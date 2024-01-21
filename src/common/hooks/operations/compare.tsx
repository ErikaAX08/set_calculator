import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const compare = (sets: Set[], letters: string[]): ResultItem[] => {
  let result: ResultItem[] = [];

  for (let currentSetIndex = 0; currentSetIndex < sets.length; currentSetIndex++) {
    const mainSet = sets[currentSetIndex].elements
    result.push({ text: `Comparisons with ${letters[currentSetIndex]}`, type: "title" });

    for (let nextSetIndex = 0; nextSetIndex < sets.length; nextSetIndex++) {
      if (nextSetIndex !== currentSetIndex) {
        const nextSet = sets[nextSetIndex].elements
        let isEqual: boolean = true;
        let isSubset:  boolean = true;

        for (let index = 0; index < nextSet.length; index++) {
          if (!mainSet.includes(nextSet[index])) {
            isEqual = false;
            isSubset = false
            break;
          }
        }

        let comparisonExpression = isEqual
          ? `${letters[currentSetIndex]} = ${letters[nextSetIndex]}`
          : `${letters[currentSetIndex]} ≠ ${letters[nextSetIndex]}`;
          
          let subsetExpression = isSubset
          ? `${letters[currentSetIndex]} ⊆ ${letters[nextSetIndex]}`
          : `${letters[currentSetIndex]} ⊈ ${letters[nextSetIndex]}`;
          
        result.push({ text: `${comparisonExpression} : ${subsetExpression}`, type: "default" });
        
      }
    }
  }

  return result;
};


export default compare;
