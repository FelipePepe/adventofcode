export const CheckPassword_First = (input: string[]) => {
  let valid: number = 0;
  input.forEach((policyAndPass) => {
    let policy = policyAndPass.split(":")[0];
    let password = policyAndPass.split(":")[1].trim();

    let minoccur: number = Number(policy.split("-")[0]);
    let maxoccur: number = Number(policy.split("-")[1].split(" ")[0]);
    let letter: string = policy.split("-")[1].split(" ")[1];

    let occur: number = 0;

    password.split("").forEach((letterPassword) => {
      if (letter === letterPassword) {
        ++occur;
      }
    });

    if (occur >= minoccur && occur <= maxoccur) {
      valid++;
    }
  });
  console.log(valid);
};
