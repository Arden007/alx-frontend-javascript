export default function concatArrays(array1, array2, string) {
  const array0 = [...array1, ...array2, ...string];
  return array0;
}
