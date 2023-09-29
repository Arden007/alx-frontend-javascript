import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((results) => {
      const [photoResponse, userResponse] = results;
      return {
        photoBody: photoResponse.body,
        firstName: userResponse.firstName,
        lastName: userResponse.lastName,
      };
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
