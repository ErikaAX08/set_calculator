import {
  Compare,
  PowerSet,
  Intersection,
  Union,
  RelativeComplement,
} from "@hooks/index";
import { Set } from "@components/set";

const handleOperation = (
  sets: Set[],
  letters: string[],
  selectedOperation: number
): string[] => {
  let result: string[] = [];
  
  console.log(`Selected operation ${selectedOperation}`)

  switch (selectedOperation) {
    case 0:
      result = Compare(sets, letters);
      break;
    // case 1:
    //   result = PowerSet(sets, letters);
    //   break;
    // case 2:
    //   result = Intersection(sets, letters);
    //   break;
    // case 3:
    //   result = Union(sets, letters);
    //   break;
    // case 4:
    //   result = RelativeComplement(sets, letters);
    //   break;
    default:
      break;
  }

  return result;
};

export default handleOperation;
