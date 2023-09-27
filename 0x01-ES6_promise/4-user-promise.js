export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
      if (firstName && lastName !== undefined| "") {
        resolve({
          firstName: firstName,
          lastName: lastName,
        });
      } else {
        reject(new Error("firstName, lastName undefined or empty string"));
      }
    });
}
