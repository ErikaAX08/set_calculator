import { cleanSet } from "@/common/components/utils";
import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const union = (sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];
  
  for (let mainSetIndex = 0; mainSetIndex < sets.length; mainSetIndex++) {
    const mainSet = sets[mainSetIndex];
    
    for (let nextSetIndex = mainSetIndex + 1; nextSetIndex < sets.length; nextSetIndex++) {
      const nextSet = sets[nextSetIndex];
      let unionSet: string[] = [...mainSet.elements, ...nextSet.elements]
      
      unionSet = unionSet.filter((item, index) => {
        return unionSet.indexOf(item) === index;
      });
      
      let unionSetFormated = cleanSet(unionSet.toString()).formattedString
      
      result.push({ text: `${letters[mainSetIndex]} ∪ ${letters[nextSetIndex]}: { ${unionSetFormated} }`, type: "default" });
    }
    
  }

  return result;
};

export default union;
