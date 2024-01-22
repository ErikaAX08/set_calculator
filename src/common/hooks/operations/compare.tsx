import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";
import subset from "./subset";

const compare = (sets: Set[], letters: string[]): ResultItem[] => {
  let result: ResultItem[] = [];

  for (let mainSetIndex = 0; mainSetIndex < sets.length; mainSetIndex ++) {
    const mainSet = sets[mainSetIndex];
    
    for (let nextSetIndex = mainSetIndex + 1; nextSetIndex < sets.length; nextSetIndex++) {
      const nextSet = sets[nextSetIndex];
      result.push({ text: `${letters[mainSetIndex]} and ${letters[nextSetIndex]}`, type: "boldText" })
      
      let isEqual: boolean = true;
          
      for (let index = 0; index < nextSet.elements.length; index++) {
        if (mainSet.elements.length !== nextSet.elements.length) {
          isEqual = false
          break
        } else if(!mainSet.elements.includes(nextSet.elements[index])) {
          isEqual = false;
          break;
        }
      }
  
      let comparisonExpression = isEqual
        ? `${letters[mainSetIndex]} = ${letters[nextSetIndex]}`
        : `${letters[mainSetIndex]} ≠ ${letters[nextSetIndex]}`;
      
      result.push({ text: `${comparisonExpression}`, type: "default" });
      
      const setsToCompare: Set[] = [];
      setsToCompare.push(mainSet)
      setsToCompare.push(nextSet)
      
      const lettersToCompare: string[] = [];
      lettersToCompare.push(letters[mainSetIndex])
      lettersToCompare.push(letters[nextSetIndex])
      
      result = result.concat(subset(setsToCompare, lettersToCompare));
    }
      
  }  

  return result;
};


export default compare;
