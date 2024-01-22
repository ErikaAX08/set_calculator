import { cleanSet } from "@/common/components/utils";
import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const powerSet = (sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];
  
  for (let currentSetIndex = 0; currentSetIndex < sets.length; currentSetIndex++) {
    let currentSet = [...sets[currentSetIndex].elements];
    currentSet.shift()
    
    currentSet = currentSet.filter((item, index) => {
      return currentSet.indexOf(item) === index;
    });
    
    const cardinality = currentSet.length;
    
    let powerSet: Array<string> = []
    powerSet.push(`{ ${cleanSet('∅').formattedString} } `)
    
    for (let maxElements = 1; maxElements <= cardinality; maxElements++) {
    
      for (let currentElement = 0; currentElement < cardinality; currentElement++) {
        let subset = [currentSet[currentElement]];
  
        if (subset.length === maxElements) {
            powerSet.push(`{ ${cleanSet(subset.toString()).formattedString} }`)
          continue;
        }
  
        for (let nextElement = currentElement + 1; nextElement < cardinality; nextElement++) {
          subset.push(currentSet[nextElement]);
  
          if (subset.length === maxElements) {
            powerSet.push(`{ ${cleanSet(subset.toString()).formattedString} }`)
            subset.pop();
          }
        }
      }
    }
    
    result.push({ text: `P(${letters[currentSetIndex]}) = { ${cleanSet(powerSet.toString()).formattedString} }`, type: "default" });
  }

  return result;
};

export default powerSet;
