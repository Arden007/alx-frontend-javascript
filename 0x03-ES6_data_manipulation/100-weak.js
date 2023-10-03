export const weakMap = new WeakMap();

// Create a queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Get the current count for this endpoint
    const count = weakMap.get(endpoint);

    // Increment the count by 1
    weakMap.set(endpoint, count + 1);

    // Check if the count is >= 5
    if (count + 1 >= 5) {
      throw new Error("Endpoint load is high");
    }
  } else {
    // If the endpoint is not in the weakMap, add it with a count of 1
    weakMap.set(endpoint, 1);
  }
}
