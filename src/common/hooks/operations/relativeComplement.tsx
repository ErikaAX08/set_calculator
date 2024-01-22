import set from "@/common/components/set/set";
import { cleanSet } from "@/common/components/utils";
import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const relativeComplement = (universalSet: set | null, sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];
  
  if (universalSet === null) {
    result.push({ text: "The universal set has not been entered", type: "default", color: "rgb(255 99 99)" });
  } else {
    
    for (let currentSetIndex = 0; currentSetIndex < sets.length; currentSetIndex++) {
      const currentSet = sets[currentSetIndex];
      let complementSet: string[] = []
      
      for (let index = 0; index < universalSet.elements.length; index++) {
        const element = universalSet.elements[index];
        
        if (!currentSet.elements.includes(element)) {
          complementSet.push(element)
        }
      }
      
      const complementSetFormated = cleanSet(complementSet.length == 0 ? "∅" : complementSet.toString()).formattedString
      result.push({ text: `${letters[currentSetIndex]}′ = { ${complementSetFormated} }`, type: "default" });
    }
    
  }
  

  return result;
};

export default relativeComplement;
