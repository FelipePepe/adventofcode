import { O_CREAT } from "constants";

export const CheckPassword_Second = (input: string[]) => {
  let valid: number = 0;
  input.forEach((policyAndPass) => {
    let policy = policyAndPass.split(":")[0];
    let password = policyAndPass.split(":")[1].trim();

    let firstPosition: number = Number(policy.split("-")[0]);
    let secondPosition: number = Number(policy.split("-")[1].split(" ")[0]);
    let letter: string = policy.split("-")[1].split(" ")[1];

    if (
      (password[firstPosition - 1] === letter &&
        password[secondPosition - 1] != letter) ||
      (password[firstPosition - 1] != letter &&
        password[secondPosition - 1] === letter)
    ) {
      valid++;
    }
  });
  console.log(valid);
};
