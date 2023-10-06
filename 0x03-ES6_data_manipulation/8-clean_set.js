export default function cleanSet(set, startString) {
  if (startString === '') {
    return [...set].join('-');
  }

  const cleanedValues = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.substring(startString.length));
    }
  }

  const result = cleanedValues.join('-');

  return result;
}
