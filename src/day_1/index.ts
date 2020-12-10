export const CalculatePuzzleDay1_First = (input: number[]) => {
  let components: number[] = [];

  let num: String;

  let found: number = 0;

  input.forEach((num) => {
    components[num] = 1;
    let factor: number = 2020 - num;

    if (components[factor] === 1) {
      console.log("result: ", num, factor, factor * num);
      found++;
    }
  });
};
