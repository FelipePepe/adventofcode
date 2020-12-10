import { stringify } from "querystring";

export const CountValidPassports_Second = (input: string[]): number => {
  let valid: number = 0;
  let linePass: string = "";
  let validbyr: boolean = false;
  let validiyr: boolean = false;
  let valideyr: boolean = false;
  let validhgt: boolean = false;
  let validhcl: boolean = false;
  let validecl: boolean = false;
  let validpid: boolean = false;

  input.forEach((line) => {
    line = line.trim();
    if (line.length === 0) {
      let paramsValue = linePass.split(" ");
      validbyr = false;
      validecl = false;
      valideyr = false;
      validhcl = false;
      validhgt = false;
      validiyr = false;
      validpid = false;

      paramsValue.forEach((paramValue) => {
        let param = paramValue.split(":")[0];
        let value = paramValue.split(":")[1];

        if (param === "byr") {
          validbyr = Number(value) >= 1920 && Number(value) <= 2002;
          console.log(param, value, validbyr);
        } else if (param === "iyr") {
          validiyr = Number(value) >= 2010 && Number(value) <= 2020;
          console.log(param, value, validiyr);
        } else if (param === "eyr") {
          valideyr = Number(value) >= 2020 && Number(value) <= 2030;
          console.log(param, value, valideyr);
        } else if (param === "hgt") {
          if (value.indexOf("in") != -1) {
            let inches: number = Number(value.substr(0, value.length - 2));
            console.log(param, value, inches);
            validhgt = inches >= 59 && inches <= 76;
          } else if (value.indexOf("cm") != -1) {
            let centimetres: number = Number(
              value.substring(0, value.length - 2)
            );
            console.log(param, value, centimetres);
            validhgt = centimetres >= 150 && centimetres <= 193;
          }
          console.log(param, value, validhgt);
        } else if (param === "hcl") {
          let re = /^#[0-9a-f]{6}/;
          validhcl = re.test(value);
          console.log(param, value, validhcl);
        } else if (param === "ecl") {
          validecl =
            value.indexOf("amb") != -1 ||
            value.indexOf("blu") != -1 ||
            value.indexOf("brn") != -1 ||
            value.indexOf("gry") != -1 ||
            value.indexOf("grn") != -1 ||
            value.indexOf("hzl") != -1 ||
            value.indexOf("oth") != -1;
          console.log(param, value, validecl);
        } else if (param === "pid") {
          validpid = value.length === 9;
          console.log(param, value, validpid);
        }
      });
      if (
        validbyr &&
        validecl &&
        valideyr &&
        validhcl &&
        validhgt &&
        validiyr &&
        validpid
      ) {
        valid++;
      }
      console.log(
        linePass,
        "byr",
        validbyr,
        "ecl",
        validecl,
        "eyr",
        valideyr,
        "hcl",
        validhcl,
        "hgt",
        validhgt,
        "iyr",
        validiyr,
        "pid",
        validpid,
        valid
      );
      linePass = "";
    } else {
      linePass = linePass + " " + line;
    }
  });

  return valid;
};
