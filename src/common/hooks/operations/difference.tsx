import { Set } from "@components/set";
import { ResultItem } from "@components/utils/results";
import { cleanSet } from "@components/utils";

const difference = (sets: Set[], letters: string[]) => {
  let result: ResultItem[] = [];

  for (let mainSetIndex = 0; mainSetIndex < sets.length; mainSetIndex++) {
    const mainSet = sets[mainSetIndex];

    for (
      let nextSetIndex = mainSetIndex + 1;
      nextSetIndex < sets.length;
      nextSetIndex++
    ) {
      const nextSet = sets[nextSetIndex];
      let differenceSet: string[] = [];

      for (let index = 0; index < nextSet.elements.length; index++) {
        if (!mainSet.elements.includes(nextSet.elements[index])) {
          differenceSet.push(nextSet.elements[index]);
        }
      }

      for (let index = 0; index < mainSet.elements.length; index++) {
        if (!nextSet.elements.includes(mainSet.elements[index])) {
          differenceSet.push(mainSet.elements[index]);
        }
      }

      let differenceSetFormated = cleanSet(
        differenceSet.toString()
      ).formattedString;

      result.push({
        text: `${letters[mainSetIndex]} / ${letters[nextSetIndex]}: { ${differenceSetFormated} }`,
        type: "default",
      });
    }
  }

  return result;
};

export default difference;
