export default function cleanSet(Set, startString) {
  if (startString === '') {
    return '';
  }
  const cleanedValues = [];

  for (const value of Set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.substring(startString.length));
    }
  }

  const result = cleanedValues.join('-');

  return result;
}
