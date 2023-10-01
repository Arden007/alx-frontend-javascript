export default function returnHowManyArguments(...args) {
  let total = 0;
  let arg = ""
  for (arg of args) {
      total += 1;
  }
  return total;
}
