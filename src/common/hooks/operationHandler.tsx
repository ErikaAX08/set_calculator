import {
  Compare,
  PowerSet,
  Intersection,
  Union,
  RelativeComplement,
  Difference
} from "@hooks/index";
import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";

const handleOperation = (
  universalSet: Set | null,
  sets: Set[],
  letters: string[],
  // selectedOperation: number
): ResultItem[] => {
  let result: ResultItem[] = [];
  
  result.push({ text: "1. Comparisons and subsets", type: "title" });
  result = result.concat(Compare(sets, letters))
  
  result.push({ text: "2. Union", type: "title" });
  result = result.concat(Union(sets, letters))
  
  result.push({ text: "3. Intersection", type: "title" });
  result = result.concat(Intersection(sets, letters))
  
  result.push({ text: "4. Difference", type: "title" });
  result = result.concat(Difference(sets, letters))
  
  result.push({ text: "5. Relative complement", type: "title" });
  result = result.concat(RelativeComplement(universalSet, sets, letters))
  
  result.push({ text: "6. Power set", type: "title" });
  result = result.concat(PowerSet(sets, letters))
  
  return result;
};

export default handleOperation;
