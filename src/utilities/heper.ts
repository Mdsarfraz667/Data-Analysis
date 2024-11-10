// Groups an array of objects by a specified key.

function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  // Use reduce to iterate over the array and accumulate the grouped results
  return array.reduce((result, currentValue) => {
    // Convert the value of the key to a string to be used as the group key
    const groupKey = currentValue[key] as unknown as string;

    // If the groupKey does not exist in the result object, initialize it with an empty array
    // Push the current item into the corresponding group in the result
    (result[groupKey] = result[groupKey] || []).push(currentValue);

    // Return the updated result after processing the current item
    return result;
  }, {} as Record<string, T[]>); // Initialize the result as an empty object
}

export default groupBy;
