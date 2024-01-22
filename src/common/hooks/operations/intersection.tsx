import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";
import { cleanSet } from "@components/utils";

const intersection = (sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];
  
  for (let mainSetIndex = 0; mainSetIndex < sets.length; mainSetIndex++) {
    const mainSet = sets[mainSetIndex];
    
    for (let nextSetIndex = mainSetIndex + 1; nextSetIndex < sets.length; nextSetIndex++) {
      const nextSet = sets[nextSetIndex];
      let intersectionSet: string[] = []
      
      for (let index = 0; index < nextSet.elements.length; index++) {
        if (mainSet.elements.includes(nextSet.elements[index])) {
          intersectionSet.push(nextSet.elements[index])
        }        
      }
      
      let intersectionSetFormated = cleanSet(intersectionSet.toString()).formattedString
      
      result.push({ text: `${letters[mainSetIndex]} ∩ ${letters[nextSetIndex]}: { ${intersectionSetFormated} }`, type: "default" });
    }
    
  }

  return result;
};

export default intersection;
