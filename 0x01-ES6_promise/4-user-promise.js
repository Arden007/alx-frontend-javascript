export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (
      firstName !== undefined &&
      lastName !== undefined &&
      firstName !== '' &&
      lastName !== ''
    ) {
      resolve({
        firstName: firstName,
        lastName: lastName,
      });
    } else {
      reject(
        new Error('firstName or lastName is undefined or an empty string')
      );
    }
  });
}
