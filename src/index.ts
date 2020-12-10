import { CalculatePuzzleDay1_First } from "./day_1";
import { CalculatePuzzleDay1_Second } from "./day_1/index2";
import { inputDay1 } from "./day_1/input";

import { inputDay2 } from "./day_2/input";
import { CheckPassword_First } from "./day_2";
import { CheckPassword_Second } from "./day_2/index2";

import { inputDay3 } from "./day_3/input";
import { TobogganTree } from "./day_3";

import { inputDay4 } from "./day_4/input";
import { CountValidPassports_First } from "./day_4";
import { CountValidPassports_Second } from "./day_4/index2";

//CalculatePuzzleDay1_First(inputDay1);
//CalculatePuzzleDay1_Second(inputDay1);

//CheckPassword_First(inputDay2);
//CheckPassword_Second(inputDay2);

// console.log(
//   TobogganTree(inputDay3, 1, 1) *
//     TobogganTree(inputDay3, 3, 1) *
//     TobogganTree(inputDay3, 5, 1) *
//     TobogganTree(inputDay3, 7, 1) *
//     TobogganTree(inputDay3, 1, 2)
// );

//console.log(CountValidPassports_First(inputDay4));
console.log(CountValidPassports_Second(inputDay4));
