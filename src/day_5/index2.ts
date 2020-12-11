export const CalculateRealSeat_Second = (inputDay5: string[]): number => {

  let valueReturn: number = 0;
  let lstSeatsId: number[] = [];

  inputDay5.map((code) => {
    const row = Calculate(code.substring(0, 7), 0, 127, 'F');
    const seat = Calculate(code.substring(7, 11), 0, 7, 'L');

    const seatId = (row * 8) + seat;

    lstSeatsId[seatId] = 1;

  });

  let index = 0;

  lstSeatsId.map((value, index) => {
    if (!lstSeatsId[index - 1] && lstSeatsId[index] && lstSeatsId[index - 2]) {
      valueReturn = index - 1;
    }

  });

  return valueReturn;
}

const Calculate = (row: string, min: number, max: number, lower: string): number => {
  let rowReturn: number = 0;

  for (let index = 0; index < row.length; index++) {

    let count = max - min;
    let halfCount = Math.trunc(count / 2);

    if (row[index] === lower) {
      max = max - halfCount - 1;
    } else {
      min = min + halfCount + 1;
    }

    if (index == row.length - 1) {

      if (row[index] === lower) {
        rowReturn = max;
      }
      else {
        rowReturn = min;
      }


    }
  }

  return min;
};