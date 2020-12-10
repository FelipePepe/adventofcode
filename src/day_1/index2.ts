export const CalculatePuzzleDay1_Second = (input: number[]) => {
  let components: number[] = [];
  let originalComponents: number[] = [];

  let num: String;

  input.forEach((num) => {
    originalComponents[num] = 1;
    components = [...originalComponents];
    input.forEach((num2) => {
      components[num2] = 1;
      let factor: number = 2020 - num - num2;

      if (factor > 0) {
        if (components[factor] === 1) {
          console.log("result: ", num, num2, factor, factor * num * num2);
        }
      }
    });
  });
};
