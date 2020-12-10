import { inputDay3 } from "./input";

export const TobogganTree = (input: string[], x: number, y: number): number => {
  let currentPosition: number[] = [0, 0];
  let countTrees: number = 0;
  let finished: boolean = false;

  while (!finished) {
    currentPosition = [
      (currentPosition[0] + x) % inputDay3[currentPosition[1]].length,
      currentPosition[1] + y,
    ];

    let field: string = inputDay3[currentPosition[1]];

    finished = inputDay3[currentPosition[1]] === undefined;

    if (!finished) {
      if (field.charAt(currentPosition[0]) === "#") {
        ++countTrees;
      }
    }
  }

  return countTrees;
};
