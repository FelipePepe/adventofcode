export const CountValidPassports_First = (input: string[]): number => {
  let valid: number = 0;
  let cidFinded: boolean = false;
  let linePass: string = "";
  let paramsPass: string[] = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    "cid",
  ];

  input.forEach((line) => {
    if (line.length === 0) {
      cidFinded = false;

      let paramsValue = linePass.trim().split(" ");

      paramsValue.forEach((param) => {
        if (!cidFinded) {
          cidFinded = param.split(":")[0] === "cid";
        }
      });

      if (paramsValue.length === paramsPass.length) {
        valid++;
      } else {
        if (paramsValue.length === paramsPass.length - 1 && !cidFinded) {
          valid++;
        }
      }
      if (paramsValue.length === 7) {
        console.log(linePass, paramsValue.length, cidFinded, valid);
      }
      linePass = "";
    } else {
      linePass = linePass + " " + line;
    }
  });

  return valid;
};
