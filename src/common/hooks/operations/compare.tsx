import { Set } from "@components/set";

const compare = (sets: Set[], letters: string[]): string[] => {
  let result: string[] = [];

  for (let currentSetIndex = 0; currentSetIndex < sets.length; currentSetIndex++) {
    const mainSet = sets[currentSetIndex].elements
    result.push(`Comparisons with ${letters[currentSetIndex]}`);

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
          console.log(`${mainSet} contiene ${nextSet[index]}? ${isEqual}`);
        }

        let comparisonExpression = isEqual
          ? `${letters[currentSetIndex]} = ${letters[nextSetIndex]}`
          : `${letters[currentSetIndex]} ≠ ${letters[nextSetIndex]}`;
          
          let subsetExpression = isSubset
          ? `${letters[currentSetIndex]} ⊆ ${letters[nextSetIndex]}`
          : `${letters[currentSetIndex]} ⊈ ${letters[nextSetIndex]}`;
          
        result.push(`${comparisonExpression} : ${subsetExpression}`);
        
      }
    }
  }

  return result;
};


export default compare;
