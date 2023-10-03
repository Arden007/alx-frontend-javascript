export default function getStudentIdsSum(arr){
  const sum = arr.reduce((previousValue, student) => {
    return previousValue + student.id;
  }, 0);
  return sum;
}
