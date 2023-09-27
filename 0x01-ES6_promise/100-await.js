import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error("One of the async functions failed:", error);
    return {
      photo: null,
      user: null,
    };
  }
}
