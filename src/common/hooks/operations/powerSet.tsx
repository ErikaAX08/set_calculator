const powerSet = (sets: string[], letters: string[]): string[] => {
  let result: string[] = [];

  let mainSet = sets[0].split(",");
  for (
    let currentSetIndex = 1;
    currentSetIndex <= sets.length - 1;
    currentSetIndex++
  ) {
    let nextSet = sets[currentSetIndex].split(",");
    mainSet = [...mainSet, ...nextSet];
  }

  mainSet = mainSet.filter((item, index) => {
    return mainSet.indexOf(item) === index;
  });

  const numSubsets: number = Math.pow(2, mainSet.length);

  result.push(`Number of subsets: `);
  result.push(`P(x) = ${numSubsets}`);

  const cardinality = mainSet.length;
  result.push(`Cardinality of P(x):`);
  result.push(`2n = ${cardinality}`);

  result.push(`Subsets obtained: `);
  result.push(`{ ∅ }`);

  for (let maxElements = 1; maxElements <= cardinality; maxElements++) {

    for (let currentElement = 0; currentElement < cardinality; currentElement++) {
      let subset = [mainSet[currentElement]];

      if (subset.length === maxElements) {
        result.push(`{ ${subset.join(", ")} }`);
        continue;
      }

      for (let nextElement = currentElement + 1; nextElement < cardinality; nextElement++) {
        subset.push(mainSet[nextElement]);

        if (subset.length === maxElements) {
          result.push(`{ ${subset.join(", ")} }`);
          subset.pop();
        }
      }
    }
  }

  return result;
};

export default powerSet;
