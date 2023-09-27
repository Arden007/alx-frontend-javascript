import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
    const promises = [uploadPhoto(), createUser()];

    Promise.all(promises)
    .then((results) => {
        const [photoResponse, userResponse] = results;
        console.log(
          photoResponse.body,
          userResponse.firstName,
          userResponse.lastName
        );
    })
}
