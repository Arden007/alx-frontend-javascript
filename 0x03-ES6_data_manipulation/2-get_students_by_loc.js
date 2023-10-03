export default function getStudentByLocation(arr,city){
  const place = arr.filter(student => student.location == city)
  return place
}
